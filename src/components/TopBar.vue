<template>
    <div class="top-nav">
       <h3>Dashboard Spa</h3>
       <div class="button-input">
             <span class="material-icons">search</span>
            <input type="text" placeholder="Search spa services" class="inputBtn">
       </div>
       <div class="topMenu">
            <router-link class="button" to="/">
                <span class="text">Home</span>
            </router-link>
            <router-link class="button" to="/team">
                <span class="text">Team</span>
            </router-link>
            <router-link class="button" to="/about">
                <span class="text">About</span>
            </router-link>
       </div>
    </div>
</template>

<script setup>

</script>
<style lang="scss" scoped>
.top-nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
   // background-color: var(--ash);
    width: 100%;
    height: 10vh;
    padding: 2.5rem;

    h3{
        color: var(--dark);
        font-size: 1.1rem;
    }
    .button-input {
        display: flex;
        align-items: center;
        justify-content:start ;
        background-color: var(--light);
        padding: 0.5rem 2rem;
        border-radius: 0.5rem;

        .material-icons{
            cursor: pointer;
        }
        input{
           padding: 0.3rem;
           color: var(--dark);
           border: 0;
           outline: 0;
        }
    }
    .topMenu {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding:1rem 2rem;
        width: 40%;
        .button{
            text-decoration: none;
            cursor: pointer;
            display: block;
            padding: 1rem;
             color: var(--dark);

            &:hover{
                background-color: var(--dark);
                color: var(--light);
            }

            .text{
                font-size: 1rem;
            }
        }
    }
}
</style>