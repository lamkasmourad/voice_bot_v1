<template>
  <div>
    <modal :open="true" title="Ajouter un mot clé">
      <div class="flex items-center border-b border-teal-500 py-2">
        <input
          class="
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
          type="text"
          placeholder="Mot clé"
          aria-label="Mot clé"
        />
      </div>
      <!-- level picker-->
      <levelpicker></levelpicker>
    </modal>
  </div>
</template>
<script lang="ts" setup>
import modal from "@/components/shared/Modal.vue";

import levelpicker from "@/components/shared/LevelPicker.vue";

import { reactive, toRefs } from "vue";

const formData = reactive({ text: "" });
</script> 
