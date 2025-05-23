<template>
    <section class="testimonials">
          <h2 class="section-title">What Our Customers Say</h2>

      <div class="testimonial-grid">
        <div v-for="(testimonial, index) in testimonials" :key="index" class="testimonial-card">
          <img :src="testimonial.photo" :alt="testimonial.name" style="height: 300px;">
          <div class="content">
            <div class="stars">
              <i v-for="n in 5" :key="n" class="fas fa-star"></i>
            </div>
            <p>"{{ testimonial.text }}"</p>
            <h4>{{ testimonial.name }}</h4>
            <span>{{ testimonial.location }}</span>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  const testimonials = ref([
    {
      name: "Anna Coffie",
      location: "Takoradi",
      text: "Our energy bills dropped by 80% in the first month. The installation was quick and professional!",
      photo: "https://res.cloudinary.com/dkjqzjthp/image/upload/v1748002265/customer.jpg_ryi0xr.png"
    },
     {
      name: "Isaac Mensah",
      location: "Accra",
      text: "Switching to solar was the best decision we cut our power expenses by more than half in just weeks. The service was efficient and hassle-free!",
      photo: "https://res.cloudinary.com/dkjqzjthp/image/upload/v1748001338/costumer2_oegpwt.jpg"
    },
    // Add more testimonials
  ]);
  </script>
  
  <style scoped>
  .testimonials {
    padding: 4rem 2rem;
  background-color: rgb(231, 240, 240);
  }
  
  .testimonial-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .testimonial-card {
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 8px 30px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;
    background-color: aliceblue;
  }
  
  .testimonial-card:hover {
    transform: translateY(-5px);
  }
  
  .testimonial-card img {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }
  
  .content {
    padding: 2rem;
  }
  
  .stars {
    color: var(--primary);
    margin-bottom: 1rem;
  }
  
  .stars i {
    margin-right: 0.2rem;
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
  </style>