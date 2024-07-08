import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useCartStore = create(
  persist(
    (set, get) => ({
      cart: [],
      isCartOpen: false,
      toggleCart: () => {
        set((state) => ({ isCartOpen: !state.isCartOpen }));
      },
      addToCart: (id, product) => {
        const cart = get().cart;
        const existingProduct = cart.find((item) => item.id === id);

        if (existingProduct) {
          set((state) => ({
            cart: state.cart.map((item) =>
              item.id === id ? { ...item, count: item.count + 1 } : item
            ),
          }));
        } else {
          set((state) => ({
            cart: [...state.cart, { ...product, count: 1 }],
          }));
        }
      },
      removeFromCart: (id) => {
        const cart = get().cart;
        const existingProduct = cart.find((item) => item.id === id);

        if (existingProduct.count > 1) {
          set((state) => ({
            cart: state.cart.map((item) =>
              item.id === id ? { ...item, count: item.count - 1 } : item
            ),
          }));
        } else {
          set((state) => ({
            cart: state.cart.filter((item) => item.id !== id),
          }));
        }
      },
      clearCart: () => {
        set({ cart: [] });
      },
    }),
    { name: 'cart-storage' }
  )
);

export default useCartStore;
