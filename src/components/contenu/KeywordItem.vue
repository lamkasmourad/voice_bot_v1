<template>
  <div style="width:90%;">
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
        " v-model="keyword.label" type="text" placeholder="Mot clé" aria-label="Mot clé" />
    <levelpicker v-model:level="keyword.level" :groupid="groupid"></levelpicker>
  </div>
  <!-- level picker-->
</template>
<script lang="ts" setup>
import levelpicker from "@/components/shared/LevelPicker.vue";
import { Keyword } from "@/types/Keyword";
import { PropType } from "vue";

// const props = defineProps({
//   keyword:
//   {
//     type: Object as PropType<Keyword>,
//     required: true
//   },
//   groupId: {
//     type: Number,
//     required: true,
//   }
// })

const props = defineProps<{keyword: Keyword,groupid: number}>(); 

</script>
