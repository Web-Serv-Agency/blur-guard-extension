import arrowLeft from "@/assets/icons/arrow-left.svg";
import logo from "@/assets/logo/blur-guard.svg";
import SocialMedia from "@/components/social-media";
import SocialMediaFeatures from "@/components/social-media-features";
import { PLATFORMS } from "@/constants/platforms";
import { useState } from "react";

const DefaultPopup = () => {
  const [activePlatform, setActivePlatform] = useState(0);
  const activeSocialMedia = PLATFORMS[activePlatform];

  return (
    <div className="w-[400px] !border-transparent">
      {/* Header Phase */}
      <div className="py-4 bg-opacity-60 bg-primary-50 px-4">
        {activePlatform > -1 ? (
          <div className={"flex gap-x-16 items-center"}>
            <button className="flex items-center cursor-pointer" onClick={() => setActivePlatform(-1)}>
              <img src={arrowLeft} alt="Arrow Left" className="w-6 h-6" />
              <h3 className="text-primary font-bold text-base">Back</h3>
            </button>
            <div className="flex gap-x-2 items-center">
              <img src={logo} alt="Blur Guard" className="w-7 h-7" />
              <h3 className="text-primary font-bold text-base">{activeSocialMedia.name}</h3>
            </div>
          </div>
        ) : (
          <div className={"flex gap-x-4 items-center"}>
            <img src={logo} alt="Blur Guard" className="w-9 h-9" />
            <h3 className="text-primary font-bold text-xl">Blur Guard</h3>
          </div>
        )}
      </div>
      {/* Body Phase */}
      <div className="p-4">
        <div className={"rounded-xl border border-grey-light bg-primary-50/50 p-2 px-4 divide-y divide-grey-light"}>
          {activePlatform > -1
            ? activeSocialMedia?.features.map((feature, i) => (
                <SocialMediaFeatures
                  key={feature.key}
                  feature={feature}
                  index={i}
                  platformName={activeSocialMedia.key}
                />
              ))
            : PLATFORMS?.map((platform, i) => (
                <SocialMedia setActivePlatform={setActivePlatform} key={platform.key} platform={platform} index={i} />
              ))}
        </div>
      </div>
    </div>
  );
};

export default DefaultPopup;
