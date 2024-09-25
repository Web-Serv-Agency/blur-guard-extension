import logo from "@/assets/logo/blur-guard.svg";
import SocialMedia from "@/components/social-media";
import { PLATFORMS } from "@/constants/platforms";

const DefaultPopup = () => {
  return (
    <div className="w-[400px] !border-transparent">
      {/* Header Phase */}
      <div className="flex gap-x-4 items-center py-2 bg-opacity-60 bg-primary-50 px-6">
        <img src={logo} alt="Blur Guard" className="w-9 h-9" />
        <h3 className="text-primary font-bold text-xl">Blur Guard</h3>
      </div>
      {/* Body Phase */}
      <div className="p-4">
        <div className="rounded-xl border border-grey-light bg-primary-50/50 p-2 px-4 divide-y divide-grey-light">
          {PLATFORMS?.map((platform, i) => <SocialMedia key={platform.key} platform={platform} index={i} />)}
        </div>
      </div>
    </div>
  );
};

export default DefaultPopup;
