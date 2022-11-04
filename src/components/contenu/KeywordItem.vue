<template>
  <div style="width:90%;" class="flexContainer">
    <input class="
          w-full
          appearance-none
          bg-transparent
          border-none
          w-full
          text-gray-700
          mr-3
          py-1
          px-2
          leading-tight
          focus:outline-none
          input
        "  v-model="keyword.label" type="text" placeholder="Mot clé" aria-label="Mot clé" />
    <div v-for="(synonym, index) in keyword.synonyms">
      <input v-model="keyword.synonyms[index]" :key="index" class="input input-synonym">
    </div>
    <levelpicker v-model:level="keyword.level" :groupid="groupid"></levelpicker>
  </div>
  <!-- level picker-->
</template>
<script lang="ts" setup>
import levelpicker from "@/components/shared/LevelPicker.vue";
import { Keyword } from "@/types/Keyword";

const props = defineProps<{ keyword: Keyword, groupid: number }>();

function focusInput() {
  console.log("focus");
}

</script>
<style>
input:focus::placeholder {
  color: transparent;

}

.input{
    border-bottom: solid 2px rgb(189, 187, 187);
    padding-left: 8px;
    outline-width: 0;
}

.input-synonym{
  margin-top:10px;
}

input.middle:focus {
    outline-width: 0;
}

</style>