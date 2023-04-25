<template>
    <h1>Components:</h1>
    <tworzenie-component/>
    <atrybuty-component parameters="I am a parameter"></atrybuty-component>
    <zdarzenia-component/>
    <page-title :title-text="myTitle" @tick="e => msg = e"></page-title>
    <p>Wiadomość od PageTitle: {{ msg }}</p>
    <sloty-component/>
</template>

<script setup>
import TworzenieComponent from '../components/TworzenieComponent.vue'
import AtrybutyComponent from '../components/AtrybutyComponent.vue'
import ZdarzeniaComponent from '../components/ZdarzeniaComponent.vue'
import SlotyComponent from '../components/SlotyComponent.vue'

import { ref } from 'vue'
const myTitle = ref("Hello from binded props!")
let msg = ref('')

</script>