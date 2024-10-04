<template>
    <router-view></router-view>
</template>

<script setup>
import { ref } from 'vue';

const selectedTheme = ref(localStorage.getItem('selected_theme') ?? 'light')

document.body.setAttribute("data-theme", selectedTheme.value);

</script>
