<template>
    <h1>Komponent atrybut</h1>
    <p>{{ text }}</p>
</template>

<script setup>
const props = defineProps({
  parameter: String 
})
</script>