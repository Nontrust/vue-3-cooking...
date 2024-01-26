<script setup>
 import  {ref} from 'vue'
 const rawHtml = ref('<div style="color:red" >이것은 빨간 텍스티입니다.</div>');
 const bindNowDate = ref(Date.now());
 const multipleAttribute = {
     id: '1',
     class: 2,
     remove: false
 }

</script>

<template>
 <h1>TemplateSyntax</h1>
   <h2>v-html</h2>
    <div>
      <p>Temlplate : {{rawHtml}}</p>
      <p v-html="rawHtml"></p>
    </div>
    <h2>attribute binding</h2>
    <div>
      <p :id="bindNowDate"> single attribute bind </p>
      <p v-bind="multipleAttribute"> multiple attribute bind </p>
    </div>
    <h2>javascript expression</h2>
    <div>
        <p>하나의 표현식은 가능: {{Math.random() + 1 }}</p>
        <p>선언형으로 하려고 하면 안됨 </p>
        <!--<p>{{ const a = 1 }}</p>-->
        <p>window 등의 전역 속성은 표현식에서 접근 불가,</p>
        <p>app설정시 globalProperties 설정해야 접근가능</p>
        <!--<p>{{window.location.href}}</p>-->

    </div>

</template>

<style scoped>

</style>