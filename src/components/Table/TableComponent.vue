<template>
  <table class="w-full text-sm text-left text-gray-500 animateFadeIn">
    <thead class="text-xs text-left bg-gray-300/50 text-gray-900">
      <tr>
        <th
          v-for="headerTitle in tableHeaders"
          :key="`table-header-${headerTitle}`"
          scope="col"
          class="px-3 md:px-6 py-3"
          :id="headerTitle"
        >
          {{ headerTitle }}
        </th>
      </tr>
    </thead>

    <tbody>
      <tr
        v-for="(tableEntry, index) in tableData"
        :key="tableEntry.id"
        class="bg-white border-b"
      >
        <td
          scope="row"
          class="px-3 md:px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
        >
          <span class="text-gray-400 font-normal mr-3">{{ index + 1 }}</span>
          {{ tableEntry.name }}
        </td>
        <td class="px-3 md:px-6 py-4 text-gray-900">
          {{ formatFloat(tableEntry.price) }}
        </td>
        <td class="px-3 md:px-6 py-4 text-gray-900">
          {{ tableEntry.quantity }}
        </td>
        <td class="px-3 md:px-6 py-4 text-gray-900">
          {{
            makeReadableFloat(
              formatFloat(tableEntry.price * tableEntry.quantity)
            )
          }}
        </td>
      </tr>
      <tr>
        <td
          scope="row"
          v-for="(header, index) in tableHeaders"
          :key="`table-${tableName}-underline-cell-${index}`"
          class="px-3 md:px-6 py-4 bg-gray-200"
        >
          <div v-if="index === tableHeaders.length - 1">
            <span class="font-medium">Всего:</span>
            {{ makeReadableFloat(formatFloat(totalPrice)) }}
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { TableEntryType } from "@/store/types";
import { defineComponent } from "vue";

// floar representation is pretty bas with random floats: total prices are inconsistent, so I had to do a lot of parsing
import formatFloatTo2Precision from "@/helpers/formatFloatTo2Precision";

export default defineComponent({
  name: "TableComponent",
  props: {
    tableHeaders: {
      type: Array as () => string[],
      required: true,
    },
    tableData: {
      type: Object as () => TableEntryType[],
      required: true,
    },
  },
  computed: {
    tableName() {
      // for the sake of simplicity just concatenate table headers to get an id
      return this.tableHeaders.join("");
    },
    totalPrice() {
      return this.tableData.reduce(
        (prev, cur) => prev + cur.price * cur.quantity,
        0
      );
    },
  },
  methods: {
    formatFloat: formatFloatTo2Precision,
    makeReadableFloat(n: number) {
      // makes a large float a bit more readable
      const stringifiedValue = n.toString();
      const splitVal = stringifiedValue.split(".");
      if (splitVal.length !== 2) {
        return n;
      }
      const decimalPart = splitVal[1];
      const mainPart = splitVal[0];
      const formattedMainPart = mainPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return `${formattedMainPart}.${decimalPart}`;
    },
  },
});
</script>

<style scoped>
.animateFadeIn {
  animation-name: fadein;
  animation-duration: 0.2s;
  animation-timing-function: linear;
}
@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
