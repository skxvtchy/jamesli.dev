"use client";

import * as React from "react";
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from "lucide-react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "../ui/command";

import { IconSearch } from "@tabler/icons-react";

import { Button } from "../ui/button";

const Search = () => {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const handleClick = () => {
    setOpen((open) => !open);
  };

  return (
    <>
      <Button
        className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 hover:border-gray-400 w-64 flex justify-between items-center px-1 h-8"
        onClick={handleClick}
      >
        <div className="flex items-center">
          <IconSearch className="mx-1 h-4 w-4 text-gray-400" />
          <p className="text-xs text-gray-400 font-roboto">Press command + k</p>
        </div>
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-gray-200 px-1.5 font-mono text-[10px] font-medium text-gray-700 opacity-100">
          <span className="text-xs">⌘</span>k
        </kbd>
      </Button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem disabled>
              <Smile className="mr-2 h-4 w-4" />
              <span>There's nothing to search. items don't work</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem disabled>
              <CreditCard className="mr-2 h-4 w-4" />
              <span>Billing</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default Search;
