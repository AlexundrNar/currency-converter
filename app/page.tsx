"use client";

import { useCurrencyStore } from "@/stores/currency-store";

export default function Home() {
  const {
    myCurrency,
    targetCurrency,
    updateLeftExchange,
    updateRightExchange,
  } = useCurrencyStore();

  return (
    <main className="flex min-h-screen flex-col items-center gap-5 py-24">
      <h1>Currency exchanger</h1>
      <div className="w-[90vw] max-w-2xl items-center justify-between text-xl bg-slate-300 rounded-xl p-8 rounded lg:flex">
        <label htmlFor="">
          USD
          <input
            className="w-150 block border-solid border border-green-500 rounded p-2"
            type="number"
            value={myCurrency}
            min={0}
            onChange={(e) => updateLeftExchange(Number(e.currentTarget.value))}
          />
        </label>
        <label htmlFor="">
          EUR
          <input
            className="w-150 block border-solid border border-green-500 rounded p-2"
            type="number"
            value={targetCurrency}
            min={0}
            onChange={(e) => updateRightExchange(Number(e.currentTarget.value))}
          />
        </label>
      </div>
    </main>
  );
}
