import { store, useAppSelector } from "@/redux/store"

import { increment } from "./counter-slice"

export const CountButton = () => {
  const { count } = useAppSelector((state) => state.counter)
  const increase = () => {
    store.dispatch(increment())
  }

  return (
    <button
      onClick={() => increase()}
      type="button"
      className="flex flex-row items-center px-4 py-2 text-sm rounded-lg transition-all border-none
      shadow-lg hover:shadow-md
      active:scale-105 bg-slate-50 hover:bg-slate-100 text-slate-800 hover:text-slate-900">
      Count:
      <span className="inline-flex items-center justify-center w-8 h-4 ml-2 text-xs font-semibold rounded-full">
        {count}
      </span>
    </button>
  )
}
