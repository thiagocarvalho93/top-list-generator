<template>
  <TheNavigation />
  <div class="container">
    <router-view :key="$router.path"></router-view>
  </div>
</template>

<script>
import TheNavigation from "@/components/TheNavigation.vue";

export default {
  components: { TheNavigation },
};
</script>
