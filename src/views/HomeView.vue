<template>
  <h1>Api Wheater Data</h1>
  <p> {{ data }} </p>
</template>

<script setup>
  import { useFetch } from '../composable/useFetch'

  const key = 'd543b6f86e3246e3aae194822231904'
  const country = 'Cracow'
  const { data, error, loading, fetchData } = useFetch('https://api.weatherapi.com/v1/current.json?key=' + key + '&q=' + country)

  function test() {
    fetchData()
  }
</script>