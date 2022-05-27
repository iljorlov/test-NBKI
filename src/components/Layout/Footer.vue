<template>
  <footer class="bg-white border-t border-gray-200 min-h-[68px] max-h-[72px]">
    <div
      class="max-w-[1080px] px-4 py-4 shrink-0 mx-auto md:flex md:items-center md:justify-between md:py-6"
    >
      <a href="https://github.com/iljorlov" target="_blank"
        ><div
          class="text-sm cursor-pointer hover:bg-gray-200 transition-colors rounded py-1 px-1 w-fit sm:text-center flex items-center justify-between space-x-2"
        >
          <img class="h-7 w-7 rounded-sm" src="../../assets/GitHub-Mark.png" />
          <span
            class="text-gray-900 text-base hover:text-black transition-colors"
            >iljorlov</span
          >
        </div></a
      >

      <div
        class="text-sm cursor-pointer rounded py-1 px-1 w-fit sm:text-center flex items-center justify-between space-x-2"
      >
        <span class="text-gray-900 text-base hover:text-black transition-colors"
          >7 903 739-14-41</span
        >
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "LayoutFooter",
});
</script>

<style lang="scss" scoped></style>
