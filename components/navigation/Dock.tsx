"use client";

import React from "react";
import { FloatingDock } from "../ui/floating-dock";
import {
  IconBrandDiscord,
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconFileDescription,
  IconUser,
  IconLink,
} from "@tabler/icons-react";
// import { LinkPreview } from "@/components/ui/link-preview";

const Dock: React.FC = () => {
  const links = [
    {
      title: "Linkr",
      icon: (
        <IconLink className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://linkrapp.com/",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/skxvtchy",
    },
    {
      title: "Email",
      icon: (
        <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "mailto:Jamesli784@gmail.com",
    },
    {
      title: "Linkedin",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/jamesli784/",
    },
    {
      title: "Resume",
      icon: (
        <IconFileDescription className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/resume.pdf",
    },
  ];
  return (
    <div className="fixed bottom-4 right-4">
      <FloatingDock
        // mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
};

export default Dock;
