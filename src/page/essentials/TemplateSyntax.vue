<script setup>

 const rawHtml = '<div style="color:red" >이것은 빨간 텍스트입니다.</div>';
 const bindNowDate = Date.now();
 const multipleAttribute = {
     id: '1',
     class: 2,
     remove: false
 }
 const dynamicAttribute = 'href'
 const url = "naver.com"
 const congratulation = (msg) => alert(msg);
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
        <strong>하나의 표현식은 가능: {{Math.random() + 1 }}</strong>
        <p>선언형으로 하려고 하면 안됨 </p>
        <!--<p>{{ const a = 1 }}</p>-->
        <strong>app설정시 globalProperties 설정 후 접근가능</strong>
        <p>window 등의 전역 속성은 표현식에서 접근 불가,</p>
        <p>app config로 정의된 모먼트 {{$moment.now()}}</p>
        <!--<p>{{window.location.href}}</p>-->
    </div>

    <h2>Directives</h2>
    <p v-if="$moment().day()%6 >= 0">this text on weekend</p>
    <p v-else>see on hollyday</p>
    <h2>Dynamic Attribute</h2>
    <a :[dynamicAttribute]='url'> naver.com </a>

    <h2>Event</h2>
    <button @click="congratulation('have a good day')"> it`s my birth Day</button>

</template>

<style scoped>

</style>