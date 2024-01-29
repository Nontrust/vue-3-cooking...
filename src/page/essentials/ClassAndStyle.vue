<script setup xmlns="http://www.w3.org/1999/html">
import {computed, reactive, ref} from "vue";
import MyComponent from "@/components/exam/MyComponent.vue";

/** api response */
const error = ref(null)
const isActive = ref(true)
const hasError = ref(false)

const classObject = computed(() => ({
    active: isActive.value && !error.value,
    'text-danger': error.value && error.value.type === 'fatal'
}))

const activeClass = ref('active')
const errorClass = ref('text-danger')

</script>

<template>
    <div>
        <span :class = "{active:isActive, 'text-danger':hasError}">
            클래스를 확인해 보세요 <br/>
            truthy한 key가 바인딩 됩니다 <br/>
        </span>
        <span :class = "classObject">
            클래스를 확인해 보세요 <br/>
            Object형태도 문제 없습니다.<br/>
        </span>
        <span :class = "[isActive ? activeClass : '', errorClass]">
            클래스를 확인해 보세요 <br/>
            3항식도 문제 없습니다.<br/>
        </span>
        <MyComponent class="baz" />
        <span :style="{display :  ['flex', '-webkit-box', '-ms-flexbox']}">
            CSS 속성 중 <a href="https://developer.mozilla.org/en-US/docs/Glossary/Vendor_Prefix">Vendor 에</a>
            속하지 않은 브라우저에 접속 시 지원되는 속성을 찾아 추가합니다.
        </span>

    </div>
</template>

<style lang="scss" scoped>
.active{
    font-family: "HY견고딕";
}
.text-danger{
    font-family: "HY견고딕";
    color: red;
}

</style>