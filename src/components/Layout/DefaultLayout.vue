<template>
  <div
    class="bg-gray-50 relative min-h-[100vh] h-full w-full flex flex-col justify-between"
  >
    <div>
      <Header />
      <main><slot></slot></main>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Footer from "./Footer.vue";
import Header from "./Header.vue";

export default defineComponent({
  name: "DefaultLayout",
  components: {
    Footer,
    Header,
  },
});
</script>

<style lang="scss" scoped></style>
