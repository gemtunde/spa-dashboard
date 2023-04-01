<template>
      <div class="app">
        <Sidebar />
        <router-view />
        <SideBarRight />
      </div>
</template>

<script setup>
    import Sidebar from './components/Sidebar.vue';
    import SideBarRight from './components/SideBarRight.vue';
</script>

