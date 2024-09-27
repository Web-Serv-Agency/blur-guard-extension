import HideElement from "@/components/hide-element";
import ReduxProvider from "@/redux/redux-provider";
import type { PlasmoCSConfig, PlasmoCSUIProps, PlasmoGetInlineAnchorList } from "plasmo";

export const config: PlasmoCSConfig = {
  matches: ["https://*.messenger.com/*"],
};

export const getInlineAnchorList: PlasmoGetInlineAnchorList = async () => {
  const anchors = document.querySelectorAll(
    `[role="row"] [role="gridcell"] span[data-visualcompletion="ignore"].x6s0dn4.xzolkzo.x12go9s9.x1rnf11y.xprq8jg.x9f619.x3nfvp2.xl56j7k.xv9rvxn.x13fuv20.xu3j5b3.x1q0q8m5.x26u7qi.xamhcws.xol2nv.xlxy82.x19p7ews.x1v9usgg.x6jxa94.xwi95zy.x1s86mek.xt1txi7.x1pskuwm, [role="row"] [role="gridcell"] div.x9f619.x1n2onr6.x1ja2u2z.xdt5ytf.x2lah0s.x193iq5w.xeuugli.x78zum5 div.x9f619.xdl72j9.x2lwn1j.x1n2onr6.x1ja2u2z.x6s0dn4.x78zum5.x1q0g3np.xs83m0k.xl56j7k.x15kz4h8 > div.x6s0dn4.x78zum5.xozqiw3, [role="main"] [data-visualcompletion="ignore-dynamic"] span[data-visualcompletion="ignore"]`,
  );

  const elements = Array.from(anchors);

  console.log(elements);

  return elements.map((element) => ({
    element,
    insertPosition: "afterend",
  }));
};

const ProfileBlurWrapper = ({ anchor }: PlasmoCSUIProps) => {
  return (
    <ReduxProvider>
      <HideElement anchor={anchor} />
    </ReduxProvider>
  );
};

export default ProfileBlurWrapper;



