<template>
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-column">
          <h4>Solar Solutions</h4>
          <p>Proudly powering homes since 2015</p>
          <div class="social-links">
            <a href="#"><i class="fab fa-facebook"></i></a>
            <a href="#"><i class="fab fa-whatsapp"></i></a>
            <h>Developer (0248360435)</h>
          </div>
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
  .footer-column2 {
    display: flex;
    flex-direction: row;
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