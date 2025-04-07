<template>
    <section class="how-it-works">
      <h2>How It Works</h2>
      <div class="process-steps">
        <div class="step">
          <img src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
               alt="Consultation">
          <div class="step-content">
            <h3>1. Free Consultation</h3>
            <p>Our experts will assess your energy needs</p>
          </div>
        </div>
        <!-- Add more steps similarly -->
      </div>
    </section>
  </template>
  
  <style scoped>
  .how-it-works {
    padding: 4rem 2rem;
    background-color: white;
  }
  
  .process-steps {
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .step {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 2rem;
    margin: 4rem 0;
  }
  
  .step img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  </style>