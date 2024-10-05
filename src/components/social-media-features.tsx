import SwitchButton from "@/components/switch-button";
import type { IFeature } from "@/constants/platforms";
import { toggleBlurSetting } from "@/features/blur/blur-slice";
import { store, useAppSelector } from "@/redux/store";

type IProps = {
  index: number;
  feature: IFeature;
  platformName: string;
};

const SocialMediaFeatures = ({ index, feature, platformName }: IProps) => {
  const { key, name } = feature;
  const socialMediaPlatform = useAppSelector((state) => state.blur[platformName]);

  const handleToggle = (setting: string) => {
    store.dispatch(toggleBlurSetting({ platform: platformName, setting }));
  };

  return (
    <div className="py-5 fade-in" style={{ animationDelay: `${index * 100}ms` }}>
      <div className="flex justify-between">
        <div className="flex gap-x-3 items-center">
          <h4 className="text-base font-inter font-semibold leading-none text-grey-dark">{name}</h4>
        </div>
        <SwitchButton
          disabled={feature.disabled}
          checked={socialMediaPlatform[key]}
          onChange={() => {
            handleToggle(key);
          }}
        />
      </div>
    </div>
  );
};

export default SocialMediaFeatures;
