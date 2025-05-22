<template>
  <section class="services-view">
    <h2 class="section-title">Our Services</h2>
    
    <div v-for="(service, index) in services" :key="index" class="service-section">
      <h3 class="service-header">{{ service.title }}</h3>
      <div class="service-carousel">
        <button class="nav-btn prev" @click="prevSlide(index)" aria-label="Previous">&lt;</button>
        
        <div class="carousel-track" :style="{ transform: `translateX(-${currentSlides[index] * slidePercentage}%)` }">
          <div 
            v-for="(image, imgIndex) in service.images" 
            :key="imgIndex" 
            class="service-image-container"
            @click="openModal(index, imgIndex)"
          >
            <img :src="image" :alt="service.title" class="service-image">
            <div class="image-overlay">
              <span class="view-text">View Details</span>
            </div>
          </div>
        </div>

        <button class="nav-btn next" @click="nextSlide(index)" aria-label="Next">&gt;</button>
      </div>
    </div>

    <!-- Service Modal -->
    <div v-if="selectedService !== null" class="service-modal" @click.self="closeModal">
      <div class="modal-content">
        <button class="close-btn" @click="closeModal" aria-label="Close Modal">&times;</button>
        <div class="modal-carousel">
          <img 
            :src="services[selectedService].images[selectedImageIndex]" 
            :alt="services[selectedService].title" 
            class="modal-main-image"
          >
          <div class="modal-thumbnails">
            <img
              v-for="(image, idx) in services[selectedService].images"
              :key="idx"
              :src="image"
              :class="{ active: idx === selectedImageIndex }"
              @click="selectedImageIndex = idx"
              :alt="`Thumbnail ${idx + 1}`"
            >
          </div>
        </div>
        <div class="modal-details">
          <h3>{{ services[selectedService].title }}</h3>
          <p>{{ services[selectedService].description }}</p>
        </div>
      </div>
    </div>
  </section>

  <section>
    <!-- <NewRoom/> -->
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
// import NewRoom from './NewRoom.vue';

