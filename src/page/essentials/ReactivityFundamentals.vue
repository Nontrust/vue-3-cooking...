<script setup>
import {nextTick, reactive, ref} from "vue";

/** ref */
const count = ref(0)
const lotto = ref({
    number: 0,
    arr: []
})
const increase = () => count.value++;
const pickLotto = () => lotto.value.arr
    .push((Math.random() * 100 % 32 + 1)
        .toFixed());

const renderDom = async () => {
    count.value++
    await nextTick()
    // after render....
}
/** reactive */
const rawObj = {count: 0}
const state = reactive(rawObj)

</script>

<template>
    <div>
        <h2>Ref</h2>
        <strong>
            {{ count }}
        </strong>
        <button @click="increase">
            count up
        </button>
    </div>
    <div>
        <strong>
            get reactive lotto with ref()
        </strong>
        {{ lotto.arr }}
        <button @click="pickLotto">
            pick number
        </button>
    </div>
    <h2>Reactive</h2>
    <div>
        ref와 접근방식이 다름 <p>state.<del>value.</del>count</p>
        <button>{{state.count}}</button>
        <p>is state == rawObj??? :: {{state == rawObj}}</p>
        reactive api는 직접적으로 값에 접근 가능, 또한 raw object를 proxy객체로 재정의
        <p>is state == rawObj with reactive??? :: {{state == reactive(rawObj)}}</p>
        <p>주의사항</p>
        <ul>
            <li>Collection 에서만 사용 가능</li>
            <li>
                전체 객체를 대체 할 수 없음<br/>
                let state = reactive({s:0}); <br/>
                state = reactive({count:1}) <br />
                반응성이 끊김 <br />
            </li>
            <li>
                분해시 반응성 끊김 <br/>
                let {count} = state -> 반응성끊김 <br />
            </li>
        </ul>
    </div>




</template>

<style lang="scss" scoped>

</style>