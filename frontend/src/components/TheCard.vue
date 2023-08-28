<template>
  <router-link class="text-center" :to="to">
    <div
      class="block max-w-sm h-full align-center p-6 bg-white shadow rounded-lg border-black hover:bg-slate-200 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <p class="font-semibold text-gray-700 dark:text-gray-400">
        {{ descricao }}
      </p>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    descricao: { type: String, required: true },
    to: { type: Object, required: true },
  },
};
</script>
