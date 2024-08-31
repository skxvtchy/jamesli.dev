"use client";
import React from "react";
import { Button } from "@/components/ui/button";

import { toast } from "sonner";

import LiveDot from "./ui/live-dot";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { motion } from "framer-motion";

const Home = () => {
  const currentDate = new Date();

  // Format the date to the desired format
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "2-digit",
  });

  // Format the time to the desired format
  const formattedTime = currentDate.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <div className="min-h-[50vh]">
      <div className="flex items-center justify-center pb-10">
        <div className="flex items-center space-x-1">
          <LiveDot />
          <span className="text-lg font-medium">
            Careful, these buttons are live
          </span>
        </div>
      </div>

      <Button
        variant="outline"
        onClick={() =>
          toast("WAIT WHAT TIME IS IT!!!", {
            description: `${formattedDate} at ${formattedTime}`,
            action: {
              label: "Okay",
              onClick: () => console.log("Undo"),
            },
          })
        }
      >
        Show Toast
      </Button>

      <Button className="mx-3">Link to this website</Button>

      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="default" size="default">
            Don't Click
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Not cool dude</AlertDialogTitle>
            <AlertDialogDescription>
              No means no, luckily im lenient.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Also cancel</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default Home;
