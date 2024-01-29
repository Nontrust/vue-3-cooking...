<script setup>

import {computed, reactive, ref} from "vue";

/** computed 기초 */
const dev = reactive({
    nickName: 'Nontrust',
    techStack: [
        'java', 'spring', 'vue', 'javascript'
    ] ,
})
// 캐싱됨
const hasDevTechStack = computed(() => dev.techStack.length > 0 ? 'Yes' : 'No')

/** 수정 가능 (드물게 써야됨)
 *  watchers 권장
 */
const firstName = ref('Lee')
const lastName = ref('ch')

const fullName = computed({
    get: ()     => `${firstName.value} ${lastName.value}`,
    set: (val)  =>[firstName.value, lastName.value] = val.split(' ')
})

firstName.value = 'L'

</script>

<template>
    <div>
        <span>걔 이름 뭐야?</span>
        <span>{{ fullName }}</span>
    </div>
    <div>
        <span>걔 개발 할 수 있어?</span>
        <span>{{ hasDevTechStack }}</span>
    </div>
</template>

<style lang="scss" scoped>

</style>