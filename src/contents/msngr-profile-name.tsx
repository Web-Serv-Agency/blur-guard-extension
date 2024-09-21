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
    `[role="row"] span[dir="auto"].x1lliihq.x1plvlek.xryxfnj.x1n2onr6.x193iq5w.xeuugli.x13faqbe.x1vvkbs.x1s928wv.xhkezso.x1gmr53x.x1cpjm7i.x1fgarty.x1943h6x.x1xmvt09.x6prxxf.xk50ysn.xzsf02u.x1yc453h.xudqn12.x3x7a5m.xq9mrsl > span.x1lliihq.x193iq5w.x6ikm8r.x10wlt62.xlyipyv.xuxw1ft, [role="row"] span[dir="auto"].x1lliihq.x1plvlek.xryxfnj.x1n2onr6.x193iq5w.xeuugli.x13faqbe.x1vvkbs.x1s928wv.xhkezso.x1gmr53x.x1cpjm7i.x1fgarty.x1943h6x.x1xmvt09.x6prxxf.x1s688f.xzsf02u.x1yc453h.xudqn12.x3x7a5m.xq9mrsl > span.x1lliihq.x193iq5w.x6ikm8r.x10wlt62.xlyipyv.xuxw1ft`
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
