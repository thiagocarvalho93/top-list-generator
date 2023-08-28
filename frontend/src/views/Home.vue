<template>
  <div class="home">
    <div class="flex flex-col justify-between sm:flex-row">
      <h1 class="text-2xl font-semibold mb-6">Listas</h1>
    </div>
    <div>
      <button
        class="mb-6 block max-w-sm p-3 rounded-lg bg-purple-600 text-white font-bold border-black shadow hover:bg-purple-700 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        Adicionar
      </button>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-6 gap-4">
      <the-card
        v-for="lista in listas"
        :key="lista.descricao"
        :descricao="lista.descricao"
        :to="{ name: 'Lista', params: { id: lista.id } }"
      />
    </div>
  </div>
</template>

<script>
import listas from "@/mocks/listas.json";
import TheCard from "@/components/TheCard.vue";

export default {
  data() {
    return {
      listas,
    };
  },
  components: { TheCard },
};
</script>
