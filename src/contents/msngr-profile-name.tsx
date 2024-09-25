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

/***
 * 1.Profile name at list --> [role="row"] span[dir="auto"] span.x1lliihq.x193iq5w.x6ikm8r.x10wlt62.xlyipyv.xuxw1ft
 * 2.Profile name at list (unseen messages) --> [role="row"] span[dir="auto"] span.x1lliihq.x193iq5w.x6ikm8r.x10wlt62.xlyipyv.xuxw1ft
 * 3.Profile name preview at group --> [role="main"] [role="grid"] [role="gridcell"] [role="presentation"] h4
 * 4.Profile name preview at group --> [role="main"] [role="grid"] [role="gridcell"] [role="presentation"] h4
 * 5.Profile name preview at top --> [role="main"] h2[dir="auto"]
 * 6.Profile name at right sidebar --> [role="main"] div.x9f619.x1n2onr6.x1ja2u2z.x78zum5.xdt5ytf.x2lah0s.x193iq5w.x6s0dn4.x1swvt13.x1pi30zi span[dir="auto"]
 ***/

export const getInlineAnchorList: PlasmoGetInlineAnchorList = async () => {
  const anchors = document.querySelectorAll(
    `[role="row"] span[dir="auto"] span.x1lliihq.x193iq5w.x6ikm8r.x10wlt62.xlyipyv.xuxw1ft, [role="row"] span[dir="auto"] span.x1lliihq.x193iq5w.x6ikm8r.x10wlt62.xlyipyv.xuxw1ft, [role="main"] [role="grid"] [role="gridcell"] [role="presentation"] h4, [role="main"] h2[dir="auto"], [role="main"] div.x9f619.x1n2onr6.x1ja2u2z.x78zum5.xdt5ytf.x2lah0s.x193iq5w.x6s0dn4.x1swvt13.x1pi30zi span[dir="auto"]`
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