
<template>
  <nav class="navbar">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </nav>

  <router-view />

</template>


<script setup>
import { ref } from 'vue'


defineProps({
  // msg: String,
})

// const count = ref(0)
</script>


<style scoped>
.navbar {
  width: 95vw;
  margin: 1rem;
  background-color: #1a1a1a;
  height: 3rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 5px;
}
</style>
