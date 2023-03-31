<template>
      <div class="app">
        <Sidebar />
        <router-view />
        <Sidebar />
       
      </div>
</template>

<script setup>
    import Sidebar from './components/Sidebar.vue';
</script>

