<script setup>

</script>

<template>
    <div :class="$attrs.class">
        My Component
        <strong>{{$attrs.msg}}</strong>
    </div>
</template>

<style lang="scss" scoped>
.baz {
  font-style: italic;
}

</style>