import type { Product } from "./Product";

export interface CartItem {
  product: Product;
  quantity: number;
}

export class Cart {
  // Lista privada de itens para garantir o encapsulamento (POO)
  private items: CartItem[] = [];

  /**
   * Desafio 1: Adicionar item usando .some()
   */
  addItem(product: Product, quantity: number): void {
    // Verifica se o produto já existe no array
    const hasItem = this.items.some(item => item.product.id === product.id);

    if (hasItem) {
      // Se existe, localiza e incrementa a quantidade
      const existingItem = this.items.find(item => item.product.id === product.id);
      if (existingItem) {
        existingItem.quantity += quantity;
      }
    } else {
      // Se não existe, adiciona novo
      this.items.push({ product, quantity });
    }
  }

  /**
   * Desafio 2: Total de unidades usando .reduce()
   */
  getTotalItems(): number {
    return this.items.reduce((total, item) => total + item.quantity, 0);
  }

  /**
   * Desafio 3: Preço total usando .reduce()
   */
  getFinalPrice(): number {
    return this.items.reduce((total, item) => {
      return total + (item.product.price * item.quantity);
    }, 0);
  }

  // Método auxiliar para expor os itens para o Vue
  get content(): CartItem[] {
    return this.items;
  }
}