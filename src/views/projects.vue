<script setup lang="ts">
import { getRepositories } from "../services/github";
import { onMounted, ref } from "vue";
import projectCard from "../components/projectCard.vue";
import buttonToHome from "../components/buttonToHome.vue";

const repositories = ref();

onMounted(async () => {
  const repos = await getRepositories();
  repositories.value = repos;
});
</script>

<template>
  <div class="container">
    <div class="comming-from-right-animation d-flex align-items-center column">
      <h2 class="header bold">Projects</h2>

      <div class="visible-animation repositories scroll-y d-grid columns-3">
        <projectCard
          v-for="(repository, index) in repositories"
          :key="index"
          :name="repository.name"
          :description="repository.description"
          :language="repository.language"
          :url="repository.url"
        />
      </div>
    </div>

    <buttonToHome />
  </div>
</template>

<style lang="postcss" scoped>
.repositories {
  width: 90vw;
  max-height: calc(100vh - 221px);
  grid-gap: 20px;
  padding: 0 10px;
}
</style>
