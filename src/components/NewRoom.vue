<template>
  <div class="news-container">
    <div v-if="isLoading">Loading articles...</div>
    <div v-else-if="errorMessage" class="error">{{ errorMessage }}</div>
    <div v-else>
      <div v-for="article in articles" :key="article.url" class="article-card">
        <img v-if="article.image" :src="article.image" :alt="article.title" class="article-image" />
        <div class="article-content">
          <h2 class="article-title">{{ article.title }}</h2>
          <p class="article-description">{{ article.description }}</p>
          <div class="article-meta">
            <span class="article-source">{{ article.source.name }}</span>
            <span class="article-date">{{ formatDate(article.publishedAt) }}</span>
          </div>
          <a :href="article.url" target="_blank" rel="noopener" class="read-more">Read more</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const apiKey = '26aed232126ed3a9dc8faadfac35204e ';
const url = `https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=us&max=10&apikey=${apiKey}`;

const articles = ref([]);
const isLoading = ref(true);
const errorMessage = ref(null);

const formatDate = (isoString) => {
  return new Date(isoString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

onMounted(async () => {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Network response was not ok');
    
    const data = await response.json();
    articles.value = data.articles;
  } catch (error) {
    errorMessage.value = `Error fetching articles: ${error.message}`;
  } finally {
    isLoading.value = false;
  }
});
</script>

<style scoped>
.news-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.article-card {
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.article-image {
  width: 200px;
  height: 150px;
  object-fit: cover;
  border-radius: 4px;
}

.article-content {
  flex: 1;
}

.article-title {
  margin: 0 0 10px 0;
  font-size: 1.25rem;
}

.article-description {
  margin: 0 0 10px 0;
  color: #666;
}

.article-meta {
  display: flex;
  gap: 15px;
  font-size: 0.9rem;
  color: #888;
  margin-bottom: 10px;
}

.read-more {
  color: #2196F3;
  text-decoration: none;
  font-weight: 500;
}

.read-more:hover {
  text-decoration: underline;
}

.error {
  color: #ff4444;
  padding: 20px;
  text-align: center;
}
</style>