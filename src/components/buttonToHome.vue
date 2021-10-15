<script setup lang="ts">
import Img from "./Img.vue";
</script>

<template>
  <div class="visible-animation">
    <router-link class="btn p-fixed flashing-animation bottom left" to="/">
      Click to
      <Img
        class="icons-beside-of-text"
        src="icons/home.svg"
        size="20"
        alt="white home icon"
      />
    </router-link>
  </div>
</template>
