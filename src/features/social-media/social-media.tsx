//@ts-nocheck
import settings from "./../../assets/icons/settings.svg"

const SocialMedia = ({
  icon,
  name
}:{
  icon: any
  name: string
}) => {
  return (
    <div className="py-5">
      <div className="flex justify-between">
        <div className="flex gap-x-3 items-center">
          <img src={icon} alt="Messenger" className="w-4 h-4" />
          <h4 className="text-base font-inter font-semibold">{name}</h4>
        </div>
        <label for="messenger">
          <input id="messenger" type="checkbox" />
        </label>
      </div>
      <p className="text-dark/80 text-xs mt-2 max-w-64 font-inter">
        Manage Profile Pictures, Profile Name Chat & Media Privacy.
      </p>
      <button className="bg-primary-50 px-2 py-2 rounded-lg text-grey-dark flex gap-x-2 items-center mt-4">
        <span className="text-xs font-inter font-medium">Manage Settings</span>
        <span>
          <img src={settings} alt="Settings" className="w-4 h-4" />
        </span>
      </button>
    </div>
  )
}

export default SocialMedia
