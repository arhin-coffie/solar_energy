<template>
    <section class="benefits">
      <div class="container">
        <h2 class="section-title">Why Choose Solar?</h2>
        <p class="section-subtitle">Discover the benefits of clean energy</p>
        
        <div class="benefits-grid">
          <div class="benefit-card">
            <div class="card-icon">
              <i class="fas fa-leaf"></i>
            </div>
            <h3>Environmental Impact</h3>
            <p>Reduce your carbon footprint by up to 3 tons annually</p>
          </div>
          
          <!-- Repeat for other cards -->
        </div>
        
        <div class="comparison-chart">
          <div class="chart-bar" style="width: 70%">
            <span>Solar Energy Savings</span>
            <span>70%</span>
          </div>
          <div class="chart-bar" style="width: 30%">
            <span>Traditional Energy</span>
            <span>30%</span>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <style scoped>
  .benefits {
    padding: 5rem 2rem;
    background: white;
  }
  
  .section-title {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  
  .section-subtitle {
    text-align: center;
    color: #666;
    margin-bottom: 3rem;
  }
  
  .benefits-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-bottom: 4rem;
  }
  
  .benefit-card {
    background: var(--light);
    padding: 2rem;
    border-radius: 15px;
    text-align: center;
    transition: transform 0.3s ease;
  }
  
  .benefit-card:hover {
    transform: translateY(-10px);
  }
  
  .card-icon {
    width: 80px;
    height: 80px;
    background: var(--primary);
    border-radius: 50%;
    display: grid;
    place-items: center;
    margin: 0 auto 1.5rem;
  }
  
  .card-icon i {
    font-size: 2rem;
    color: var(--dark);
  }
  
  .comparison-chart {
    max-width: 800px;
    margin: 2rem auto;
  }
  
  .chart-bar {
    background: var(--secondary);
    margin: 1rem 0;
    padding: 1rem;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    color: white;
    animation: grow 1s ease-out;
  }
  </style>