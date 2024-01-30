<script setup>
import {ref} from "vue";
import List from "@/page/essentials/list.vue";

const count = ref(0)
const random = ref(0)
const inputVal = ref('')
const getRandomCount = (event) => {
    if(event){
        alert(event.target.id)
    }
    random.value = Math.round(Math.random()*100)
}
</script>

<template>
    <div>
        <h1>인라인 핸들러</h1>
        <p> count :: {{count}}</p>
        <button @click="count++">
            count up
        </button>
        <h1>메서드 핸들러</h1>
        <p> random :: {{random}}</p>
        <button id="hello" @click="getRandomCount">
            get Random
        </button>
        <h1></h1>
        <input v-model="inputVal" />
    </div>
    <div>
        .exact 사용시 정확히 다른 키 없이 누를 시 가능
        <h1>이벤트 수식어</h1>
        <ul>순서가 중요해!
            <li>.stop</li>
            <li>.prevent</li>
            <li>.self</li>
            <li>.capture</li> -> add EventListner 옵션
            <li>.once</li> -> add EventListner 옵션
            <li>.passive</li> -> add EventListner 옵션
        </ul>
        <h1>입력키 수식어</h1>
        <ul>
            <li>.page-up</li>
            <li>.enter</li>
            <li>.tab</li>
            <li>......</li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>

</style>