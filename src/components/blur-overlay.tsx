import { selectBlurSettingsByPlatform } from "@/features/blur/blur-slice";
import { useAppSelector } from "@/redux/store";
import type { PlasmoCSUIAnchor } from "plasmo";
import { useEffect } from "react";

type IProps = {
  anchor: PlasmoCSUIAnchor;
  platform: string;
  feature: string;
};

const BlurOverlay = ({ anchor, platform, feature }: IProps) => {
  const element = anchor?.element as HTMLElement;
  const { socialMedia } = useAppSelector((state) => state.filter);
  const blurSettings = useAppSelector(selectBlurSettingsByPlatform(platform));
  const isEnabled = blurSettings[feature] && socialMedia[platform];

  useEffect(() => {
    // TODO: Apply condition here
    element.style.filter = isEnabled ? `blur(7px)` : "none";

    // Add hover event listeners
    const handleMouseEnter = () => {
      element.style.filter = "none"; // Remove blur on hover
    };

    const handleMouseLeave = () => {
      element.style.filter = isEnabled ? `blur(7px)` : "none"; // Reapply blur when not hovering
    };

    element.addEventListener("mouseenter", handleMouseEnter);
    element.addEventListener("mouseleave", handleMouseLeave);

    // Cleanup event listeners when component unmounts or count changes
    return () => {
      element.removeEventListener("mouseenter", handleMouseEnter);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isEnabled]);

  return <></>;
};

export default BlurOverlay;
