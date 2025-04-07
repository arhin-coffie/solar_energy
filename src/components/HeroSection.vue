<template>
  <section class="hero">
    <!-- Image Carousel -->
    <div class="hero-carousel">
      <div 
        v-for="(slide, index) in slides" 
        :key="index" 
        class="carousel-item"
        :style="{ backgroundImage: `url(${slide.image})`, transform: `translateX(${currentSlide * -100}%)` }"
      ></div>
    </div>

    <!-- Dynamic Hero Content -->
    <div class="hero-content">
      <h1>{{ slides[currentSlide].title }}</h1>
      <p class="subtitle">{{ slides[currentSlide].subtitle }}</p>
      <div class="cta-container">
        <router-link :to="slides[currentSlide].ctaLink" class="cta-button">
          {{ slides[currentSlide].ctaText }}
        </router-link>
        <a href="#benefits" class="video-link">
          <i class="fas fa-play-circle"></i>
          How It Works
        </a>
      </div>
    </div>

    <!-- Stats Grid -->
    <div class="stats-grid">
      <div class="stat-item">
        <h3>5+ Years</h3>
        <p>System Lifespan</p>
      </div>
      <div class="stat-item">
        <h3>1M+ Homes</h3>
        <p>Powered Nationwide</p>
      </div>
      <div class="stat-item">
        <h3>GH0 Down</h3>
        <p>Financing Options</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const slides = ref([
  {
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276',
    title: 'Power Your Future with Solar Energy',
    subtitle: 'Save up to 70% on energy bills while protecting the planet',
    ctaText: 'Start Saving Now',
    // ctaLink: '/get-started',
  },
  {
    image: 'https://images.pexels.com/photos/96612/pexels-photo-96612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'CCTV Installation',
    subtitle: 'Professional security system installation and configuration',
    ctaText: 'Get a Free Quote',
    // ctaLink: '/quote',
  },
  {
    image: 'https://images.pexels.com/photos/17018102/pexels-photo-17018102/free-photo-of-electricians-working-with-power-lines.jpeg',
    title: 'Electrical Wiring',
    subtitle: 'Professional electrical wiring services for all building types',
    ctaText: 'Learn More',
    // ctaLink: '/learn',
  },
  {
    image: 'https://aws-obg-image-lb-4.tcl.com/content/dam/brandsite/global/images-for-blog/ac-maintenance-for-lasting-system-pc.jpg?t=1731490541012&w=2560'// Technician servicing
    ,
    title: 'Air-conditioning',
    subtitle: 'AC system installation and maintenance services',
    ctaText: 'Learn More',
    // ctaLink: '/learn',
  },
  {
    image: 'https://5.imimg.com/data5/SELLER/Default/2024/7/437309219/CN/DM/PJ/81270448/fire-alarm-system.png',
    title: 'Fire Alarm Systems',
    subtitle: 'Fire safety system installation and maintenance',
    ctaText: 'Learn More',
    // ctaLink: '/learn',
  },
  {
    image: 'https://s.alicdn.com/@sc04/kf/H2b373ec8742d43d8a36df84d07eb4a95c.jpg?avif=close',
    title: 'Generator Servicing',
    subtitle: 'Professional generator maintenance and repair',
    ctaText: 'Learn More',
    // ctaLink: '/learn',
  }
]);

const currentSlide = ref(0);
let interval;

const startCarousel = () => {
  interval = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % slides.value.length;
  }, 5000);
};

onMounted(() => startCarousel());
onUnmounted(() => clearInterval(interval));
</script>

<style scoped>
.hero {
  position: relative;
  color: white;
  padding: 8rem 2rem 4rem;
  text-align: center;
  overflow: hidden;
}

.hero-carousel {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  z-index: -1;
}

.carousel-item {
  flex: 0 0 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  transition: transform 0.5s ease-in-out;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
  z-index: 0;
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 0 auto;
}

h1 {
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.subtitle {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.cta-container {
  display: flex;
  gap: 2rem;
  justify-content: center;
  margin-top: 3rem;
}

.cta-button {
  background: var(--primary);
  color: var(--dark);
  padding: 1rem 2.5rem;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  transition: transform 0.3s ease;
}

.cta-button:hover {
  transform: translateY(-3px);
}

.video-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
  text-decoration: none;
}

.stats-grid {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 4rem auto 0;
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 15px;
}

.stat-item {
  padding: 1rem;
}

.stat-item h3 {
  color: var(--primary);
  font-size: 2rem;
}

@media (max-width: 768px) {
  h1 {
    font-size: 2.5rem;
  }

  .stats-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}
</style>