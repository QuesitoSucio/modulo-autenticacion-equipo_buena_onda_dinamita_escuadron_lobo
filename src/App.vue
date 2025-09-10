<template>
  <div class="app-shell">
    <div class="main-chart">
      <Sidebar />
      <main class="main-content">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup>
import Sidebar from './components/Sidebar.vue'
</script>

<style>
:root {
  --bg: #f5f7fb;
  --card: #ffffff;
  --sidebar: #242944;
  --sidebar-2: #313753;
  --primary: #6042ef;
  --text: #242944;
  --muted: #8a90a6;
  --pill: #e9ecf8;
  --shadow: 0 10px 25px rgba(20, 20, 43, 0.06);
}

* {
  box-sizing: border-box;
}

html,
body,
#app {
  height: 100%;
}

body {
  margin: 0;
  background: var(--bg);
  color: #333;
  font-family: 'Inter', system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
}

.app-shell {
  display: flex;
  min-height: 100vh;
  padding: 30px;
  background-color: #d7d7d7;
}

.main-chart {
  display: flex;
  width: 100%;
  background-color: white;
  border-radius: 20px;
  height: fit-content;
}

.main-content {
  display: flex;
  padding: 12px 12px 12px 0;
  background-color: white;
  width: 100%;
  border-radius: 20px
}
</style>
