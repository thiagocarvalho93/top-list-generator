<template>
  <div class="home">
    <h1 class="text-2xl font-semibold mb-6">Lists</h1>
    <div class="flex mb-6">
      <div class="mr-4">
        <input
          v-model="nomeNovaLista"
          type="text"
          placeholder="New list name"
          id="small-input"
          class="block p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div>
        <button
          class="block max-w-sm p-2 rounded-lg bg-purple-600 text-white sm:text-xs font-bold border-black shadow hover:bg-purple-700 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          @click="adicionar"
        >
          Add
        </button>
      </div>
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
import listasJson from "@/mocks/listas.json";
import TheCard from "@/components/TheCard.vue";

export default {
  components: { TheCard },
  data() {
    return {
      listas: listasJson,
      nomeNovaLista: "",
    };
  },
  methods: {
    adicionar() {
      let ultimoId = Math.max(...this.listas.map((x) => x.id));
      this.listas.push({ id: ultimoId + 1, descricao: this.nomeNovaLista });
    },
  },
  created() {},
};
</script>
