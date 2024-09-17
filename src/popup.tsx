import { CountButton } from "@/features/counter/count-button"

import "@/style.css"

import ReduxProvider from "./redux/redux-provider"

function IndexPopup() {
  return (
    <ReduxProvider>
      <div className="flex items-center justify-center h-16 w-40">
        <CountButton />
      </div>
    </ReduxProvider>
  )
}

export default IndexPopup
