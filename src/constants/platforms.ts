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
        key: "profileName",
        name: "User Profile Name",
      },
      {
        key: "profilePicture",
        name: "User/Group Profile Picture",
      },
      {
        key: "lastMessagePreview",
        name: "Last Message Preview",
      },
      {
        key: "mediaPreview",
        name: "Media Preview",
      },
      {
        key: "chatMessages",
        name: "All message in chat",
      },
      {
        key: "messageTime",
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
