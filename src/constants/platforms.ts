import messenger from "@/assets/platforms/messenger.png";
import telegram from "@/assets/platforms/telegram.png";
import whatsapp from "@/assets/platforms/whatsapp.png";

export interface IPlatform {
  key: string;
  name: string;
  icon: string;
  description: string;
  features: IFeature[] | [];
}

export interface IFeature {
  key: string;
  name: string;
}

export const PLATFORMS: IPlatform[] = [
  {
    key: "messenger",
    name: "Messenger",
    icon: messenger,
    description: "Manage Profile Pictures, Profile Name Chat & Media Privacy.",
    features: [
      {
        key: "profile_name",
        name: "User Profile Name",
      },
      {
        key: "profile_picture",
        name: "User/Group Profile Picture",
      },
      {
        key: "last_message_preview",
        name: "Last Message Preview",
      },
      {
        key: "media_preview",
        name: "Media Preview",
      },
      {
        key: "chat_messages",
        name: "All message in chat",
      },
      {
        key: "message_time",
        name: "Message Time",
      },
    ],
  },
  {
    key: "whatsapp",
    name: "WhatsApp",
    icon: whatsapp,
    description: "Manage Profile Pictures, Profile Name Chat & Media Privacy.",
    features: [],
  },
  {
    key: "telegram",
    name: "Telegram",
    icon: telegram,
    description: "Manage Profile Pictures, Profile Name Chat & Media Privacy.",
    features: [],
  },
];
