"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import Link from "next/link";

import { IconHome, IconMessage, IconUser, IconCode } from "@tabler/icons-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";

const NavbarMenu: React.FC = () => {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
};
export default NavbarMenu;

function Navbar({ className }: { className?: string }) {
  const [nctive, setnctive] = useState<string | null>(null);
  const [active, setActive] = useState<string | null>(null);

  const formSchema = z.object({
    password: z.string(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values); // prints this in browser console
    setnctive(values.password);
  }

  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="px-2">
              <Avatar className="w-7 h-7">
                <AvatarImage src="/profile.png" />
                <AvatarFallback>JL</AvatarFallback>
              </Avatar>
            </Button>
          </DialogTrigger>

          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Welcome {nctive}</DialogTitle>
              <DialogDescription>
                Entry exclusive to the creator
              </DialogDescription>
            </DialogHeader>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Password" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <DialogFooter>
                  <Button type="submit">Submit</Button>
                </DialogFooter>
              </form>
            </Form>
          </DialogContent>
        </Dialog>

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
              src="/linkr.png"
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
