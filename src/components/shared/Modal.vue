<template>
  <!-- Button trigger modal -->
  <div>
    <!-- Button trigger modal -->

    <!-- Modal -->
    <div
      v-show="open"
      class="z-40 fixed top-3 left-0 w-full outline-none overflow-x-hidden overflow-y-auto"
      style="80%"
      id="exampleModalScrollable"
      tabindex="-1"
      aria-labelledby="exampleModalScrollableLabel"
      aria-hidden="true"
    >
      <div
        class="sm:h-[calc(100%-3rem)] max-w-2xl my-6 mx-auto relative w-auto pointer-events-none"
      >
        <div
          class="max-h-full overflow-hidden border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current"
          style="margin-top:60px;height:580px;scroll;overflow: hidden"
        >
          <div
            class="flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md"
          >
            <h5
              class="text-xl font-medium leading-normal text-gray-800"
              id="exampleModalScrollableLabel"
            >
              {{ title }}
            </h5>
            <button
              type="button"
              class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div
            class="flex-auto overflow-y-auto relative p-4 mt-10"
            style="overflow: hidden"
          >
            <perfect-scrollbar ref="scroll">
              <slot> </slot>
            </perfect-scrollbar>
          </div>
          <div
            class="flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md"
          >
            <button
              type="button"
              class="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
              data-bs-dismiss="modal"
              @click="closeModal"
            >
              Annuler
            </button>
            <button
              type="button"
              @click.prevent="save"
              class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
            >
              Enregistrer
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { watch, ref, toRefs } from "vue";
import useKeyword from "@/components/contenu/useKeyword";
const emit = defineEmits(["save"]);

const scroll = ref();

const props = defineProps({
  title: String,
  open: Boolean,
});

const showModal = ref(false);

function closeModal() {
  showModal.value = false;
}

let stateOpen = toRefs(props).open;
watch(
  () => stateOpen,
  (oldValue, newValue) => {
    if (newValue != undefined) {
      showModal.value = newValue.value;
    }
  },
  { deep: true }
);

function save() {
  emit("save");
}

function scrollToTop() {
  console.log("scroll top");
  if (scroll.value !== undefined) {
    scroll.value.$el.scrollTop = 0;
  }
}

defineExpose({
  scrollToTop,
});

let { title, open } = props;
</script>
<style>
.ps {
  max-height: 800px;
}
</style>
