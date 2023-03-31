<template>
    <main class="hero">
        <div class="hero-container">
            <div class="hero-image-container">
                <img src="../assets/spa-hero.png" alt="" class="hero-image" />
            </div>
            <div class="hero-content">
                <h2>Hi! Welcome back Parasytearlx</h2>
                <p>Welcome to beauty spa, where you can relax and enjoy life</p>
                <button>Learn more</button>
            </div>
        </div>
        <div class="hero-banner">
            <div class="hero-banner-content" v-for="order in orders" :key="order.title">
             <span class="material-icons" :style="`color:${order.color}`"> {{ order.icon }}</span>
                <p>{{ order.title }}</p>
                <h2>+{{ order.amount }}</h2>
                <span class="percentage" :style="`color:${order.color}`"> {{ order.percentage}}%</span>
            </div>
           
        </div>

    </main>
</template>

<script setup>
     const orders = [
    {
        color: 'orange',
        amount: '72,000',
        title: 'Massage',
        icon: 'recommend',
        percentage: 29
    },
    {
        color: 'green',
        amount: '67,000',
        title: 'Therapiss',
        icon: 'stars',
        percentage: 64
    },
    {
        color: 'blue',
        amount: '19,000',
        title: 'Salt & Aroma',
        icon: 'track_changes',
        percentage: 15
    },
    {
        color: 'red',
        amount: '98,000',
        title: 'Pedicure',
        icon: 'incomplete_circle',
        percentage: 45
    },
]
console.log(orders)
</script>

<style lang="scss" scoped>
    .hero{
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: start;
       // padding:5rem 20rem;
        width: 850px;
        .hero-container{
            display: flex;
            align-items: center;
            justify-content: space-around;
            background-color: var(--light);
            width: 100%;
            
        @media only screen and (max-width : 786px) {
            flex-direction: column;
        }

            img{
                width: 100%;
                border-radius: 20px;
                outline: 0;
                border: 0;
            }

            .hero-content{
                display: flex;
                flex-direction: column;
                align-items: start;
                justify-content: center;
                padding: 3rem;
                color: var(--dark);
                 p{
                    margin: 1rem 0;
                 }
                 button{
                    color: var(--light);
                    border-radius: 2rem;
                    padding: 1rem 2rem;
                    background-color: var(--green);
                 }
            }
        }
        .hero-banner{
            display: flex;
            align-items: start;
            justify-content: start;
            width: 100%;
           // padding: 2rem;
             
             margin-top: 1rem;

            .hero-banner-content{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: start;
                padding: 1rem;
                margin:0.2rem;
                width: 200px;
                background-color: var(--light);

                p{
                    color: var(--grey);
                    font-size: 0.8rem;
                }
                h2{
                    color: var(--dark);
                    font-size: 1.5rem;
                }
            }
        }
    }
</style>