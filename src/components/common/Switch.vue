<template>
  <label>
    <input
        type="checkbox"
        class="hidden"
        :value="modelValue"
        :disabled="isDisabled"
        @change="changeModelValue"
      />
    <div :class="`switch ${currentSwitchClass}`">
      <div :class="`switch__dot ${currentDotClass}`" />
    </div>
</label>
</template>
<script lang="ts" setup>
import { computed } from "vue";

const emits = defineEmits(["update:modelValue", "change"]);

const { id, modelValue, isDisabled } = defineProps({
  id: {
    type: String,
    default: null,
  },
  modelValue: {
    type: Boolean,
    default: false,
  },
  isDisabled: {
    type: Boolean,
    default: false,
  },
});

const currentSwitchClass = computed(() => {
  if (isDisabled)
    return `${modelValue ? "switch--on" : "switch--off"} opacity-70`;

  return modelValue ? "switch--on" : "switch--off";
});

const currentDotClass = computed(() => {
  if (isDisabled)
    return `${modelValue ? "switch__dot--on" : "switch__dot--off"} opacity-70`;

  return modelValue ? "switch__dot--on" : "switch__dot--off";
});

const changeModelValue = () => {
    emits("update:modelValue", !modelValue)
    emits("change", !modelValue)
}
</script>
