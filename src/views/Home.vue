<template>
  <div>
    <h1>Welcome to Joseph Joestar's Blog</h1>
    <p>Explore the stories and adventures of Joseph Joestar.</p>
    <button @click="$router.push('/biography')">Biography</button>
    <button @click="$router.push('/contact')">Contact</button>
    <button @click="$router.push('/genealogy')">Genealogy</button>
    <button @click="$router.push('/post/1')">Posts</button>
  </div>
</template>

<script>
export default {
  name: 'Home'
};
</script>

<style scoped>
/* Add styles here */
</style> 