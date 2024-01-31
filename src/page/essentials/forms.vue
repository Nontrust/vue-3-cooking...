<script setup>
import {reactive, ref} from "vue";

const text= ref('')
const range = ref([1,2,3,4,5])
const models = reactive({
    textbox:'2',
    checkbox:[1],
    radiobox:1,
    select:'',
    selectList:['가', '나', '다']
})
const toggle = ref('네')
const lazyMsg = ref('lazy')
const number = ref(1)

</script>

<template>
    <div>
        <h1>양방향 바인딩, v-model</h1>
        <p>{{models}}</p>
        <code>function a(){return true;}</code>
        <input type="text" v-model="models.textbox">
        <input v-for="n in range" type="checkbox" :value="n" v-model="models.checkbox">
        <input v-for="n in range" type="radio" :value="n" v-model="models.radiobox">
        <select v-model="models.select">
            <option disabled value=""> select one </option>
            <option v-for="option in models.selectList"> {{option}} </option>>
        </select>
        <select v-model="models.select" multiple>
            <option disabled value=""> select one </option>
            <option v-for="option in models.selectList"> {{option}} </option>>
        </select>
    </div>
    <div>
        <h1>다양한 옵션</h1>
        <span>{{toggle}}<input type="checkbox" v-model="toggle" true-value="네" false-value="아니요"></span>
        <span>{{lazyMsg}}<input type="text" v-model.lazy="lazyMsg"></span>
        <span>{{number}}<input type="text" v-model.number="number"></span>
    </div>
</template>

<style scoped lang="scss">

</style>