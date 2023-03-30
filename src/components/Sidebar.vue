<template>
  <aside :class="`${is_expanded ? 'is-expanded' : ''}`">
    <div class="logo">
        <img src="../assets/vue.svg" alt="vue" />
    </div>
    <div class="menu-toggle-wrap">
        <div v-if="!is_expanded" class="menu-toggle" @click="toggleMenu">
            <span class="material-icons">keyboard_double_arrow_right</span>
        </div>
        <div v-if="is_expanded" class="menu-toggle" @click="toggleMenu">
            <span class="material-icons">close</span>
        </div>
    </div>
  </aside>
</template>

<script setup>
import { ref } from 'vue';
    const is_expanded = ref(false);

    const toggleMenu = () => {
        is_expanded.value = !is_expanded.value 
    }
</script>

<style lang="scss" scoped>
aside{
    display: flex;
    flex-direction: column;
    background-color: var(--dark);
    color: var(--light);
    width: calc(2rem + 32px);
    min-height: var(--sidebar-height);
    padding: 1rem;
    overflow: hidden;
    transition: 0.2s ease-out;
    .logo{
        margin-bottom: 1rem;
        img{
            width: 2rem;
        }
    }
    .menu-toggle-wrap{
        display: flex;
        justify-content: flex-end;
        margin-bottom: 1rem;

        position: relative;
        top: 0;
        transition: 0.2s ease-out;
        cursor: pointer;
        .menu-toggle {
            transition: 0.2s ease-out;
            
            .material-icons{
                font-size: 1.5rem;
            }
            &:hover{
                color: var(--primary);
                transform: translateX(0.5rem);
            }
        }
    }
    &.is-expanded {
        width: var(--sidebar-width);
        .menu-toggle-wrap {
            top: -3rem;
        }
    }
    @media only screen and (max-width:768px){
        position:fixed;
        z-index: 99;
    }
}
</style>