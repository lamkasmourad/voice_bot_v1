<template>
  <div>
    <loading :active="isLoading" loader="bars" :on-cancel="onCancel" :can-cancel="true" :is-full-page="true">
    </loading>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
const props = defineProps({
  loading: Boolean,
});

const isLoading = ref(false);

const onCancel = () => {
  isLoading.value = false;
};

watch(() => props.loading, (newValue, oldValue) => {
  isLoading.value = newValue;
}, { deep: true }
)
</script>

<style scoped>
</style>