import { CountButton } from "@/features/counter/count-button"
import ReduxProvider from "@/redux/redux-provider"
import cssText from "data-text:@/style.css"
import type { PlasmoCSConfig } from "plasmo"

export const config: PlasmoCSConfig = {
  matches: ["https://www.plasmo.com/*"]
}

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

const PlasmoOverlay = () => {
  return (
    <ReduxProvider>
      <div className="z-50 flex fixed top-32 right-8">
        <CountButton />
      </div>
    </ReduxProvider>
  )
}

export default PlasmoOverlay
