<template>
  <header class="header">
    <div>
      <div class="rounded-md bg-green-500 w-10 h-10"/>
    </div>

    <template v-if="isTablet || isDesktop">
      <nav class="flex justify-center gap-x-8"> 
        <router-link to="/"><Button text="home" /></router-link>
        <router-link to="/"><Button text="home" /></router-link>
        <router-link to="/"><Button text="home" /></router-link>
      </nav>

      <div>
        <Switch id="theme-selector" v-model="isDarkThemeSelected" @change="changeSelectedTheme" />
      </div>
    </template>
    <SideMenu v-if="isMobile" />
  </header>
</template>

<script setup>
import { ref } from "vue";

import Button from "@/components/common/Button.vue"
import Switch from "@/components/common/Switch.vue"
import SideMenu from "@/components/SideMenu.vue";

import useBreakpoints from "@/composables/useBreakpoints";

const { isMobile, isTablet, isDesktop } = useBreakpoints();

const isDarkThemeSelected = ref(localStorage.getItem("selected_theme") == "dark")

const changeSelectedTheme = () => {
  document.body.setAttribute("data-theme", isDarkThemeSelected.value ? "dark" : "light");
  localStorage.setItem("selected_theme", isDarkThemeSelected.value ? "dark" : "light")
}
</script>
