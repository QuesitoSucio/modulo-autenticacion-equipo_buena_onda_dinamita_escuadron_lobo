<template>
  <div>
    <h1>Mi Aplicación</h1>
    <button @click="showModal = true">Registrarme</button>
    
    <RegisterModal :visible="showModal" @close="showModal = false" />
    
  </div>
</template>

<script setup>
import { ref } from 'vue'
import RegisterModal from './components/UserRegistration.vue' // Adjust the path as needed

const showModal = ref(false)
</script>

<style>
/* Global styles for the app */
body {
  font-family: Arial, sans-serif;
  text-align: center;
  margin-top: 50px;
}
</style>