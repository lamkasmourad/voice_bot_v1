<template>
 <div class="vertical-align">
    <div class="btns">
      <label v-for="(weight,key) in weights" :key="key">
        <input  type="radio" :name="'group-'+groupid" :value="key" @input="updateLevel"/>
        <span class="btn first">{{ useCapitalize(weight)  }}</span>
      </label>
    </div>
  </div>

</template>
    
<script setup lang="ts">
import { reactive,  toRefs } from "@vue/reactivity";
  
import {useCapitalize} from "@/helpers/capitilize.js";
 
import { weights }  from "@/config/weights";  

const props = defineProps<{
    level:number,
    groupid: number
}>()

const emit = defineEmits(['update:level'])

const updateLevel = (event: any) => {
    emit('update:level', parseInt(event.target.value))
}

</script>

<style>

.vertical-align {
  vertical-align: middle;
}

.button-link {
  text-decoration: none;
}

.btns {
  background-color: #ff9035;
  background-image: linear-gradient(100deg, #ff5a64 0%, #faa04b 30%, #d2dc69 70%, #0ef49b 100%);
  z-index: 0;
  height: 25px;
  float: none;
  margin: 0 auto;
  margin-top:10px;
  width: 100%;
  max-width: 100%;
  border-radius: 40px;
  display: block;
  box-shadow: 0 2px 4px -1px rgba(25, 25, 25, 0.2);
}
.btns input {
  display: none;
}
.btns label {
  display: table;
  float: left;
  padding: 0;
  width: 20%;
  height: 100%;
  margin: 0;
  text-align: center;
  border-left: 1px solid rgba(0, 0, 0, 0.05);
}
.btns label:first-child {
  border-left: none;
  border-radius: 40px 0 0 40px;
}
.btns label:last-child {
  border-radius: 0 40px 40px 0;
}
.btns .btn {
  font-size: 14px;
  cursor: pointer;
  width: 100%;
  display: table-cell;
  vertical-align: middle;
  font-weight: 300;
  color: #FFF;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
  box-shadow: inset 0 30px 20px -20px rgba(255, 255, 255, 0.15);
  transition: color 250ms cubic-bezier(0.165, 0.84, 0.44, 1), box-shadow 250ms cubic-bezier(0.895, 0.03, 0.685, 0.22);
}
.btns .btn:hover {
  box-shadow: inset 0 30px 30px -20px rgba(50, 50, 50, 0.02);
  transition: all 250ms cubic-bezier(0.165, 0.84, 0.44, 1);
}
.btns .btn:after {
  content: "???";
  margin-left: -10px;
  display: inline-block;
  transform: scale(0);
  transition: margin 250ms cubic-bezier(0.6, -0.28, 0.735, 0.045) 100ms, transform 250ms cubic-bezier(0.895, 0.03, 0.685, 0.22);
}
.btns .first {
  border-radius: 40px 0 0 40px;
}
.btns .last {
  border-radius: 0 40px 40px 0;
}
.btns input:checked + .btn {
  color: #5f6982;
  text-shadow: none;
  background-image: linear-gradient(to top, rgba(25, 25, 25, 0) 65%, rgba(25, 25, 25, 0.08));
  box-shadow: inset 0 10px 50px rgba(25, 25, 25, 0.08);
  transition: color 500ms cubic-bezier(0.165, 0.84, 0.44, 1), box-shadow 150ms;
}
.btns input:checked + .btn:after {
  margin-left: 12px;
  transform: scale(1.25);
  transition: transform 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 250ms, margin 500ms;
}

</style>