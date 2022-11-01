<template>
  <div>
    <modal :open="true" title="Ajouter un mot clé" @save="saveContenu">
      <div class="flex items-center" style="margin-bottom: 30px" v-for="(keyword, index) in keywords"
        :key="index">
        <div style="width:100%;display: flex; align-items: center;">
          <keyword-item :keyword="keyword" :groupid="index"></keyword-item>
          <div class="mt-2 ml-2">
            <a @click.prevent="addKeyword(keyword)" class="mr-2">
              <font-awesome-icon icon="fa-solid fa-square-plus fa-xl" size="lg" />
            </a>
            <a @click.prevent="deleteKeyword(index)">
              <font-awesome-icon icon="fa-solid fa-square-minus" size="lg" />
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

import useKeyword from './useKeyword'
import { onMounted } from "vue"; 

const {keywords, addKeyword, deleteKeyword, saveKeywords } = useKeyword(); 

onMounted(()=> {
  const keyword: Keyword = {id: 0, label: "", level: WeightEnum.FAIBLE } 
  addKeyword(keyword); 
})

function saveContenu(){
  saveKeywords(); 
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