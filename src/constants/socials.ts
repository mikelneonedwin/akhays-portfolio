import { Facebook, Github, Linkedin, Mail, Phone, Twitter } from "lucide-react";
import { RiDiscordLine } from "react-icons/ri";
import { RiTelegram2Line } from "react-icons/ri";
import {
  DISCORD_URL,
  EMAIL_URL,
  FACEBOOK_URL,
  GITHUB_URL,
  LINKEDIN_URL,
  PHONE_URL,
  TELEGRAM_URL,
  X_URL,
} from "./globals";

export const socials = [
  {
    icon: Github,
    href: GITHUB_URL,
    name: "GitHub",
  },
  {
    icon: Facebook,
    href: FACEBOOK_URL,
    name: "Facebook",
  },
  {
    icon: Twitter,
    href: X_URL,
    name: "X (formerly Twitter)",
  },
  {
    icon: Linkedin,
    href: LINKEDIN_URL,
    name: "LinkedIn",
  },
  {
    icon: Mail,
    href: EMAIL_URL,
    name: "Email",
  },
  {
    icon: Phone,
    href: PHONE_URL,
    name: "Phone",
  },
  {
    icon: RiDiscordLine,
    href: DISCORD_URL,
  },
  {
    icon: RiTelegram2Line,
    href: TELEGRAM_URL,
  },
];
