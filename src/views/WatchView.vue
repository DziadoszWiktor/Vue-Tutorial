<template>
    <h1>Hello Vue!</h1>
    <table>
      <tr v-for="c, index in filteredCourses" :key="c.id">
      <td>{{ index + 1 }}.</td>
      <td>Kurs: {{ c.name }}</td>
      <td>Uczestnicy: {{ c.participants }}</td>
      <td><button @click="id = c.id">Opis</button></td>
    </tr>
    </table>
    <p><button @click="courses.reverse()">Odwróć</button></p>
    <p><button @click="showAll = !showAll">Tylko z egzaminem / wszystkie</button></p>
    <p>{{ info }}</p>
  </template>
  
  <script setup>
    import { computed, ref, watch  } from 'vue'
    
    const courses = ref([
        { id: 102, name: 'Bogate aplikacje internetowe', participants: 20, exam: true },
        { id: 225, name: 'Programowanie kreatywne', participants: 10, exam: false },
        { id: 136, name: 'Optymalizacja procesów', participants: 15, exam: true },
        { id: 408, name: 'Handel elektroniczny', participants: 32, exam: true },
    ])

    const showAll = ref(true)
    const filteredCourses = 
      computed(() => courses.value.filter(c => showAll.value || c.exam))
    const id = ref(0)
    const info = ref('Opis: nie wybrano kursu')
    function getInfo() {
      info.value = 
        `Opis kursu ${id.value}: ${courses.value.find(c => c.id == id.value).name}`
    }
    watch (id, getInfo)
  </script>