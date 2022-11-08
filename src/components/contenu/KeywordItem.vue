<template>
  <div style="width: 88%" class="flexContainer">
    <input
      class="w-full appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none input"
      v-model="keyword.label"
      type="text"
      placeholder="Mot clé"
      aria-label="Mot clé"
    />
    <div
      v-for="(synonym, index) in keyword.synonyms"
      class="flex items-center"
      style="align-items: center; justify-content: center"
    >
      <input
        v-model="keyword.synonyms[index]"
        :key="index"
        class="appearance-none bg-transparent border-none input input-synonym focus:outline-none"
      />
      <div class="mt-2 ml-2">
        <a class="mr-2 pointer">
          <font-awesome-icon @click.prevent="addSynonym" icon="fa-solid fa-square-plus" />
        </a>
        <a>
          <font-awesome-icon
            @click.prevent="deleteSynonym(index)"
            icon="fa-solid fa-square-minus"
            class="pointer"
          />
        </a>
      </div>
    </div>
    <levelpicker v-model:level="keyword.level" :groupid="groupid"></levelpicker>
  </div>
  <!-- level picker-->
</template>
<script lang="ts" setup>
import levelpicker from "@/components/shared/LevelPicker.vue";
import { Keyword } from "@/types/Keyword";

const props = defineProps<{ keyword: Keyword; groupid: number }>();

function addSynonym() {
  if (props.keyword.synonyms != null) {
    props.keyword.synonyms.push("");
  }
}

function deleteSynonym(index: number) {
  if (props.keyword.synonyms != null) {
    props.keyword.synonyms.splice(index, 1);
  }
}

function showSynonyms(index: number) {
  addSynonym();
}
</script>
<style>
input:focus::placeholder {
  color: transparent;
}

.input {
  border-bottom: solid 2px rgb(189, 187, 187);
  padding-left: 8px;
}

.input-synonym {
  margin-top: 10px;
}
</style>
