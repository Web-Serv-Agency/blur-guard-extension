import BlurOverlay from "@/components/blur-overlay";
import ReduxProvider from "@/redux/redux-provider";
import styleText from "data-text:@/style.css";
import type { PlasmoCSConfig, PlasmoCSUIProps, PlasmoGetInlineAnchorList, PlasmoGetStyle } from "plasmo";

export const config: PlasmoCSConfig = {
  matches: ["https://*.messenger.com/*"],
};

export const getInlineAnchorList: PlasmoGetInlineAnchorList = async () => {
  const anchors = document.querySelectorAll(
    `[role="main"] [role="grid"] [role="gridcell"] [role="presentation"] a[role="link"] img[alt="Open photo"],
    [role="main"] [role="grid"] [role="gridcell"] [role="presentation"] .x6s0dn4.x78zum5.x1iyjqo2.x1qughib.x6ikm8r.x10wlt62.x1n2onr6,
    [role="main"] [role="grid"] [role="gridcell"] [role="presentation"] video
    `,
  );

  /**
   * 1st: Conversation Image
   * 2nd: Conversation Audio and Link Preview
   * 3rd: Conversation Video
   * */

  const elements = Array.from(anchors);

  return elements.map((element) => ({
    element,
    insertPosition: "afterend",
  }));
};

export const getStyle: PlasmoGetStyle = () => {
  const style = document.createElement("style");
  style.textContent = styleText.replaceAll(":root", ":host(plasmo-csui)");
  style.textContent += "#plasmo-shadow-container { z-index: 99 !important; }";
  return style;
};

const MediaPreviewWrapper = ({ anchor }: PlasmoCSUIProps) => {
  return (
    <ReduxProvider>
      <BlurOverlay anchor={anchor} platform="messenger" feature="mediaPreview" />
    </ReduxProvider>
  );
};

export default MediaPreviewWrapper;
