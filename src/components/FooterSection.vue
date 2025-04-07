<template>
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-column">
          <h4>Solar Solutions</h4>
          <p>Proudly powering homes since 2015</p>
          <div class="social-links">
            <a href="#"><i class="fab fa-facebook"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
  
        <div class="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><router-link to="/why-solar">Why Solar</router-link></li>
            <li><router-link to="/how-it-works">Process</router-link></li>
            <li><router-link to="/calculator">Calculator</router-link></li>
          </ul>
        </div>
  
        <div class="footer-column">
          <h4>Newsletter</h4>
          <form @submit.prevent="subscribeNewsletter">
            <input v-model="email" type="email" placeholder="Enter your email">
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
  
      <div class="copyright">
        <p>&copy; 2024 Solar Solutions. All rights reserved.</p>
      </div>
    </footer>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const email = ref('');
  
  const subscribeNewsletter = () => {
    alert('Thanks for subscribing!');
    email.value = '';
  };
  </script>
  
  <style scoped>
  .footer {
    background: var(--dark);
    color: white;
    padding: 4rem 2rem 2rem;
  }
  
  .footer-container {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 3rem;
  }
  
  .footer-column h4 {
    margin-bottom: 1.5rem;
    color: var(--primary);
  }
  
  .social-links {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
  }
  
  .social-links a {
    color: white;
    font-size: 1.5rem;
  }
  
  .newsletter input {
    width: 100%;
    padding: 0.8rem;
    margin-bottom: 1rem;
    border-radius: 5px;
    border: none;
  }
  
  .copyright {
    text-align: center;
    margin-top: 3rem;
    padding-top: 2rem;
    border-top: 1px solid rgba(255,255,255,0.1);
  }
  </style>