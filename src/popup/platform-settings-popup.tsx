import SocialMediaFeatures from "@/components/social-media-features";
import type { IFeature, IPlatform } from "@/constants/platforms";
import SettingsHeader from "@/popup/header/settings-header";

type PlatformSettingsPopupProps = {
  setActivePlatform: (platform: string | null) => void;
  activeSocialMedia: IPlatform;
};

const PlatformSettingsPopup = ({ setActivePlatform, activeSocialMedia }: PlatformSettingsPopupProps) => {
  return (
    <div className="w-[400px] !border-transparent">
      {/* Header Phase */}
      <SettingsHeader setActivePlatform={setActivePlatform} activeSocialMedia={activeSocialMedia} />

      {/* Body Phase */}
      <div className="p-4">
        <div className={"rounded-xl border border-grey-light bg-primary-50/50 p-2 px-4 divide-y divide-grey-light"}>
          {activeSocialMedia?.features.map((feature: IFeature, i: number) => (
            <SocialMediaFeatures key={feature.key} feature={feature} index={i} platformName={activeSocialMedia.key} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlatformSettingsPopup;