const services = ref([
  {
    title: 'Solar Installation',
    description: 'Professional solar panel installation and maintenance services',
    images: [
      'https://res.cloudinary.com/dkjqzjthp/image/upload/v1747777887/alarm-install-3_mrvyp1.jpg',
      'https://res.cloudinary.com/dkjqzjthp/image/upload/v1747777821/solar-energy-2_vn1b6d.jpg',
      'https://res.cloudinary.com/dkjqzjthp/image/upload/v1747777822/soalr-install-13_xgqmgz.jpg',
      'https://res.cloudinary.com/dkjqzjthp/image/upload/v1747777812/installation-14_ppswmc.jpg', 
      'https://res.cloudinary.com/dkjqzjthp/image/upload/v1747777815/so_ar-install-12_hzl4rb.jpg',
      'https://res.cloudinary.com/dkjqzjthp/image/upload/v1747777814/salar-installation-4_whwr2n.jpg'
    ]
  },
  {
    title: 'CCTV Installation',
    description: 'Professional security system installation and configuration',
    images: [
      'https://images.pexels.com/photos/96612/pexels-photo-96612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/7364948/pexels-photo-7364948.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/29280895/pexels-photo-29280895/free-photo-of-close-up-of-a-modern-security-camera-in-action.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/31036015/pexels-photo-31036015/free-photo-of-monochrome-surveillance-camera-on-urban-streetlight.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/207574/pexels-photo-207574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/5589597/pexels-photo-5589597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ]
  },
  {
    title: 'Electrical Wiring',
    description: 'Professional electrical wiring services for all building types',
    images: [
      'https://res.cloudinary.com/dkjqzjthp/image/upload/v1747777811/electrical-wiring-4_z7sxyg.jpg',
      'https://res.cloudinary.com/dkjqzjthp/image/upload/v1747777826/fuse-work-2_c9wzrj.jpg',
      'https://res.cloudinary.com/dkjqzjthp/image/upload/v1747777813/electtric-10_dvqywm.jpg',
      'https://res.cloudinary.com/dkjqzjthp/image/upload/v1747777812/solar-battery-fix-1_iqdobv.jpg',
      'https://res.cloudinary.com/dkjqzjthp/image/upload/v1747777811/poll-wiring_yl260q.jpg',
      'https://res.cloudinary.com/dkjqzjthp/image/upload/v1747777817/electrica-wiring-6_boh2hw.jpg'
    ]
  },
  {
    title: 'Air-conditioning',
    description: 'AC system installation and maintenance services',
    images: [
      'https://www.paradigmcooling.co.za/articles/wp-content/uploads/2024/05/AC-service-technician-doing-repair-jpg.webp',
      'https://aws-obg-image-lb-4.tcl.com/content/dam/brandsite/global/images-for-blog/ac-maintenance-for-lasting-system-pc.jpg?t=1731490541012&w=2560',
      'https://aws-obg-image-lb-4.tcl.com/content/dam/brandsite/global/images-for-blog/ac-maintenance-for-lasting-system-image.jpg?t=1731490541016&w=1200&webp=true&dpr=1&rendition=2400',
      'https://aws-obg-image-lb-1.tcl.com/content/dam/brandsite/product/ac/light-commercial/ceiling-floor/toolkits/plp-banner-pc.jpg?t=1719817044667&w=2560&webp=true&dpr=1&rendition=2400',
      'https://shop.haierindia.com/blog/wp-content/uploads/2024/07/alling-4-9-1024x576.jpg',
      'https://shop.haierindia.com/blog/wp-content/uploads/2024/07/alling-1-9-1024x576.jpg'
    ]
  },
  {
    title: 'Fire Alarm Systems',
    description: 'Fire safety system installation and maintenance',
    images: [
      'https://res.cloudinary.com/dkjqzjthp/image/upload/v1747777811/electrical-wiring-4_z7sxyg.jpg',
      'https://res.cloudinary.com/dkjqzjthp/image/upload/v1747777906/Alarm-fix_w4wiad.jpg',
      'https://images.pexels.com/photos/13060860/pexels-photo-13060860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://nwoss.com/wp-content/uploads/2021/05/Blog_FireAlarmSystems_EverythingYouNeedtoKnow-e1655918801379.png',
      'https://www.epssecurity.com/wp-content/uploads/2019/08/ONXYwDet_USA_new_jpg.jpg',
      'https://www.epssecurity.com/wp-content/uploads/2019/08/IMG_20181213_100130-e1565626544268.jpg'
    ]
  },
  {
    title: 'Generator Servicing',
    description: 'Professional generator maintenance and repair',
    images: [
      'https://res.cloudinary.com/dkjqzjthp/image/upload/v1747777810/generator-fix-1_wrfb10.jpg',
      'https://res.cloudinary.com/dkjqzjthp/image/upload/v1747777811/generator-work-4_own1fo.jpg',
      'https://img.etimg.com/thumb/msid-69098659,width-300,height-225,imgsize-1235455,resizemode-75/.jpg',
      'https://res.cloudinary.com/dkjqzjthp/image/upload/v1747777810/generator-fix-1_wrfb10.jpg',
      'https://res.cloudinary.com/dkjqzjthp/image/upload/v1747777810/generator-fix-1_wrfb10.jpg',
      'https://res.cloudinary.com/dkjqzjthp/image/upload/v1747777810/generator-fix-1_wrfb10.jpg'
    ]
  }
]);

const currentSlides = ref(services.value.map(() => 0));
const selectedService = ref(null);
const selectedImageIndex = ref(0);
const isMobile = ref(false);

const checkScreenSize = () => {
  isMobile.value = window.innerWidth < 768;
};

onMounted(() => {
  checkScreenSize();
  window.addEventListener('resize', checkScreenSize);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkScreenSize);
});

const slidesPerView = computed(() => {
  return isMobile.value ? 1 : 2;
});

const slidePercentage = computed(() => {
  return isMobile.value ? 100 : 50;
});

const maxSlides = computed(() => {
  return Math.ceil(services.value[0].images.length / slidesPerView.value) - 1;
});

const nextSlide = (serviceIndex) => {
  if (currentSlides.value[serviceIndex] < maxSlides.value) {
    currentSlides.value[serviceIndex]++;
  } else {
    currentSlides.value[serviceIndex] = 0;
  }
};

const prevSlide = (serviceIndex) => {
  if (currentSlides.value[serviceIndex] > 0) {
    currentSlides.value[serviceIndex]--;
  } else {
    currentSlides.value[serviceIndex] = maxSlides.value;
  }
};

const openModal = (serviceIndex, imageIndex) => {
  selectedService.value = serviceIndex;
  selectedImageIndex.value = imageIndex;
};

const closeModal = () => {
  selectedService.value = null;
};
</script>

<style scoped>
.services-view {
  padding: 2rem 0;
  background-color: rgb(231, 240, 240);
}

.section-title {
  text-align: center;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: #1e293b;
  position: relative;
  padding-bottom: 0.8rem;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background: #f59e0b;
  border-radius: 2px;
}

