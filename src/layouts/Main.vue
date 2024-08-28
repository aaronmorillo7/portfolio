<template>
<section class="body">
    <Header />
    <router-view></router-view>
    <Footer />
</section>
</template>
<script lang="ts" setup>
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"

</script>