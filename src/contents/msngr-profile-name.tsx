import BlurOverlay from "@/components/blur-overlay"
import ReduxProvider from "@/redux/redux-provider"
import styleText from "data-text:@/style.css"
import type {
  PlasmoCSConfig,
  PlasmoCSUIProps,
  PlasmoGetInlineAnchorList,
  PlasmoGetStyle
} from "plasmo"

export const config: PlasmoCSConfig = {
  matches: ["https://*.messenger.com/*"]
}

export const getInlineAnchorList: PlasmoGetInlineAnchorList = async () => {
  const anchors = document.querySelectorAll(
    `[role="row"] span[dir="auto"] span.x1lliihq.x193iq5w.x6ikm8r.x10wlt62.xlyipyv.xuxw1ft, [role="row"] span[dir="auto"] span.x1lliihq.x193iq5w.x6ikm8r.x10wlt62.xlyipyv.xuxw1ft`
  )

  const elements = Array.from(anchors)

  return elements.map((element) => ({
    element,
    insertPosition: "afterend"
  }))
}

export const getStyle: PlasmoGetStyle = () => {
  const style = document.createElement("style")
  style.textContent = styleText.replaceAll(":root", ":host(plasmo-csui)")
  style.textContent += "#plasmo-shadow-container { z-index: 99 !important; }"
  return style
}

const ProfileBlurWrapper = ({ anchor }: PlasmoCSUIProps) => {
  return (
    <ReduxProvider>
      <BlurOverlay anchor={anchor} />
    </ReduxProvider>
  )
}

export default ProfileBlurWrapper
