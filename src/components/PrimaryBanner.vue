<template>
    <article class="flex justify-center gap-x-10 lg:max-w-5xl mt-32">
        <div>
            <p class="font-bold text-2xl">Aaron Morillo</p>
            <h3 class="font-bold text-5xl lg:mt-2 text-secondary">Frontend & Backend Developer</h3>
            <p class="lg:mt-2">I specialize in crafting immersive user experiences using the latest  frontend technologies and frameworks to bring your vision to life.  Additionally, my expertise extends to geoinformatics, where I excel in  harnessing the power of spatial data to uncover actionable insights.</p>
            <div class="flex lg:items-center gap-x-12 lg:mt-10">
                <Button text="Get in touch" />
                <div class="flex items-center gap-x-2">
                    <div class="h-3 w-3 rounded-full bg-green-500" />
                    <p>Available now</p>
                </div>
            </div>
        </div>
        <div>
            <div class="h-96 w-96 rounded-xl bg-green-500" />
        </div>
    </article>
</template>

<script setup>
import Button from "@/components/common/Button.vue"

</script>