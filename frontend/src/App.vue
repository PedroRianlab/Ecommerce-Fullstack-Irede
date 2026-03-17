<template>
  <div class="min-h-screen bg-gray-50 p-8">
    <div class="max-w-6xl mx-auto">
      <h1 class="text-3xl font-extrabold text-gray-900 mb-8">
        🚀 Irede Ecommerce
      </h1>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <ProductCard
            v-for="product in products"
            :key="product.id"
            :product="product"
            @add-to-cart="handleAddToCart"
          />
        </div>

        <div
          class="bg-white p-6 rounded-xl shadow-sm border border-gray-200 h-fit"
        >
          <h2 class="text-xl font-bold mb-4 flex items-center">🛒 Carrinho</h2>

          <div v-if="cart.getTotalItems() === 0" class="text-gray-500 italic">
            O carrinho está vazio.
          </div>

          <ul class="space-y-3 mb-6">
            <li
              v-for="item in cart.content"
              :key="item.product.id"
              class="flex justify-between text-sm"
            >
              <span>{{ item.product.name }} x {{ item.quantity }}</span>
              <span class="font-semibold"
                >R$ {{ (item.product.price * item.quantity).toFixed(2) }}</span
              >
            </li>
          </ul>

          <div class="border-t pt-4 border-gray-100">
            <div class="flex justify-between text-gray-600">
              <span>Total de itens:</span>
              <span>{{ cart.getTotalItems() }}</span>
            </div>
            <div
              class="flex justify-between text-xl font-black mt-2 text-indigo-600"
            >
              <span>Total:</span>
              <span>R$ {{ cart.getFinalPrice().toFixed(2) }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProductCard from "./components/ProductCard.vue";
import { Product } from "./models/Product";
import { Cart } from "./models/Cart";

export default defineComponent({
  components: { ProductCard },
  data() {
    return {
      // Instanciando a Model Rica
      cart: new Cart(),
      products: [
        {
          id: 1,
          name: "Mouse Gamer",
          price: 120.5,
          category: { id: 1, name: "Periféricos" },
        },
        {
          id: 2,
          name: "Teclado Mecânico",
          price: 350.0,
          category: { id: 1, name: "Periféricos" },
        },
        {
          id: 3,
          name: 'Monitor 24"',
          price: 890.0,
          category: { id: 2, name: "Hardware" },
        },
        {
          id: 4,
          name: "Headset RGB",
          price: 210.0,
          category: { id: 1, name: "Periféricos" },
        },
      ] as Product[],
    };
  },
  methods: {
    handleAddToCart(product: Product) {
      this.cart.addItem(product, 1);

      /** * DICA DO PROFESSOR: Reatividade com Classes
       * O Vue 3 às vezes não detecta mudanças internas em objetos de classe.
       * Para garantir que a tela atualize, "re-atribuímos" o objeto.
       */
      this.cart = Object.assign(
        Object.create(Object.getPrototypeOf(this.cart)),
        this.cart,
      );
    },
  },
});
</script>
