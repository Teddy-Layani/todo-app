<script setup>
import todoApp from './components/TodoApp.vue'
</script>

<template>
  <todoApp />
</template>

<style scoped>
.todo-app {
  display: flex;
  flex-direction: column;
  align-items: center;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  --webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
