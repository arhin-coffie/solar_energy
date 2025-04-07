<!-- <template>
    <section class="contact">
      <div class="contact-container">
        <div class="form-section">
          <h2>Start Your Solar Journey</h2>
          
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <label for="fullName">Full Name</label>
              <input 
                id="fullName"
                v-model="form.name" 
                type="text" 
                required
                aria-required="true"
              >
              <span v-if="errors.name" class="error" id="nameError">{{ errors.name }}</span>
            </div>
  
            <div class="form-group">
              <label for="emailAddress">Email</label>
              <input 
                id="emailAddress"
                v-model="form.email" 
                type="email" 
                required
                aria-required="true"
                aria-describedby="emailError"
              >
              <span v-if="errors.email" class="error" id="emailError">{{ errors.email }}</span>
            </div>
  
            <div class="form-group">
              <label for="phoneNumber">Phone</label>
              <input 
                id="phoneNumber"
                v-model="form.phone" 
                type="tel" 
                pattern="[0-9]{10}" 
                required
                aria-required="true"
                aria-describedby="phoneError"
              >
              <span v-if="errors.phone" class="error" id="phoneError">{{ errors.phone }}</span>
            </div>
  
            <button type="submit" :disabled="loading">
              {{ loading ? 'Submitting...' : 'Get Free Quote' }}
            </button>
          </form>
        </div>
  
        <div class="info-section">
          <div class="info-card">
            <i class="fas fa-phone"></i>
            <h3>Call Us</h3>
            <p>1-800-SOLAR-NOW</p>
          </div>
          Add more info cards
        </div>
      </div>
    </section>
  </template>  -->

  <template>
    <section class="contact">
      <div class="contact-container">
        <div class="form-section">
          <h2>Start Your Solar Journey</h2>
          
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <label for="fullName">Full Name</label>
              <input 
                id="fullName"
                v-model="form.name" 
                type="text" 
                required
                aria-required="true"
              >
              <span v-if="errors.name" class="error" id="nameError">{{ errors.name }}</span>
            </div>
  
            <div class="form-group">
              <label for="emailAddress">Email</label>
              <input 
                id="emailAddress"
                v-model="form.email" 
                type="email" 
                required
                aria-required="true"
                aria-describedby="emailError"
              >
              <span v-if="errors.email" class="error" id="emailError">{{ errors.email }}</span>
            </div>
  
            <div class="form-group">
              <label for="phoneNumber">Phone</label>
              <input 
                id="phoneNumber"
                v-model="form.phone" 
                type="tel" 
                pattern="[0-9]{10}" 
                required
                aria-required="true"
                aria-describedby="phoneError"
              >
              <span v-if="errors.phone" class="error" id="phoneError">{{ errors.phone }}</span>
            </div>
  
            <button type="submit" :disabled="loading">
              {{ loading ? 'Submitting...' : 'Get Free Quote' }}
            </button>
          </form>
        </div>
        <!-- Rest of the component -->
      </div>
    </section>
  </template>
  
  <script setup>
  import { reactive, ref } from 'vue';
  
  const form = reactive({
    name: '',
    email: '',
    phone: ''
  });
  
  const errors = reactive({
    name: '',
    email: '',
    phone: ''
  });
  
  const loading = ref(false);
  
  const validateForm = () => {
    let valid = true;
    
    if(!form.name.trim()) {
      errors.name = 'Name is required';
      valid = false;
    }
    
    // Add more validations
  };
  
  const submitForm = async () => {
    if(validateForm()) {
      loading.value = true;
      try {
        // Submit to API
        alert('Thank you! We will contact you shortly.');
        form.name = '';
        form.email = '';
        form.phone = '';
      } finally {
        loading.value = false;
      }
    }
  };
  </script>
  
  <style scoped>
  .contact {
    padding: 4rem 2rem;
  }
  
  .contact-container {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }
  
  .form-group {
    margin-bottom: 1.5rem;
  }
  
  label {
    display: block;
    margin-bottom: 0.5rem;
  }
  
  input {
    width: 100%;
    padding: 1rem;
    border: 2px solid #ddd;
    border-radius: 8px;
    transition: border-color 0.3s ease;
  }
  
  input:focus {
    border-color: var(--primary);
    outline: none;
  }
  
  button {
    background: var(--primary);
    color: var(--dark);
    padding: 1rem 2rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: transform 0.3s ease;
  }
  
  button:hover {
    transform: translateY(-2px);
  }
  
  .error {
    color: #e74c3c;
    font-size: 0.9rem;
  }
  </style>