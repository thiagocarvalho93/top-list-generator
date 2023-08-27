<template>
  <div class="home">
    <h1 class="underline font-bold">Listas</h1>
    <router-link
      v-for="lista in listas"
      :key="lista.id"
      :to="{ name: 'Lista', params: { id: lista.id } }"
    >
      {{ lista.descricao }}
    </router-link>
  </div>
</template>

<script>
import listas from "@/mocks/listas.json";

export default {
  data() {
    return {
      listas,
    };
  },
};
</script>
