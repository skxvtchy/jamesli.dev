"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { IconHome, IconMessage, IconUser, IconCode } from "@tabler/icons-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const NavbarMenu: React.FC = () => {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
};
export default NavbarMenu;

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Avatar className="w-7 h-7">
          <AvatarImage src="/profile.png" />
          <AvatarFallback>JL</AvatarFallback>
        </Avatar>

        {/* Link will work if menu item clicked */}
        {/* <Link href="/web-dev">
          <MenuItem
            setActive={setActive}
            active={active}
            item="Experience"
            icon={
              <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />
            }
          >
            <div className="flex flex-col space-y-4 text-sm p-2">
              <HoveredLink href="">I need some :(</HoveredLink>
            </div>
          </MenuItem>
        </Link> */}

        <MenuItem
          setActive={setActive}
          active={active}
          item="Experience"
          icon={
            <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />
          }
        >
          <div className="flex flex-col space-y-4 text-sm p-2">
            <HoveredLink href="#">I need some :(</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem
          setActive={setActive}
          active={active}
          item="Projects"
          icon={
            <IconCode className="h-4 w-4 text-neutral-500 dark:text-white" />
          }
        >
          <div className="  text-sm grid grid-cols-1 gap-10 p-4">
            {/* use this div for 2 columns of items */}
            {/* <div className="  text-sm grid grid-cols-2 gap-10 p-4"> */}
            <ProductItem
              title="LINKR"
              // href="https://linkrapp.com/"
              href="#"
              src="/apex.png"
              description="Wasted too many hours... scroll down to see it"
            />
          </div>
        </MenuItem>
        <MenuItem
          setActive={setActive}
          active={active}
          item="Contact"
          icon={
            <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />
          }
        >
          <div className="flex flex-col space-y-4 text-sm  p-2">
            <HoveredLink href="mailto:Jamesli784@gmail.com">Email</HoveredLink>
            <HoveredLink href="https://www.linkedin.com/in/jamesli784/">
              Linkedin
            </HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
