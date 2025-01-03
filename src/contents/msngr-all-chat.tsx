import BlurOverlay from "@/components/blur-overlay";
import ReduxProvider from "@/redux/redux-provider";
import styleText from "data-text:@/style.css";
import type { PlasmoCSConfig, PlasmoCSUIProps, PlasmoGetInlineAnchorList, PlasmoGetStyle } from "plasmo";

export const config: PlasmoCSConfig = {
  matches: ["https://*.messenger.com/*"],
};

export const getInlineAnchorList: PlasmoGetInlineAnchorList = async () => {
  const anchors = document.querySelectorAll(
    `[role="main"] [role="grid"] [role="gridcell"] [role="presentation"] .x78zum5.xh8yej3[role="none"],
    [role="main"] [role="grid"] [role="gridcell"] [role="button"] .x193iq5w.x1n2onr6.x1vjfegm,
    [role="main"] [role="grid"] [role="gridcell"] [role="presentation"] .x1n2onr6.x1vjfegm [dir="auto"] img`,
  );

  /**
   * 1st: Conversation Main Text Chat
   * 2nd: Conversation Reply Text Chat
   * 3rd: Conversation Emoji Chat
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

const AllChatBlurWrapper = ({ anchor }: PlasmoCSUIProps) => {
  return (
    <ReduxProvider>
      <BlurOverlay anchor={anchor} platform="messenger" feature="chatMessages" />
    </ReduxProvider>
  );
};

export default AllChatBlurWrapper;
