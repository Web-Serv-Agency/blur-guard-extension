import "@/style.css"

import ReduxProvider from "./redux/redux-provider"

import logo from "./assets/logo/blur-guard.svg";
import SocialMedia from "./features/social-media/social-media";

import messenger from "./assets/platforms/messenger.png"
import whatsapp from "./assets/platforms/whatsapp.png"
import telegram from "./assets/platforms/telegram.png"


function IndexPopup() {
  return (
    <ReduxProvider>
     <div className="w-[400px] !border-transparent">
      {/* Header Phase */}
      <div className="flex gap-x-4 items-center py-2 bg-opacity-60 bg-[#F0EBF8] px-6">
        <img src={logo} alt="Blur Guard" className="w-9 h-9" />
        <h3 className="text-primary font-bold text-xl">Blur Guard</h3>
      </div>
      {/* Body Phase */}
      <div className="p-4">
        <div className="rounded-xl border border-[#D9D9D9] bg-[#F0EBF880] p-2 px-6 divide-y divide-[#D9D9D9]">
          <SocialMedia icon={messenger} name="Messenger" />
          <SocialMedia icon={whatsapp}  name="WhatsApp" />
          <SocialMedia icon={telegram} name="Telegram" />
        </div>
      </div>
    </div>
    </ReduxProvider>
  )
}

export default IndexPopup
