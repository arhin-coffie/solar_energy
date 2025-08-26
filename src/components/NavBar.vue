<template>
  <nav class="navbar">
    <div class="container">
      <div class="container2">
        <img
          src="https://res.cloudinary.com/dkjqzjthp/image/upload/e_improve,e_sharpen/v1756204576/samlogo_axipym.jpg"
          alt="NDC Flag"
          class="ndc-flag"
        />
        <router-link to="/" class="logo">
          <span> QUALITECH </span>
        </router-link>
      </div>

      <button class="hamburger" @click="isOpen = !isOpen" aria-label="Toggle navigation">
        <i :class="isOpen ? 'fas fa-times' : 'fas fa-bars'"></i>
      </button>

      <div class="nav-links" :class="{ show: isOpen }">
        <a href="#main-content" class="skip-link">Skip to main content</a>
        <router-link to="/" @click="closeMenu" exact-active-class="active-link">Home</router-link>
        <router-link to="/our-services" @click="closeMenu" active-class="active-link">Our Services</router-link>
        <router-link to="/our-Market" @click="closeMenu" active-class="active-link">Our Market</router-link>
        <router-link to="/why-solar" @click="closeMenu" active-class="active-link">Why Solar</router-link>
        <router-link to="/how-it-works" @click="closeMenu" active-class="active-link">Process</router-link>
        <router-link to="/calculator" @click="closeMenu" active-class="active-link">Calculator</router-link>
        <router-link to="/get-started" class="cta-nav" active-class="cta-active" @click="closeMenu">Our Galary</router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

const isOpen = ref(false);

function closeMenu() {
  isOpen.value = false;
}
</script>


  <style scoped>
.navbar {
  background: orange;
  box-shadow: 0 2px 15px rgba(0,0,0,0.1);
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--dark);
  text-decoration: none;
}
.logo span {
  color: var(--secondary);
}
.logo i {
  color: var(--primary);
  margin-right: 0.5rem;
}

.hamburger {
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--dark);
}

.nav-links {
  display: flex;
  gap: 2rem;
  align-items: center;
  margin-top: 6px;
}

.container2 {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
}

.ndc-flag {
  width: 4rem;
  height: 4rem;
  object-fit: contain;
  border-radius: 9999px;
  border: 2px solid #dc2626;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06);
}

/* New active link styles */
.nav-links a.active-link {
  color: var(--secondary);
/* Or your preferred active color */
  border-bottom: 2px solid rgb(31, 145, 35);
  padding-bottom: 5px; /* Add some padding to prevent the border from touching the text */
}

/* Style for the CTA button when it's active */
.cta-nav.cta-active {
  background-color: darkred; /* Or a darker shade of your primary color */
  color: white !important;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}


/* Responsive for mobile */
@media (max-width: 768px) {
  .hamburger {
    display: block;
  }

  .nav-links {
    flex-direction: column;
    width: 100%;
    display: none;
    background: aliceblue;
    padding: 1rem 0;
    border-radius: 6px;
  }

  .nav-links.show {
    display: flex;
  }

  .nav-links a,
  .nav-links .cta-nav {
    width: 100%;
    text-align: center;
  }
}

.nav-links a {
  color: var(--dark);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}
.nav-links a:hover {
  color: var(--secondary);
}
.cta-nav {
  background: var(--primary);
  padding: 0.5rem;
  max-width: 200px;
  border-radius: 20px;
  color: var(--dark) !important;
}
.skip-link {
  position: absolute;
  left: -999px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
  color: red;
}
.skip-link:focus {
  position: static;
  width: auto;
  height: auto;
}
</style>