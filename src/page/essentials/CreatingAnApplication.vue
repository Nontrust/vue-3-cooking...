<script setup>
import {ref} from "vue";

const count = ref(0)
</script>

<template>
 <div>
     <div> CreatingAnApp </div>
     <button @click="count++">{{count}}</button>
 </div>
</template>

<style scoped>

</style>