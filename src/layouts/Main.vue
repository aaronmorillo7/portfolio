<template>
<section class="body main-layout">
    <div class="main-layout__container--primary">
        <Header />
        <router-view></router-view>
        <Footer />
    </div>
</section>
</template>
<script lang="ts" setup>
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"

</script>