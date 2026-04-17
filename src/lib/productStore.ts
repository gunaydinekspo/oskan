"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Product, products as defaultProducts } from "./products";

interface ProductStore {
  products: Product[];
  addProduct: (product: Omit<Product, "id">) => void;
  updateProduct: (id: number, product: Partial<Product>) => void;
  deleteProduct: (id: number) => void;
  resetToDefaults: () => void;
}

export const useProductStore = create<ProductStore>()(
  persist(
    (set) => ({
      products: defaultProducts,
      addProduct: (product) =>
        set((state) => ({
          products: [
            ...state.products,
            {
              ...product,
              id: Math.max(...state.products.map((p) => p.id), 0) + 1,
            },
          ],
        })),
      updateProduct: (id, updates) =>
        set((state) => ({
          products: state.products.map((p) =>
            p.id === id ? { ...p, ...updates } : p
          ),
        })),
      deleteProduct: (id) =>
        set((state) => ({
          products: state.products.filter((p) => p.id !== id),
        })),
      resetToDefaults: () =>
        set(() => ({
          products: JSON.parse(JSON.stringify(defaultProducts)),
        })),
    }),
    {
      name: "product-storage",
    }
  )
);

export function useProducts() {
  return useProductStore((state) => state.products);
}
