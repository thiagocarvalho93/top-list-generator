<template>
  <div v-if="lista" class="lista">
    <h1 class="text-2xl font-semibold mb-6">{{ lista.descricao }}</h1>
  </div>
</template>

<script>
import listas from "@/mocks/listas.json";

export default {
  props: {
    id: { type: String, required: true },
  },
  computed: {},
  data() {
    return {
      lista: null,
    };
  },
  async created() {
    await this.getLists();
  },
  methods: {
    async getLists() {
      // TODO: call api here
      this.lista = listas.find((x) => x.id == this.id);
    },
  },
};
</script>
