import settings from "@/assets/icons/settings.svg";
import SwitchButton from "@/components/switch-button";
import type { IPlatform } from "@/constants/platforms";
import { useState } from "react";

type IProps = {
  index: number;
  platform: IPlatform;
};

const SocialMedia = ({ index, platform }: IProps) => {
  const { icon, name, description } = platform;
  const [checked, setChecked] = useState(true);

  return (
    <div className="py-5 fade-in" style={{ animationDelay: `${index * 100}ms` }}>
      <div className="flex justify-between">
        <div className="flex gap-x-3 items-center">
          <img src={icon} alt={name} className="w-4 h-4" />
          <h4 className="text-base font-semibold leading-none">{name}</h4>
        </div>
        <SwitchButton checked={checked} onChange={() => setChecked((prev) => !prev)} />
      </div>
      <p className="text-dark/80 text-xs mt-2 max-w-64">{description}</p>
      <button className="bg-primary-50 px-3 py-1.5 rounded-lg text-grey-dark flex gap-x-2 items-center mt-3 font-medium hover:bg-primary-100 duration transition-all">
        <span className="text-xs font-medium">Manage Settings</span>
        <span>
          <img src={settings} alt="Settings" className="block w-4 h-4" />
        </span>
      </button>
    </div>
  );
};

export default SocialMedia;
