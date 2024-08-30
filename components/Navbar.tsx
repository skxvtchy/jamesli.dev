"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

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
        {/* <Link href="/web-dev"></Link> */}
        <MenuItem setActive={setActive} active={active} item="Experience">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/interface-design">React</HoveredLink>
            <HoveredLink href="/seo">AWS</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Projects">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="LINKR"
              href="https://linkrapp.com/"
              src="/apex.png"
              description="Social app built on React Native, Javascript, with AWS and graphql backend"
            />
            <ProductItem
              title="This website"
              href="https://tailwindmasterkit.com"
              src="/apex.png"
              description="Production ready Tailwind css components for your next project"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contact">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Email</HoveredLink>
            <HoveredLink href="/team">Linkedin</HoveredLink>
            <HoveredLink href="/individual">Discord</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
