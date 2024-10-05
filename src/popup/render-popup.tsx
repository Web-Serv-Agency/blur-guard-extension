import { PLATFORMS } from "@/constants/platforms";
import DefaultPopup from "@/popup/default-popup";
import PlatformSettingsPopup from "@/popup/platform-settings-popup";
import { useState } from "react";

const RenderPopup = () => {
  const [activePlatform, setActivePlatform] = useState<string | null>(null);
  const activeSocialMedia = PLATFORMS.find((platform) => platform.key === activePlatform);

  return (
    <>
      {activeSocialMedia ? (
        <PlatformSettingsPopup setActivePlatform={setActivePlatform} activeSocialMedia={activeSocialMedia} />
      ) : (
        <DefaultPopup setActivePlatform={setActivePlatform} />
      )}
    </>
  );
};

export default RenderPopup;
