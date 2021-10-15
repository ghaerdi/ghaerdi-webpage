<script setup lang="ts">
import { defineProps } from "@vue/runtime-core";

interface Props {
  size: string;
}

defineProps<Props>();
</script>

<template>
  <img :width="size" :height="size" />
</template>
