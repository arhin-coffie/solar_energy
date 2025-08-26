<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-column">
        <h4>Qualitech Engineering Solutions</h4>
        <p>Proudly powering homes since 2015</p>
        <div class="social-links">
          <a href="#"><i class="fab fa-facebook"></i></a>
          <a href="#"><i class="fab fa-whatsapp"></i></a>
          <!-- Corrected to use a valid HTML tag -->
          <h4 class="contact-info">Contact (0544033693 / 0592420152)</h4>
        </div>
        <!-- Corrected to use a valid HTML tag -->
        <h4 class="contact-info">Call Developer (0248360435)</h4>
      </div>

      <!-- NEW: Map Column -->
      <div class=" map-column">
        <h4>Find Us</h4>
        <div class="map-container">
          <!-- PASTE YOUR GOOGLE MAPS IFRAME CODE HERE -->
          <!-- Example placeholder below. Replace with your actual code. -->
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27260.961139400748!2d-1.7909922588719114!3d4.924887652959897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfe7799492726d23%3A0x7d5c91fd52983768!2sPipeano%20Bus%20Stop!5e0!3m2!1sen!2sgh!4v1756214131495!5m2!1sen!2sgh" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>

    <div class="copyright">
      <p>&copy; QUALITECH. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue';

const email = ref('');

const subscribeNewsletter = () => {
  // Use a custom message instead of alert()
  console.log('Thanks for subscribing!');
  email.value = '';
};
</script>

<style scoped>
.footer {
  background: var(--dark);
  color: white;
  padding: 4rem 0 2rem; /* Changed padding to remove horizontal space */
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
.footer-column  {
display: flex;
flex-direction: column;
text-align: start;
margin-left: 20px;
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
/* New style for the corrected contact info */
.contact-info {
  font-size: 1rem;
  color: white;
  margin: 0;
  font-weight: normal;
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

/* NEW: Map styles */
.map-container {
  position: relative;
  width: 100%;
  padding-bottom: 75%; /* This creates a 4:3 aspect ratio. Adjust as needed. */
  height: 0;
  overflow: hidden;
}

.map-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.map-column h4{
margin-left: 20px;
color: orange;
padding-bottom: 10px;
}

</style>
