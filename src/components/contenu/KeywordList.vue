<template>
  <div>
    <modal :open="true" title="Ajouter un mot clé" @save="saveContenu" ref="modelref">
      <div
        class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
        role="alert"
        v-if="error"
      >
        <span class="block sm:inline">{{ error }}</span>
        <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
          <svg
            class="fill-current h-6 w-6 text-red-500"
            role="button"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <title>Close</title>
            <path
              d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
            />
          </svg>
        </span>
      </div>

      <div
        class="flex items-center"
        style="margin-bottom: 30px"
        v-for="(keyword, index) in keywords"
        :key="index"
      >
        <div style="width: 100%; display: flex; position: relative">
          <keyword-item :keyword="keyword" :groupid="index"></keyword-item>
          <div class="mt-2 ml-2">
            <a @click.prevent="showSynonyms(index)" class="mr-2 link-synonym pointer">
              <font-awesome-icon icon="fa-solid fa-s" size="lg" />
            </a>
            <a @click.prevent="addKeyword(keyword)" class="mr-2 pointer">
              <font-awesome-icon icon="fa-solid fa-square-plus fa-xl" size="lg" />
            </a>
            <a @click.prevent="deleteKeyword(index)">
              <font-awesome-icon
                icon="fa-solid fa-square-minus"
                class="pointer"
                size="lg"
              />
            </a>
          </div>
        </div>
      </div>
    </modal>
  </div>
</template>
<script lang="ts" setup>
import modal from "@/components/shared/Modal.vue";
import KeywordItem from "./KeywordItem.vue";
import { Keyword } from "@/types/Keyword";
import { WeightEnum } from "@/enums/WeightEnum";
import useKeyword from "./useKeyword";
import { onMounted, watch, ref } from "vue";

const modelref = ref();
const { keywords, error, addKeyword, deleteKeyword, saveKeywords } = useKeyword();

onMounted(() => {
  const keyword: Keyword = { id: 0, label: "", level: WeightEnum.FAIBLE };
  addKeyword(keyword);
});

watch(
  () => error,
  (newValue) => {
    if (newValue.value) {
      modelref.value.scrollToTop();
    }
  },
  { deep: true }
);

function saveContenu() {
  saveKeywords();
}

function showSynonyms(groupId: number) {
  modelref.value.showSynonyms(groupId);
}
</script>

<style scoped>
.link-synonym {
  position: absolute;
  top: 5px;
  right: 72px;
}

.circle {
  border: 1px solid #000;
  width: 20px;
  height: 20px;
  border-radius: 100%;
  position: relative;
  margin: 4px;
  display: inline-block;
  vertical-align: middle;
}
.pointer {
  cursor: pointer;
}
.circle.plus:before,
.circle.plus:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: green;
}
.circle.plus:before {
  width: 2px;
  margin: 2px auto;
}
.circle.plus:after {
  margin: auto 2px;
  height: 2px;
}

/* and a bonus!!! minus :-) */
.circle.minus:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: red;
  margin: auto 2px;
  height: 2px;
}
</style>
