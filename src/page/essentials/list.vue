<script setup>
import {computed, reactive, ref} from "vue";
import MyComponent from "@/components/exam/MyComponent.vue";

const items = ref([{msg:'foo'},{msg:'bar'},{msg:'pee'}])
const filteredItems = computed(() => {
    return items.value.filter((item) => item.msg.match(/foo/))
})

const myObject = reactive({
    title: 'Vue에서 목록을 작성하는 방법',
    author: '홍길동',
    publishedAt: '2016-04-10'
})

const numbers = ref([1, 2, 3, 4, 5])
const sets = ref([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10]
])

const evenNumbers = computed(() => {
    return numbers.value.filter((n) => n % 2 === 0)
})

function even(numbers) {
    return numbers.filter((number) => number % 2 === 0)
}

</script>

<template>
    <div>
        <h1>List에 v-for</h1>
        <span>다음은 javascript의 forEach의 문과 유사합니다.</span>
        <ul>
            <li v-for="(item, index) in items">
                {{index}} - {{item.msg}}
            </li>
        </ul>
        <span>분해도 가능합니다.</span>
        <ul>
            <li v-for="({msg}, index) in items">
                {{index}} - {{msg}}
            </li>
        </ul>
        <span>of 문법도 가능합니다.</span>
        <ul>
            <li v-for="item of items">
                {{item}}
            </li>
        </ul>
    </div>
    <div>
        <h1>Object에 v-for</h1>
        <ul>
            <li v-for="value in myObject">
                {{value}}
            </li>
        </ul>
        <ul>
            <li v-for="(value, key, index) in myObject">
                {{index}}. {{key}} - {{value}}
            </li>
        </ul>
    </div>
    <div>
        <h1>v-for에 key 사용하기 / in-place patch 전략</h1>
        <h3>key 사용 시 dom 이동 대신 변경이 필요한 index에만 패치해</h3>
        <h3>dom tree를 다시 안 그리기때문에, </h3>
        <h3>재배치를 생략하고 re paint만 거치게 되어 효율적 (input value가 있는것 처럼 상태가 있는 것은 안됨)</h3>

        <div v-for="item in items" :key="item.msg">
            위와같이 사용 시 렌더링 효율적
        </div>
        <MyComponent v-for="item in items" :key="item.msg" :msg="item.msg" />
    </div>
    <hr/>
    <div>
        <h1>* 배열 변경 감지 *</h1>
        <ul>수정 메서드(지원 가능한 변경 메서드)
            <li>push() , pop()</li>
            <li>shift() , unshift()</li>
            <li>sort() , reverse()<strong> <- computed에서 쓰지말아야됨</strong></li>
            <li>slice()</li>
        </ul>
        <ul>배열 교체 (효율적 !)
            <li>filter(), concat(), slice()</li>
            <li>새배열을 반환함으로 변경을 감지함</li>
            {{filteredItems}}
        </ul>
        <p> ex: </p>
        <ul v-if="evenNumbers.length >= 0">
            <li v-for="num in evenNumbers">
                {{ num }}
            </li>
        </ul>
        <ul v-for="nums in sets">{{ nums }}
            <li v-for="n in even(nums)">
                {{ n }}
            </li>
        </ul>

    </div>
</template>

<style lang="scss" scoped>

</style>