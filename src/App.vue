<template>
  <DefaultLayout>
    <TableApp />
  </DefaultLayout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DefaultLayout from "./components/Layout/DefaultLayout.vue";
import TableApp from "./components/TableApp.vue";
export default defineComponent({
  name: "App",
  components: {
    DefaultLayout,
    TableApp,
  },
});
</script>
