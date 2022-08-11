<template>
  <div>
    <modal :open="true" title="Ajouter un mot clé">
      <div className="flex items-center">
        <keyword></keyword>
        <font-awesome-icon icon="fas fa-plus-circle" style="font-size: 20px" />
      </div>
    </modal>
  </div>
</template>
<script lang="ts" setup>
import modal from "@/components/shared/Modal.vue";
import keyword from "./Keyword.vue";

import { reactive, toRefs } from "vue";

const formData = reactive({ text: "" });
</script> 
