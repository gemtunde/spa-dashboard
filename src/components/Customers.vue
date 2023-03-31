<template>
    <main class="customers">
        <div class="customers-heading">
            <h3>Latest Customers</h3>
             <span class="material-icons" style="color:red"> recommend</span>
        </div>
        <div class="customers-content">
            <div class="customers-sub-content" style="background-color: var(--ligth);">
                <div class="customers-details">
                    <h4>Daniel James</h4>
                    <p class="subtitle">+3433299832</p>
                </div>
                <button class="title"  style="background-color: var(--red);">Rejected</button>
                <p class="date">23th March, 2023</p>
            </div>
            <div class="customers-sub-content" style="background-color: var(--ash);">
                <div class="customers-details">
                    <h4>Daniel James</h4>
                    <p class="subtitle">+3433299832</p>
                </div>
                <button class="title"  style="background-color: var(--ash);">Pending</button>
                <p class="date">23th March, 2023</p>
            </div>
            <div class="customers-sub-content" style="background-color: var(--ligth);">
                <div class="customers-details">
                    <h4>Daniel James</h4>
                    <p class="subtitle">+3433299832</p>
                </div>
                <button class="title"  style="background-color: var(--green);">Approved</button>
                <p class="date">23th March, 2023</p>
            </div>
            <div class="customers-sub-content" style="background-color: var(--ash);">
                <div class="customers-details">
                    <h4>Daniel James</h4>
                    <p class="subtitle">+3433299832</p>
                </div>
                <button class="title"  style="background-color: var(--green);">Approved</button>
                <p class="date">23th March, 2023</p>
            </div>
            <div class="customers-sub-content" style="background-color: var(--ligth);">
                <div class="customers-details">
                    <h4>Daniel James</h4>
                    <p class="subtitle">+3433299832</p>
                </div>
                <button class="title"  style="background-color: var(--green);">Approved</button>
                <p class="date">23th March, 2023</p>
            </div>
        </div>
    </main>
</template>

<script setup>

</script>

<style lang="scss" scoped>
    .customers{
        display: flex;
        flex-direction: column;
        align-self: start;
        justify-content: start;
        background-color: var(--light);
       // width: 40%;
       flex: 1;
        .customers-heading{
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 1rem;

            h3{
                color: var(--dark);
                font-size: 0.9rem;
            }          
        }
          .customers-content{
                display: flex;
                flex-direction: column;
                align-items: start;
                justify-content: start;
              .customers-sub-content{
                display: flex;
                align-items: center;
                justify-content: space-between;
                  padding: 0.4rem 0.2rem;
                border-radius: 1rem;
                width: 100%;

                      p{
                color: var(--dark);
                font-size: 1rem;
                padding: 0.2rem;
            }
                .customers-details{
                    width: 40%;
                    padding: 0 0.5rem;
                      h4{
                color: var(--dark);
                font-size: 0.75rem;
            }
                      p{
                color: var(--grey);
                font-size: 0.65rem;
            }
                }
                button{
                    padding: 0.5rem  0.7rem;
                    border-radius: 0.4rem;
                     font-size: 0.65rem;
                }
                .date{
                    color: var(--dark);
                font-size: 0.5rem;
                padding: 0.2rem;
                }
              }
            }
    }
</style>