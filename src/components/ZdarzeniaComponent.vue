<template>
    <h1>Komponent zdarzenia</h1>
    <h2>{{ titleText }}</h2>
</template>
  
<script setup>
    const props = defineProps(['titleText'])
    const emit  = defineEmits(['tick'])
    emit('tick', 'Tick from PageTitle')
</script>