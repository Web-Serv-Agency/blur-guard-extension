import logo from "@/assets/logo/blur-guard.svg";
import messenger from "@/assets/platforms/messenger.png";
import telegram from "@/assets/platforms/telegram.png";
import whatsapp from "@/assets/platforms/whatsapp.png";
import SocialMedia from "@/features/social-media/social-media";

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
        <div className="rounded-xl border border-grey-light bg-primary-50/50 p-2 px-5 divide-y divide-grey-light">
          <SocialMedia icon={messenger} name="Messenger" index={0} />
          <SocialMedia icon={whatsapp} name="WhatsApp" index={1} />
          <SocialMedia icon={telegram} name="Telegram" index={2} />
        </div>
      </div>
    </div>
  );
};

export default DefaultPopup;
