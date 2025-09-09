<template>
    <div>
        <h1>Mi Aplicación</h1>
        <button @click="showModal = true">Registrarme</button>

        <RegisterModal :visible="showModal" @close="showModal = false" />


        <button @click="dirije">Inicio de seccion-login</button>

        <button @click="dirijevue">pag</button>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import RegisterModal from '../components/UserRegistration.vue'
import { useRouter } from 'vue-router'

let router = useRouter();
const showModal = ref(false)
function dirije() {
    router.push('/login')
}
function dirijevue(){
router.push('/vista')
}
</script>

<style>
/* Global styles for the app */
body {
    font-family: Arial, sans-serif;
    text-align: center;
    margin-top: 50px;
}
</style>