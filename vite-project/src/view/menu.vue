<template>
    <div>
        <h1>menu bienvenido {{ nombre }}</h1>
    </div>
</template>

<script setup>
import { ref } from 'vue';
let nombre =ref('pepita')
</script>