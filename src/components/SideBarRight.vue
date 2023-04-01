<template>
    <main class="right_side">
        <div class="right_side-user">
             <span class="material-icons">settings</span>
            <img src="../assets/spa.svg" alt=""/>
             <span class="material-icons">email</span>
        </div>
        <div class="right_side-details">
            <div v-for="deal in deals" :key="deal.title" :style="`background-color:${deal.color}`" class="right_side-details-box">
                 <span class="material-icons">{{ deal.icon }}</span>
                 <div class="right_side-details-box-sub">
                        <h4>{{ deal.title }}</h4>
                        <p>{{ deal.number }}</p>
                 </div>
            </div>           
        </div>
        <div class="right_side-best">
            <div class="right_side-heading">
                <h3>The best for you</h3>
                 <span class="material-icons" style="color:red"> recommend</span>
            </div>
             <div class="right_side-best-content" v-for="service in services" :key="service.heading">
                 <div class="customers-details"  >
                        <span class="material-icons" style="width:40px; height:40px; background-color: #E5E8E5; padding: 0.51rem; border-radius: 0.5rem;"> {{ service.icon }}</span>
                       <div class="customers-details-description">

                           <h4>{{ service.heading }}</h4>
                           <p class="subtitle">{{ service.description }}</p>
                        </div>
                    </div>                   
                    <p class="right_side-price">${{ service.number }}.00</p>
                </div>        
                         
            </div>
        <h4>Services</h4>
        <div class="right_side-services">
             <span v-for="card in cards" :key="card.color"
             :style="`color:${card.color}; background-color:${card.backgroundColor}`"
              class="material-icons right_side-services-card" > 
                {{ card.icon }}
            </span>
           
        </div>
    </main>
</template>

<script setup>
  const deals = [
    {
        icon:'group',
        title: "Online Voters",
        number:12388,
        color:'teal'
    },
    {
        icon:'medication',
        title: "Booking Online",
        number:84292,
        color:'red'
    },
    {
        icon:'face_6',
        title: "Customers",
        number:64550,
        color:'black'
    },
    {
        icon:'currency_exchange',
        title: "Earnings",
        number:13088,
        color:'orange'
    },
  ];

  const services = [
   {
        icon: 'card_travel',
        heading: "Oil Massage",
        description: "Beauty spa at its best",
        number: 130,
    },
   {
        icon: 'local_fire_department',
        heading: "Nail Art",
        description: "Excellent Manicure services",
        number: 210,
    },
   {
        icon: 'devices_wearables',
        heading: "Back Massage",
        description: "Smoth massaging ",
        number: 390,
    },
 
   {
        icon: 'recommend',
        heading: "Leg Massage",
        description: "Smoth massaging ",
        number: 900,
    },
 
  ];

  const cards = [
     {
        icon:"diversity_2",
        color: '#FB0303',
        backgroundColor: '#FBCDCD'
    },
     {
        icon:"diversity_2",
        color: 'green',
        backgroundColor: '#C8FBC0'

    },
     {
        icon:"diversity_2",
        color: 'black',
        backgroundColor: '#E5E8E5'

    },
  ]
</script>

<style lang="scss" scoped>
 .right_side{
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
   padding: 2rem;
   margin: 0 0 0 3rem;
 background-color: var(--light);
   box-shadow: 5px 0 5px -5px #333;
    .right_side-user{
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        width: 100%;

        img{
            width: 100px;
            height: 100px;
            border-radius: 50%;
        }
    }
    .right_side-details{
        display: flex;
        align-items: center;
        justify-content: start;
        flex-wrap: wrap;
        .right_side-details-box{
            display: flex;
            align-items: center;
            justify-content: space-between;
            color: var(--light);
            padding: 2rem;
            width: 200px;
            margin: 0.5rem;
            border-radius: 0.5rem;
             }
    }
    .right_side-best{
        display: flex;
        flex-direction: column;
        margin-top: 2rem;
        width: 90%;
        padding: 1rem;
        .right_side-heading{
             display: flex;
        align-items: center;
        justify-content:space-between;
        }
    .right_side-best-content{
        display: flex;
        align-items: center;
        justify-content: space-between;

         .right_side-price{
                 font-size: 0.85rem;
                    color: var(--dark);
            }
        .customers-details{
            display: flex;
            align-self: center;
            justify-content: center;
            margin-top: 1rem;
           
            .customers-details-description{
                margin-left: 1rem;
                h4{
                    font-size: 0.92rem;
                    color: var(--dark);
                    margin-bottom: 0.3rem;
                }
                p{
                    font-size: 0.62rem;
                    color: var(--grey);
                }
            }
        }
    }
    }
    .right_side-services{
        .right_side-services-card{
                width: 70px;
                height: 70px;
                margin: 3px;
                padding: 1.3rem;
                border-radius: 0.5rem;
        }
    }
   }
</style>