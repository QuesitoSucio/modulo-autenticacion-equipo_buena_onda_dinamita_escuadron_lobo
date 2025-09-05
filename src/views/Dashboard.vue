<template>
  <DashboardLayout>
    <h1 class="text-2xl font-bold mb-4">Good morning, {{ user.name }}</h1>

    <div class="bg-white p-6 rounded-2xl shadow-md w-80">
      <h2 class="text-gray-500">Earnings</h2>
      <p class="text-3xl font-bold text-purple-600">€8,350</p>
      <span class="text-green-500 text-sm">+10% since last month</span>
    </div>
  </DashboardLayout>
</template>

<script setup>
const user = {
  name: 'Filip',
}
</script>

