<template>
    <div class="dashboard">
        <h1>Bienvenido al Dashboard</h1>
        <button @click="cerrarSesion">Cerrar sesión</button>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted, defineProps, defineEmits } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const props = defineProps({
    visible: {
        type: Boolean,
        required: true
    }
})

function cerrarSesion() {
    localStorage.removeItem('sesion-activa');
    router.push('/');
}
</script>

<style scoped>
.dashboard {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(135deg, #031A38FF, #9669FDFF);
    color: white;
    font-family: 'Luckiest Guy', cursive;
}

button {
    background: white;
    color: black;
    border: none;
    padding: 1rem 2rem;
    margin-top: 1rem;
    cursor: pointer;
    border-radius: 8px;
    font-size: 1.2rem;
}
</style>