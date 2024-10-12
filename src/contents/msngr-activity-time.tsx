import BlurOverlay from "@/components/blur-overlay";
import ReduxProvider from "@/redux/redux-provider";
import type { PlasmoCSConfig, PlasmoCSUIProps, PlasmoGetInlineAnchorList } from "plasmo";

export const config: PlasmoCSConfig = {
  matches: ["https://*.messenger.com/*"],
};

/**
 * 1. active time status at top chat header
 * 2. message time at inside a chat
 * 3. active time status at right side menu of the chat
 * */

export const getInlineAnchorList: PlasmoGetInlineAnchorList = async () => {
  const anchors = document.querySelectorAll(
    `[role="main"] div.html-div.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.xexx8yu.x4uap5.x18d9i69.xkhd6sd.x6s0dn4.x78zum5.x193iq5w, [role="main"] [role="grid"] [role="gridcell"] [role="presentation"] h3[dir="auto"], [role="main"] div.x9f619.x1n2onr6.x1ja2u2z.x78zum5.xdt5ytf.x2lah0s.x193iq5w.x6s0dn4 > div.x9f619.x1n2onr6.x1ja2u2z.x78zum5.xdt5ytf.x2lah0s.x193iq5w.x1y1aw1k span[dir="auto"]`,
  );

  const elements = Array.from(anchors);

  return elements.map((element) => ({
    element,
    insertPosition: "afterend",
  }));
};

const ProfileBlurWrapper = ({ anchor }: PlasmoCSUIProps) => {
  return (
    <ReduxProvider>
      <BlurOverlay anchor={anchor} platform="messenger" feature="activityTime" />
    </ReduxProvider>
  );
};

export default ProfileBlurWrapper;
