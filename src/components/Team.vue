<template>
  <div class="gallery">
    <div 
      v-for="(image, index) in images" 
      :key="index"
      class="image-container"
      @click="openLightbox(index)"
    >
      <img 
        :src="image" 
        :alt="'Image ' + (index + 1)"
        loading="lazy"
        class="gallery-image"
      />
    </div>

    <div v-if="lightboxOpen" class="lightbox" @click="closeLightbox">
      <button class="close-btn" @click.stop="closeLightbox">&times;</button>
      <img 
        :src="images[currentIndex]" 
        :alt="'Image ' + (currentIndex + 1)"
        class="lightbox-image"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const images = ref([
      'https://res.cloudinary.com/dkjqzjthp/image/upload/v1747777887/alarm-install-3_mrvyp1.jpg',
      'https://res.cloudinary.com/dkjqzjthp/image/upload/v1747777821/solar-energy-2_vn1b6d.jpg',
      'https://res.cloudinary.com/dkjqzjthp/image/upload/v1747777822/soalr-install-13_xgqmgz.jpg',
      'https://res.cloudinary.com/dkjqzjthp/image/upload/v1747777812/installation-14_ppswmc.jpg', 
      'https://res.cloudinary.com/dkjqzjthp/image/upload/v1747777815/so_ar-install-12_hzl4rb.jpg',
      'https://res.cloudinary.com/dkjqzjthp/image/upload/v1747777814/salar-installation-4_whwr2n.jpg',


      'https://res.cloudinary.com/dkjqzjthp/image/upload/v1747777906/alarm-fix-6_tc9mst.jpg',
      'https://res.cloudinary.com/dkjqzjthp/image/upload/v1747777887/alarm-install-1_eulwgz.jpg', 
      'https://res.cloudinary.com/dkjqzjthp/image/upload/v1747777887/alarm-installation-2_cbc1q6.jpg',
      'https://res.cloudinary.com/dkjqzjthp/image/upload/v1747777826/fuse-work-2_c9wzrj.jpg',


      
       'https://res.cloudinary.com/dkjqzjthp/image/upload/v1747777825/fuse-work-1_yugtdp.jpg',
      'https://res.cloudinary.com/dkjqzjthp/image/upload/v1747777824/electrical_wiring_arx2uc.jpg',
      'https://res.cloudinary.com/dkjqzjthp/image/upload/v1747777817/electrica-wiring-6_boh2hw.jpg',
      'https://res.cloudinary.com/dkjqzjthp/image/upload/v1747777816/electrical-wiring-5_pczeo3.jpg', 
      'https://res.cloudinary.com/dkjqzjthp/image/upload/v1747777815/electrical-wiring-3_recez4.jpg',
      'https://res.cloudinary.com/dkjqzjthp/image/upload/v1747777815/electrical-wiring-7_klov2v.jpg',

        'https://res.cloudinary.com/dkjqzjthp/image/upload/v1747777813/installion-15_rasupp.jpg',
      'https://res.cloudinary.com/dkjqzjthp/image/upload/v1747777813/electtric-10_dvqywm.jpg',
      'https://res.cloudinary.com/dkjqzjthp/image/upload/v1747777812/solar-battery-fix-1_iqdobv.jpg',
      'https://res.cloudinary.com/dkjqzjthp/image/upload/v1747777812/installation-14_ppswmc.jpg', 
      'https://res.cloudinary.com/dkjqzjthp/image/upload/v1747777811/electrical-wiring-4_z7sxyg.jpg',
      'https://res.cloudinary.com/dkjqzjthp/image/upload/v1747777810/generator-fix-1_wrfb10.jpg',
        'https://res.cloudinary.com/dkjqzjthp/image/upload/v1747777811/generator-work-4_own1fo.jpg',
     'https://res.cloudinary.com/dkjqzjthp/image/upload/v1747777811/poll-wiring_yl260q.jpg',



]);

const lightboxOpen = ref(false);
const currentIndex = ref(0);

const openLightbox = (index) => {
  currentIndex.value = index;
  lightboxOpen.value = true;
  document.body.style.overflow = 'hidden';
};

const closeLightbox = () => {
  lightboxOpen.value = false;
  document.body.style.overflow = '';
};
</script>

<style scoped>
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  padding: 1rem;
}

.image-container {
  aspect-ratio: 4/3;
  overflow: hidden;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.image-container:hover {
  transform: scale(1.02);
}

.gallery-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.gallery-image:hover {
  transform: scale(1.05);
}

.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.lightbox-image {
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
}

.close-btn {
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 2rem;
  color: white;
  background: none;
  border: none;
  cursor: pointer;
}

.close-btn:hover {
  color: #ccc;
}

@media (max-width: 600px) {
  .gallery {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
}
</style>