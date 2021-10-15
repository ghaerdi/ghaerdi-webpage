<script setup lang="ts">
import errorRainBackground from "../components/error/rainBackground.vue";
import buttonToHome from "../components/buttonToHome.vue";
</script>

<template>
  <div class="container d-flex center column text-center overflow-hidden">
    <errorRainBackground />

    <div class="error d-flex center column text">
      <span class="four-zero-four bold">404</span>
      <span class="error-message">Page not found</span>
    </div>

    <buttonToHome />
  </div>
</template>

<style lang="postcss" scoped>
.text {
  margin: 1rem;
  transform: translate(0, -5vh);
}

.four-zero-four {
  font-size: 3.5rem;
  letter-spacing: 1rem;
}

.error-message {
  font-size: 1rem;
  font-weight: 1.5rem;
  letter-spacing: 0.5rem;
}
</style>
