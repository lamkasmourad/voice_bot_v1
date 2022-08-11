<template>
    <div>
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
    </div>    
</template>
<script lang="ts" setup>
import levelpicker from "@/components/shared/LevelPicker.vue";

</script>