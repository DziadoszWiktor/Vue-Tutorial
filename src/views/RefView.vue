<template>
    <h1>Ref and Reactive</h1>

    <br>

    <div class="post">
        <div class="user-info">
        <h3>{{ username }}</h3>
        </div>
        <img :src="post.imagePath" alt="Post Image">
        <div class="post-info">
        <p>{{ post.description }}</p>
        <p>{{ post.date }}</p>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue';

const post = reactive({
  imagePath: '#',
  description: 'This is a post description',
  date: 'today'
});

const username = ref('Username');

</script>

<style scoped>
.post {
  width: 300px;
  height: 300px;
  background-color: #fafafa;
  border: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  box-sizing: border-box;
}

.user-info {
  display: flex;
  align-items: center;
}

.user-info h3 {
  font-size: 18px;
  font-weight: bold;
  margin-right: 0.5rem;
}

.post img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin-top: 0.5rem;
}

.post-info {
  margin-top: 1rem;
  text-align: center;
}

.post-info p {
  margin-bottom: 0.5rem;
  font-size: 14px;
}

</style>
