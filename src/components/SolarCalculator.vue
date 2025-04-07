<template>
  <section class="calculator">
    <div class="calculator-container">
      <h2>Solar Savings Calculator</h2>
      
      <div class="input-group">
        <label for="monthlyBill">Monthly Energy Bill ($)</label>
        <p id="billHelp" class="help-text">Enter your average monthly electricity bill</p>

        <input 
          id="monthlyBill"
          v-model.number="monthlyBill" 
          type="number" 
          min="0"
          aria-describedby="billHelp"
        >
      </div>

      <div class="chart-container">
        <canvas ref="chart"></canvas>
      </div>

      <div class="results">
        <div class="result-item">
          <span>Annual Savings</span>
          <h3>${{ annualSavings }}</h3>
        </div>
        <div class="result-item">
          <span>CO2 Reduced</span>
          <h3>{{ co2Reduced }} tons</h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, watch, onMounted, computed } from 'vue';
import Chart from 'chart.js/auto';

const monthlyBill = ref(150);
const chart = ref(null);
let chartInstance = null;

const annualSavings = computed(() => (monthlyBill.value * 12 * 0.7).toFixed(0));
const co2Reduced = computed(() => (monthlyBill.value * 0.12).toFixed(1));

onMounted(() => {
  createChart();
});

watch(monthlyBill, () => {
  updateChart();
});

const createChart = () => {
  const ctx = chart.value.getContext('2d');
  chartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels: Array.from({ length: 10 }, (_, i) => i + 1),
      datasets: [{
        label: 'Projected Savings',
        data: [],
        borderColor: '#00796B',
        tension: 0.4
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false }
      }
    }
  });
};

const updateChart = () => {
  const years = 10;
  const data = Array.from({ length: years }, (_, i) => 
    (monthlyBill.value * 12 * 0.7 * (i + 1)).toFixed(0)
  );
  
  chartInstance.data.datasets[0].data = data;
  chartInstance.update();
};
</script>

<style scoped>
.help-text {
  font-size: 0.9rem;
  color: #666;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
}
.calculator {
  padding: 4rem 2rem;
  background: var(--light);
}

.calculator-container {
  max-width: 800px;
  margin: 0 auto;
}

.input-group {
  margin: 2rem 0;
}

input {
  width: 100%;
  padding: 1rem;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 1.1rem;
}

.chart-container {
  margin: 3rem 0;
  height: 400px;
}

.results {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.result-item {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}
</style>