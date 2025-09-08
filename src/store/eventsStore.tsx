import { create } from "zustand";
import type { EventsStore } from "../types/events.types";

export const useEventsStore = create<EventsStore>((set) => ({
  events: [],
  setEvents: (events) => set({ events }),
  cart: [],
  purchases: [],
  addToCart: (event) => set(() => ({ cart: [event] })),
  updateCartAmount: (amount: number) =>
    set((state) => ({
      cart: state.cart.map((item, idx) =>
        idx === 0 ? { ...item, amount } : item
      ),
    })),
  submitCart: () =>
    set((state) => {
      const cartItem = state.cart[0];
      if (!cartItem) return { purchases: state.purchases, cart: [] };

      const exists = state.purchases.find((item) => item.id === cartItem.id);
      return {
        purchases: exists
          ? state.purchases.map((item) =>
              item.id === cartItem.id
                ? { ...item, amount: item.amount + cartItem.amount }
                : item
            )
          : [...state.purchases, cartItem],
        cart: [],
      };
    }),
  clearCart: () => set({ cart: [] }),
}));
