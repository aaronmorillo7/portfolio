<template>
  <header class="">
    <div></div>
    <menu v-if="isTablet || isDesktop" class="flex justify-center gap-x-8"> 
      <router-link><Button text="home" /></router-link>
      <router-link><Button text="home" /></router-link>
      <router-link><Button text="home" /></router-link>
    </menu>

    <div v-if="isTablet || isDesktop"></div>
    <SideMenu v-if="isMobile" />
  </header>
</template>

<script lang="ts" setup>
import Button from "@/components/common/Button.vue"
import SideMenu from "@/components/SideMenu.vue";

import useBreakpoints from "@/composables/useBreakpoints";
import { DetailedBreakpoints } from "@/interfaces/index";

const { isMobile, isTablet, isDesktop }: DetailedBreakpoints = useBreakpoints();
</script>
