<template>
  <div>
    <modal :open="true" title="Ajouter un mot clé">
      <keyword></keyword>
    </modal>
  </div>
</template>
<script lang="ts" setup>
import modal from "@/components/shared/Modal.vue";
import keyword from "./Keyword.vue";

</script> 

