<template>
  <div
    class="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
  >
    <div class="mb-4">
      <span class="text-xs font-bold uppercase tracking-wider text-indigo-500">
        {{ product.category.name }}
      </span>
      <h3 class="text-lg font-bold text-gray-800 mt-1">{{ product.name }}</h3>
    </div>

    <div class="flex items-center justify-between mt-6">
      <span class="text-xl font-black text-gray-900">
        R$ {{ product.price.toFixed(2) }}
      </span>

      <button
        @click="onAdd"
        class="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
      >
        Adicionar
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Product } from "../models/Product";

export default defineComponent({
  name: "ProductCard",
  props: {
    // PropType garante que o TS saiba que isso é um Product
    product: {
      type: Object as PropType<Product>,
      required: true,
    },
  },
  methods: {
    onAdd() {
      // Avisa o componente pai que este produto quer ser adicionado
      this.$emit("add-to-cart", this.product);
    },
  },
});
</script>
