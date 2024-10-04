<template>
    <button :class="class" @click="emitClick">
        {{ text }}
    </button>
</template>
<script setup>

const props = defineProps({
    text: {
        type: String,
        default: null,
    },
    isDisabled: {
        type: Boolean,
        default: false,
    },
    class: {
        type: String,
        default: 'button__primary',
    }
})

const emits = defineEmits(['close'])

const emitClick = () => {
    if (!props.isDisabled) emits('close')
}

</script>