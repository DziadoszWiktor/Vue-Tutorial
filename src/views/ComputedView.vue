<template>
    <h1>Computed</h1>
    <table>
    <tr v-for="c, index in filteredCourses" :key="c.id">
        <td>{{ index + 1 }}.</td>
        <td>Kurs: {{ c.name }}</td>
        <td>Uczestnicy: {{ c.participants }}</td>
    </tr>
    </table>
    <p><button @click="courses.reverse()">Odwróć</button></p>
    <p><button @click="showAll = !showAll">Tylko z egzaminem / wszystkie</button></p>
</template>

<script setup>
    import { computed, ref  } from 'vue'
    const courses = ref([
        { id: 102, name: 'Bogate aplikacje internetowe', participants: 20, exam: true },
        { id: 225, name: 'Programowanie kreatywne', participants: 10, exam: false },
        { id: 136, name: 'Optymalizacja procesów', participants: 15, exam: true },
        { id: 408, name: 'Handel elektroniczny', participants: 32, exam: true },
    ])

    const showAll = ref(true)
    const filteredCourses = 
    computed(() => courses.value.filter(c => showAll.value || c.exam))
</script>