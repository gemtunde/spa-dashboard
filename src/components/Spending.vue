<template>
    <div class="spending">
      <vue-bar-graph
      :points=[7,4,5,3,4,2,5,9,7,6,8,2]
    :show-y-axis="false"
    :show-x-axis="true"
    :width="400"
    :height="325"
    :show-values="true"
    :use-custom-labels="true"
    :labels="['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dec']"
    />
    </div>
</template>

<script setup>
import VueBarGraph from 'vue-bar-graph';

</script>

<style lang="scss" scoped>
    .spending{
        display: flex;
        flex: 2;
        margin-left: 1rem;
        background-color: white;
    }
</style>