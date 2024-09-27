import BlurOverlay from "@/components/blur-overlay";
import ReduxProvider from "@/redux/redux-provider";
import styleText from "data-text:@/style.css";
import type { PlasmoCSConfig, PlasmoCSUIProps, PlasmoGetInlineAnchorList, PlasmoGetStyle } from "plasmo";

export const config: PlasmoCSConfig = {
  matches: ["https://*.messenger.com/*"],
};

export const getInlineAnchorList: PlasmoGetInlineAnchorList = async () => {
  const anchors = document.querySelectorAll(
    `[role="row"] [role="gridcell"] [data-visualcompletion="ignore-dynamic"] .x9f619.x1n2onr6.x1ja2u2z, [role="main"] [role="grid"] [role="gridcell"] [role="presentation"] .xgd8bvy img, [role="row"] [role="gridcell"] [role="img"], [role="main"] [data-visualcompletion="ignore-dynamic"]`,
  );

  /**
   * 1st: Left Navigation Profile Picture
   * 2nd: Conversation User Profile Picture
   * 3rd: community chat profile picture
   * 4th: Conversation User/Group Profile Picture
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

const ProfileBlurWrapper = ({ anchor }: PlasmoCSUIProps) => {
  return (
    <ReduxProvider>
      <BlurOverlay anchor={anchor} />
    </ReduxProvider>
  );
};

export default ProfileBlurWrapper;
