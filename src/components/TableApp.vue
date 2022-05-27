<template>
  <div
    class="w-full md:px-2 lg:px-0 mb-32 flex flex-col items-center justify-center max-w-[1080px] mx-auto animateFadeIn"
  >
    <!-- CONTROLS AND TABLE WRAPPER -->
    <div
      class="h-auto w-full my-4 px-2 flex items-center justify-end space-x-4"
    >
      <div
        class="flex items-center space-x-2 cursor-pointer"
        @click="toggleEmulateFetchDelay"
      >
        <span class="text-xs">Эмулировать задержку</span>
        <input v-model="emulateFetchDelay" type="checkbox" />
      </div>
      <button
        ref="refetchButton"
        :disabled="isFetching"
        @click="handleFetch"
        class="px-[10px] h-10 w-10 bg-indigo-500 hover:bg-indigo-600 flex items-center justify-center rounded-full"
      >
        <SpinnerSVG
          :class="`${
            isFetching ? 'animate-spin' : 'drop-shadow-lg'
          }  h-8 w-8 text-white  hover:shadow-indigo-600`"
        />
      </button>
    </div>
    <div
      :class="`${
        dataFetched ? '' : 'bg-gray-200'
      } relative transition-all border lg:rounded-lg  overflow-auto min-h-[320px] w-full`"
    >
      <div
        v-if="!dataFetched"
        class="w-full flex flex-col space-y-12 absolute h-full items-center justify-center"
      >
        <Button
          v-if="isInitialState"
          :disabled="isFetching"
          @click="handleFetch"
          >Загрузить данные</Button
        >
        <SpinnerSVG
          v-if="isFetching"
          :class="`${
            isFetching ? 'animate-spin' : ''
          }  h-16 w-16 text-gray-300 hover:shadow-indigo-600 `"
        />
      </div>

      <!-- TABLE SECTION -->
      <Transition>
        <TableComponent
          v-if="dataFetched"
          :table-headers="tableHeaders"
          :table-data="tableData"
        />
      </Transition>
    </div>
  </div>
</template>

<script lang="ts">
import { IRootState, RootActionsEnum } from "@/store";
import { defineComponent } from "vue";
import { mapActions, mapState } from "vuex";
import Button from "./UI/Buttons/Button.vue";
import SpinnerSVG from "./UI/Icons/SpinnerSVG.vue";
import TableComponent from "./Table/TableComponent.vue";
import { sleep } from "@/helpers/sleep";

export default defineComponent({
  name: "TableApp",
  data() {
    return {
      dataFetched: false,
      isFetching: false,
      tableHeaders: ["Наименование", "Цена", "Количество", "Стоимость"],
      isInitialState: true,
      emulateFetchDelay: true,
    };
  },
  computed: {
    ...mapState({
      tableData: (state) => (state as IRootState).tableData,
    }),
  },

  methods: {
    ...mapActions({
      randomizeTable: RootActionsEnum.POPULATE_TABLE_RANDOMLY,
    }),
    async handleFetch() {
      if (!this.emulateFetchDelay) {
        this.randomizeTable(50);
        this.dataFetched = true;
        this.isInitialState = false; // hides load button if data already loaded

        return;
      }
      this.dataFetched = false;
      this.isFetching = true;
      this.randomizeTable(50);
      await sleep(1000);
      this.isFetching = false;
      this.dataFetched = true;
      this.isInitialState = false; // hides load button if data already loaded
    },
    toggleEmulateFetchDelay() {
      this.emulateFetchDelay = !this.emulateFetchDelay;
    },
  },
  components: { Button, SpinnerSVG, TableComponent },
});
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  overflow: hidden;
  transition: opacity 0.45s ease;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
  top: 0;
  position: absolute;
  height: 0;
  overflow: hidden;
}
.animateFadeIn {
  animation-name: fadein;
  animation-duration: 0.4s;
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
