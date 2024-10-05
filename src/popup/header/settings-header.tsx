import arrowLeft from "@/assets/icons/arrow-left.svg";
import logo from "@/assets/logo/blur-guard.svg";
import type { IPlatform } from "@/constants/platforms";

type SettingsHeaderProps = {
  setActivePlatform: (platform: string | null) => void;
  activeSocialMedia: IPlatform;
};

const SettingsHeader = ({ setActivePlatform, activeSocialMedia }: SettingsHeaderProps) => {
  return (
    <div className="py-4 bg-opacity-60 bg-primary-50 px-4">
      <div className={"flex gap-x-16 items-center"}>
        <button className="flex items-center cursor-pointer" onClick={() => setActivePlatform(null)}>
          <img src={arrowLeft} alt="Arrow Left" className="w-6 h-6" />
          <h3 className="text-primary font-bold text-base">Back</h3>
        </button>
        <div className="flex gap-x-2 items-center">
          <img src={logo} alt="Blur Guard" className="w-7 h-7" />
          <h3 className="text-primary font-bold text-base">{activeSocialMedia.name}</h3>
        </div>
      </div>
    </div>
  );
};

export default SettingsHeader;