.service-section {
  margin: 1.5rem 0;
  padding: 1.5rem 0;
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.service-header {
  font-size: 1.4rem;
  color: #0f172a;
  margin-bottom: 1rem;
  padding-left: 1rem;
  position: relative;
}

.service-header::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 5px;
  height: 60%;
  background: #f59e0b;
  border-radius: 3px;
}

.service-carousel {
  position: relative;
  margin: 0 2px;
  overflow: hidden;
  border-radius: 0.5rem;
}

.carousel-track {
  display: flex;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  gap: 4px;
  padding: 4px;
}

.service-image-container {
  flex: 0 0 calc(100% - 8px);
  position: relative;
  border-radius: 0.3rem;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin: 0 2px;
}

.service-image {
  width: 100%;
  height: 250px;
  object-fit: contain;
  background: #f1f5f9;
  transition: transform 0.5s ease;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.service-image-container:hover .image-overlay {
  opacity: 1;
}

.view-text {
  color: white;
  font-size: 1rem;
  font-weight: 500;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  transform: translateY(15px);
  transition: transform 0.3s ease;
}

.service-image-container:hover .view-text {
  transform: translateY(0);
}

.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid #64748b;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
}

.nav-btn:hover {
  background: white;
  transform: translateY(-50%) scale(1.1);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
}

.prev {
  left: 5px;
}

.next {
  right: 5px;
}

.service-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
}

.modal-content {
  background: white;
  max-width: 95%;
  width: 100%;
  border-radius: 0.5rem;
  overflow: hidden;
  position: relative;
  margin: 0 10px;
}

.modal-main-image {
  width: 100%;
  height: auto;
  max-height: 60vh;
  object-fit: contain;
  background: #f1f5f9;
  border-bottom: 2px solid #f59e0b;
}

.modal-thumbnails {
  display: flex;
  gap: 0.5rem;
  padding: 0.5rem;
  overflow-x: auto;
  background: #f8fafc;
}

.modal-thumbnails img {
  width: 60px;
  height: 45px;
  object-fit: cover;
  border-radius: 0.3rem;
  cursor: pointer;
  opacity: 0.7;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.modal-thumbnails img:hover {
  opacity: 1;
  transform: scale(1.05);
}

.modal-thumbnails img.active {
  opacity: 1;
  border-color: #f59e0b;
  transform: scale(1.08);
}

.modal-details {
  padding: 1rem;
  background: white;
}

.modal-details h3 {
  color: #1e293b;
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}

.modal-details p {
  color: #64748b;
  line-height: 1.5;
  font-size: 0.9rem;
}

.close-btn {
  position: absolute;
  top: 0.3rem;
  right: 0.3rem;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.close-btn:hover {
  background: rgba(0, 0, 0, 0.9);
  transform: scale(1.1);
}

/* Desktop styles */
@media (min-width: 768px) {
  .services-view {
    padding: 3rem 2rem;
  }

  .section-title {
    font-size: 2.2rem;
    margin-bottom: 2.5rem;
  }

  .section-title::after {
    width: 100px;
    height: 4px;
  }

  .service-section {
    margin: 2rem auto;
    padding: 2rem 0;
    max-width: 1200px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .service-header {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    padding-left: 2rem;
  }

  .service-carousel {
    margin: 0 1rem;
  }

  .carousel-track {
    gap: 1rem;
    padding: 1rem;
  }

  .service-image-container {
    flex: 0 0 calc(50% - 1rem);
    margin: 0;
    border-radius: 0.5rem;
  }

  .service-image {
    height: 350px;
    object-fit: cover;
  }

  .view-text {
    font-size: 1.2rem;
  }

  .nav-btn {
    width: 50px;
    height: 50px;
    font-size: 1.3rem;
  }

  .prev {
    left: 1rem;
  }

  .next {
    right: 1rem;
  }

  .modal-content {
    max-width: 900px;
    border-radius: 0.8rem;
  }

  .modal-main-image {
    max-height: 70vh;
  }

  .modal-thumbnails {
    gap: 1rem;
    padding: 1rem;
  }

  .modal-thumbnails img {
    width: 80px;
    height: 60px;
  }

  .modal-details {
    padding: 1.5rem;
  }

  .modal-details h3 {
    font-size: 1.6rem;
    margin-bottom: 1rem;
  }

  .modal-details p {
    font-size: 1rem;
  }

  .close-btn {
    width: 40px;
    height: 40px;
    font-size: 1.5rem;
    top: 0.5rem;
    right: 0.5rem;
  }
}
</style>