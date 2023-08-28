<template>
  <div class="app bg-gray-100 w-screen h-screen">
    <TheNavigation />
    <div class="container mx-auto py-4">
      <router-view :key="$router.path"></router-view>
    </div>
  </div>
</template>

<script>
import TheNavigation from "@/components/TheNavigation.vue";

export default {
  components: { TheNavigation },
};
</script>
