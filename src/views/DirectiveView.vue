<template>
    <h1>Directives</h1>

    <h2>v-text</h2>
    <p v-text="'Kurs: ' + course.name +', uczestnicy: ' + course.participants"></p>
    <h2>v-html</h2>
    <p v-html="'Kurs: <b>' + course.name +'</b>, uczestnicy: ' + course.participants"></p>
    <h2>v-bind:class albo :class</h2>
    <p :class="courseClass">
        Kurs: {{ course.name }}, uczestnicy: {{ course.participants }}
    </p>
    <h2>v-on</h2>
    <p :class="courseClass">
        Kurs: {{ course.name }}, uczestnicy: {{ course.participants }}
    </p>
    <button @click="changeColor">Kolor</button>
    <h2>v-model</h2>
    <p>Kurs: {{ course.name }}, uczestnicy: {{ course.participants }}</p>
    <p>Zmień nazwę kursu:</p>
    <input size="50" :value="course.name" @input="onInput">
    <h2>v-if i v-show</h2>
    <p>
        <span>Kurs: {{ course.name }}</span>
        <span v-show="pVisible">, uczestnicy: {{ course.participants }}</span>
    </p>
    <button @click="showParticipant">Uczestnicy</button>
    <h2>v-for</h2>
    <p v-for="c of courses">Kurs: {{ c.name }}, uczestnicy: {{ c.participants }}</p>

</template>

<script setup>
    import { ref, reactive } from 'vue'
    const course = reactive({ name: 'Programowanie kreatywne', participants: 10 })
    const courseClass = ref('c2')
    function changeColor() {
        courseClass.value = courseClass.value == 'c1' ? 'c2' : 'c1'
    }
    function onInput(e) {
        course.name = e.target.value
    }
    const pVisible = ref(true)
    function showParticipant() {
        pVisible.value = !pVisible.value
    }

    const courses = ref([
        { id: 102, name: 'Bogate aplikacje internetowe', participants: 20, exam: true },
        { id: 225, name: 'Programowanie kreatywne', participants: 10, exam: false },
        { id: 136, name: 'Optymalizacja procesów', participants: 15, exam: true },
        { id: 408, name: 'Handel elektroniczny', participants: 32, exam: true },
    ])
</script>

<style scoped>
    .c1 { color: blue }
    .c2 { color: red }
</style>