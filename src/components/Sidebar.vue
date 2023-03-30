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

    <!-- menu -->
    <h3>Menu</h3>
    <div class="menu">
        <router-link class="button" to="/">
            <span class="material-icons">home</span>
            <span class="text">Home</span>
        </router-link>
        <router-link class="button" to="/about">
            <span class="material-icons">visibility</span>
            <span class="text">About</span>
        </router-link>
        <router-link class="button" to="/team">
            <span class="material-icons">group</span>
            <span class="text">Team</span>
        </router-link>
        <router-link class="button" to="/contact">
            <span class="material-icons">email</span>
            <span class="text">Contact</span>
        </router-link>
    </div>
    <div class="center"></div>
    <div class="menu">
        <router-link class="button" to="/user">
            <span class="material-icons">account_circle</span>
            <span class="text">User</span>
        </router-link>
        <router-link class="button" to="/settings">
            <span class="material-icons">settings</span>
            <span class="text">Settings</span>
        </router-link>
    </div>
  </aside>
</template>

<script setup>
import { ref } from 'vue';
    const is_expanded = ref(localStorage.getItem("is_expanded") === "true");

    const toggleMenu = () => {
        is_expanded.value = !is_expanded.value 
        localStorage.setItem("is_expanded", is_expanded.value)
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
                transition: 0.2s ease-out;
            }
            &:hover{
               .material-icons{
                 color: var(--primary);
                transform: translateX(0.5rem);
               }
            }
        }
    }
    h3, button .text{
        opacity: 0;
        transition: 0.2s ease-out;
    }
    h3{
        color: var(--grey);
        text-transform: uppercase;
        font-size: 0.8rem;
        margin-bottom: 0.5rem;
    }
    .menu {
        margin: 0 -1rem;
        .button{
            display: flex;
            align-items: center;
            text-decoration: none;

            padding: 0.5rem 1rem;
             transition: 0.2s ease-out;
             .material-icons{
                 transition: 0.2s ease-out;
                 color: var(--light);
                 font-size: 2rem;
                 margin-right: 1rem;
             }
             .text{
                color: var(--light);
                 transition: 0.2s ease-out;                 
             }
             &:hover, &.router-link-exact-active {
                background-color: var(--grey);

                .material-icons, text {
                    color: var(--dark);
                }
             }
             &.router-link-exact-active {
                border-right: 5px solid var(--primary);
             }
        }
    }
    &.is-expanded {
        width: var(--sidebar-width);
        .menu-toggle-wrap {
            top: -3rem;
        }
         h3, button .text{
        opacity: 1;
    }
    }
    .center{
        flex: 1 1 0;
    }
    @media only screen and (max-width:768px){
        position:fixed;
        z-index: 99;
    }
}
</style>