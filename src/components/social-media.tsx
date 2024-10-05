import settings from "@/assets/icons/settings.svg";
import SwitchButton from "@/components/switch-button";
import type { IPlatform } from "@/constants/platforms";
import { toggleSocialMedia } from "@/features/filter/filter-slice";
import { store, useAppSelector } from "@/redux/store";

type IProps = {
  index: number;
  platform: IPlatform;
  setActivePlatform: (value: number) => void;
};

const SocialMedia = ({ index, platform, setActivePlatform }: IProps) => {
  const { icon, name, description, key } = platform;

  const socialMediaPlatform = useAppSelector((state) => state.filter.socialMedia);

  const handleToggle = () => {
    store.dispatch(toggleSocialMedia({ platform: key }));
  };

  return (
    <div className="py-5 fade-in" style={{ animationDelay: `${index * 100}ms` }}>
      <div className="flex justify-between">
        <div className="flex gap-x-3 items-center">
          <img src={icon} alt={name} className="w-4 h-4" />
          <h4 className="text-base font-semibold leading-none">{name}</h4>
        </div>
        <SwitchButton
          checked={socialMediaPlatform[key]}
          onChange={() => {
            handleToggle();
          }}
        />
      </div>
      <p className="text-dark/80 text-xs mt-2 max-w-64">{description}</p>
      <button className="bg-primary-50 px-3 py-1.5 rounded-lg text-grey-dark flex gap-x-2 items-center mt-3 font-medium hover:bg-primary-100 duration transition-all" onClick={() => setActivePlatform(index)}>
        <span className="text-xs font-medium">Manage Settings</span>
        <span>
          <img src={settings} alt="Settings" className="block w-4 h-4" />
        </span>
      </button>
    </div>
  );
};

export default SocialMedia;
