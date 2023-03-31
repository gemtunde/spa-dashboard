<template>
    <main class="home-page">
       <TopBar />
       <Hero />
       <div class="bottom">
        <Customers/>
        <Spending />
       </div>
    </main>
</template>
<script setup>
 import TopBar from '../components/TopBar.vue';
 import Hero from '../components/Hero.vue';
import Customers from '../components/Customers.vue';
import Spending from '../components/Spending.vue';
</script>
<style lang="scss" scoped>
.home-page{
    display: flex;
    flex-direction: column;
    justify-content: start;
   // align-items: start;
   width: 850px;
   .bottom{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 2rem;
    width: 850px;
    margin-top: -18px;


    @media only screen and (max-width:768px) {

        flex-direction: column;
    }
   }
}
</style>