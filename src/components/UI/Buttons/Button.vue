<template>
  <button
    :disabled="disabled"
    :class="`${
      disabled ? 'opacity-70' : 'opacity-100'
    } px-5 py-2 bg-gray-300 rounded-lg font-semibold hover:bg-gray-400/50 disabled:pointer-events-none active:scale-[0.99]`"
  >
    <slot>Gray Button</slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ButtonComponent",
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style scoped></style>
