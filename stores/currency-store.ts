import { create } from "zustand";

interface Currency {
  myCurrency: number,
  targetCurrency: number,
  k: number,
  updateLeftExchange: (e: number) => void
  updateRightExchange: (e: number) => void
}

export const useCurrencyStore = create<Currency>((set) => ({
  myCurrency: 0,
  targetCurrency: 0,
  k: 1.07,
  updateLeftExchange: (e) => set(state => ({ myCurrency: e, targetCurrency: Number((e / state.k).toFixed(2)) })),
  updateRightExchange: (e) => set(state => ({ targetCurrency: e, myCurrency: Number((e * state.k).toFixed(2)) })),
}))