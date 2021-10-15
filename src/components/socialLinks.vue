<script setup lang="ts">
import { newSocialLink } from "../utils/initializer";
import Link from "./Link.vue";
import { ref } from "vue";
import Img from "./Img.vue";

const github = newSocialLink("GitHub");
const instagram = newSocialLink("Instagram");
const twitter = newSocialLink("Twitter");
const linkedin = newSocialLink("Linkedin", "https://linkedin.com/in/ghaerdi");
const dev = newSocialLink("Dev", "https://dev.to/ghaerdi");

const socials = ref([github, linkedin, instagram, twitter, dev]);
</script>

<template>
  <div class="socials d-flex justify-content-end">
    <Link
      v-for="(social, index) in socials"
      :key="index"
      class="icons"
      :title="social.title"
      :href="social.url"
    >
      <Img size="40" :src="social.path" :alt="social.description" />
    </Link>
  </div>
</template>

<style lang="postcss" scoped>
.socials {
  margin-top: 2.5vh;
  margin-right: 2vw;
  & .icons {
    margin: 0 15px;
    transition: 0.3s;
  }
  @media screen and (max-width: 650px) {
    justify-content: center;
  }
}
</style>
