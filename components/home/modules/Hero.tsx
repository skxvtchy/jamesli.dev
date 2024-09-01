"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { FlipWords } from "../../ui/flip-words";
import { Cover } from "../../ui/cover";
import { CardBody, CardContainer, CardItem } from "../../ui/3d-card";
import { TextHoverEffect } from "../../ui/text-hover-effect";
import { TextGenerateEffect } from "../../ui/text-generate-effect";

const Hero = () => {
  const hello = [
    "Hello",
    "你好",
    "Hola",
    "שלום",
    "Ciáo",
    "こんにちは",
    "مرحبا ",
    "Hej",
    "안녕하세요",
    " नमस्ते",
    "Olá",
    "สวัสดี",
    "Здравствуйте",
    "Hallo",
    "Xin chào",
    "Cześć",
    "Γειά σου",
  ];

  const dumbQuoteImade = `Only when you suffer can you appreciate the mundane`;
  return (
    <div className="min-h-[30vh] pt-6 ">
      <div className="pb-8 lg:pb-10 flex justify-center text-2xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        <FlipWords words={hello} />
      </div>
      <div className=" mb-12 flex flex-col md:flex-row items-center justify-center w-100">
        {/* <div>
          <h1 className=" sm:mb-8 text-center text-4xl md:text-4xl font-semibold max-w-none sm:w-96 z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
            <br /> I'm <Cover>James</Cover> <br />
            <br />
            ヽ༼ ຈل͜ຈ༼ ▀̿̿Ĺ̯̿̿▀̿ ̿༽Ɵ͆ل͜Ɵ͆ ༽ﾉ
            <TextGenerateEffect words={dumbQuoteImade} />
            <TextHoverEffect text="v1.0.0" />
          </h1>
        </div> */}

        <CardContainer className="inter-var px-6">
          <CardBody className="bg-gray-50 group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Ascii art via my GitHub
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-800 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Hover here to see a 3d effect on the copy and pasted art
              <br />
              <span className="font-roboto text-gray-400">
                * credits at the bottom right
              </span>
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/gitArt.png"
                height="1000"
                width="1000"
                className="h-100 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-12">
              <CardItem
                translateZ={20}
                as={Link}
                href="https://www.asciiart.eu/"
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                Ascii Art Credits →
              </CardItem>

              <CardItem
                translateZ={20}
                as={Link}
                href="https://github.com/skxvtchy"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                @skxvtchy
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>
    </div>
  );
};

export default Hero;
