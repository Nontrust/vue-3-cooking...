<script setup>
import {ref} from "vue";

const awsome = ref(true)
</script>

<template>
    <div>
        <h1 v-if="awsome"> Vue는 멋져요 </h1>
        <h1 v-else> Vue는 못생겼어요 </h1>

        <h2 v-show="awsome">숨길 수 없는 내마음</h2>
        <button @click="awsome = !awsome">
            전환
        </button>
    </div>
    <template v-if="true">
        <h1>템플릿에서도 사용 가능합니다.</h1>
        <p>단락 1</p>
    </template>
</template>

<style lang="scss" scoped>

</style>