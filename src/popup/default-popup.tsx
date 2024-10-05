import SocialMedia from "@/components/social-media";
import { PLATFORMS } from "@/constants/platforms";
import DefaultHeader from "@/popup/header/default-header";

type DefaultPopupProps = {
  setActivePlatform: (platform: string | null) => void;
};

const DefaultPopup = ({ setActivePlatform }: DefaultPopupProps) => {
  return (
    <div className="w-[400px] !border-transparent">
      {/* Header Phase */}
      <DefaultHeader />
      {/* Body Phase */}
      <div className="p-4">
        <div className={"rounded-xl border border-grey-light bg-primary-50/50 p-2 px-4 divide-y divide-grey-light"}>
          {PLATFORMS?.map((platform, i) => (
            <SocialMedia setActivePlatform={setActivePlatform} key={platform.key} platform={platform} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DefaultPopup;
