<template>
  <div
    class="flex items-center" style="margin-bottom:30px;"
    v-for="(keyword, index) in listOfKeywords"
    :key="index"
  >
    <div style="width: 90%;">
      <input
        class="
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
        "
        v-model="keyword.value"
        type="text"
        placeholder="Mot clé"
        aria-label="Mot clé"
      />
      <levelpicker v-model:level="keyword.level" :groupId="index"></levelpicker>
    </div>
    <div class="mt-2">
      <a href="" @click.prevent="addNewKeyword">
        <span class="circle plus"></span>
      </a>
      <a href="">
        <span class="circle minus"></span>
      </a>
    </div>
    <!-- level picker-->
  </div>
</template>
<script lang="ts" setup>

import levelpicker from "@/components/shared/LevelPicker.vue";

import { WeightEnum } from "@/enums/WeightEnum";

import { reactive } from "vue";

const listOfKeywords = reactive([{ value: "", level: WeightEnum.FAIBLE }]);

function addNewKeyword() {
  listOfKeywords.push({ value: "", level: WeightEnum.FAIBLE });
}
</script>

<style scoped>
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