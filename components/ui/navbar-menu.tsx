"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/legacy/image";

import CommandDialog from "@/components/CommandDialog";
import { IconSearch } from "@tabler/icons-react";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  icon,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  icon?: JSX.Element;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative ">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-gray-700 hover:text-gray-900 dark:text-white text-sm"
      >
        <span className="block sm:hidden">{icon}</span>
        <span className="hidden sm:block">{item}</span>
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active"
                className="bg-white dark:bg-black backdrop-blur-md rounded-2xl overflow-hidden border border-gray-200 dark:border-white/[0.2] shadow-xl"
              >
                <motion.div layout className="w-max h-full p-1">
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-50 backdrop-blur-md border-b border-gray-200 shadow-input flex justify-between items-center px-4"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between h-14 w-full">
        <div className="flex gap-10 items-center">{children}</div>

        {/* <span className="block sm:hidden">
          <IconSearch className="h-4 w-4 text-gray-600" />
        </span> */}
        <span className="hidden sm:block">
          <CommandDialog />
        </span>
      </div>
    </nav>
  );
};
export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link href={href} className="flex space-x-2">
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-base font-500 mb-1 text-gray-900 dark:text-white">
          {title}
        </h4>
        <p className="text-neutral-700 text-xs max-w-[5rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <Link
      {...rest}
      className="text-gray-700 dark:text-neutral-200 hover:text-gray-900"
    >
      {children}
    </Link>
  );
};
