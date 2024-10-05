import BlurOverlay from "@/components/blur-overlay";
import ReduxProvider from "@/redux/redux-provider";
import styleText from "data-text:@/style.css";
import type { PlasmoCSConfig, PlasmoCSUIProps, PlasmoGetInlineAnchorList, PlasmoGetStyle } from "plasmo";

export const config: PlasmoCSConfig = {
  matches: ["https://*.messenger.com/*"],
};

export const getInlineAnchorList: PlasmoGetInlineAnchorList = async () => {
  const anchors = document.querySelectorAll(
    `[role="row"] [role="gridcell"] div.html-div.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.xexx8yu.x4uap5.x18d9i69.xkhd6sd > div.html-div.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.xexx8yu.x4uap5.x18d9i69.xkhd6sd.x6s0dn4.xi81zsa.x78zum5.x1hshjfz`,
  );

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

const ProfileBlurWrapper = ({ anchor }: PlasmoCSUIProps) => {
  return (
    <ReduxProvider>
      <BlurOverlay anchor={anchor} platform="messenger" feature="lastMessagePreview" />
    </ReduxProvider>
  );
};

export default ProfileBlurWrapper;
