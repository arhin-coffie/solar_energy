<template>
  <nav class="navbar">
    <div class="container">
      <router-link to="/" class="logo">
        <i class="fas fa-solar-panel"></i>
        SAM'S <span>POWER CONTROL ENGINEERING WORKS</span>
      </router-link>

      <!-- Hamburger Button -->
      <button class="hamburger" @click="isOpen = !isOpen" aria-label="Toggle navigation">
        <i :class="isOpen ? 'fas fa-times' : 'fas fa-bars'"></i>
      </button>

      <!-- Navigation Links -->
      <div class="nav-links" :class="{ show: isOpen }">
        <a href="#main-content" class="skip-link">Skip to main content</a>
        <router-link to="/our-services" @click="closeMenu">Our Services</router-link>
         <router-link to="/our-Market" @click="closeMenu">Our Market</router-link>
        <router-link to="/why-solar" @click="closeMenu">Why Solar</router-link>
        <router-link to="/how-it-works" @click="closeMenu">Process</router-link>
        <router-link to="/calculator" @click="closeMenu">Calculator</router-link>
        <router-link to="/calculator" @click="closeMenu">Team</router-link>
        <router-link to="/get-started" class="cta-nav" @click="closeMenu">Get Started</router-link>
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
  background: white;
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
    background: white;
    padding: 1rem 0;
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
  padding: 0.5rem 1.5rem;
  border-radius: 25px;
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