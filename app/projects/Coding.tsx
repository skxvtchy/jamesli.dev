import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "../../components/ui/bento-grid";
import Image from "next/image";

import { motion } from "framer-motion";
import { LinkPreview } from "@/components/ui/link-preview";
import { TextGenerateEffect } from "../../components/ui/text-generate-effect";

import {
  IconCode,
  IconHtml,
  IconBrandPython,
  IconBrandTypescript,
  IconBrandNodejs,
  IconBrandReact,
  IconBrandJavascript,
  IconBrandCss3,
  IconBrandMongodb,
  IconBrandDocker,
  IconFileTypeJsx,
  IconAi,
  IconApi,
  IconDatabase,
  IconFileTypeJs,
  IconBrandGraphql,
  IconBrandAws,
  IconBrandTrello,
  IconNavigation,
  IconFlame,
} from "@tabler/icons-react";

const Coding: React.FC = () => {
  const word = `Featured`;
  const ai_projects = `AI/ML`;

  return (
    <div className="pb-8 px-4">
      <div className="flex items-center justify-center py-8">
        <div className="flex items-center space-x-1">
          {/* <IconCode className="h-7 w-7" /> */}
          <TextGenerateEffect className="font-normal" words={word} />
        </div>
      </div>

      <BentoGrid className="max-w-4xl mx-auto">
        {highlighted.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            link={item.link}
            className={i === 0 || i === 5 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>

      <div className="flex items-center justify-center pt-24 pb-8">
        <div className="flex items-center space-x-1">
          {/* <IconCode className="h-7 w-7" /> */}
          <TextGenerateEffect className="font-normal" words={ai_projects} />
        </div>
      </div>

      <BentoGrid className="max-w-4xl mx-auto">
        {ai.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            link={item.link}
            className={i === 0 || i === 5 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </div>
  );
};

export default Coding;

const Skeleton: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    {children}
  </div>
);

const highlighted = [
  {
    title: "LINKR - Mobile iOS App",
    link: "https://linkrapp.com/",
    description:
      "User registration with AWS Cognito and SES, DynamoDB and S3 accessed via GraphQL for real-time messaging through subscriptions, across the Expo-based application.",
    header: (
      <Skeleton>
        <Image
          src="/project_images/linkr.png"
          alt="Project 4 Image"
          width={600}
          height={400}
          className="rounded-xl object-cover"
        />
      </Skeleton>
    ),
    icon: (
      <div className="flex space-x-2">
        <IconBrandReact className="h-5 w-5 text-neutral-500" />
        <IconNavigation className="h-5 w-5 text-neutral-500" />
        <IconFileTypeJsx className="h-5 w-5 text-neutral-500" />
        <IconBrandJavascript className="h-5 w-5 text-neutral-500" />
        <IconBrandCss3 className="h-5 w-5 text-neutral-500" />
        <IconBrandAws className="h-5 w-5 text-neutral-500" />
        <IconBrandGraphql className="h-5 w-5 text-neutral-500" />
        <IconBrandNodejs className="h-5 w-5 text-neutral-500" />
      </div>
    ),
  },
  {
    title: "Chat Messaging Webapp",
    link: "https://www.linkedin.com/company/etech-7/jobs/",
    description:
      "WebSockets, JWT authentication, Data buffering and Docker containerization.",
    header: (
      <Skeleton>
        <Image
          src="/project_images/cse312.png"
          alt="Project 4 Image"
          width={600}
          height={400}
          className="rounded-xl object-cover"
        />
      </Skeleton>
    ),
    icon: (
      <div className="flex space-x-2">
        <IconHtml className="h-5 w-5 text-neutral-500" />
        <IconBrandJavascript className="h-5 w-5 text-neutral-500" />
        <IconBrandCss3 className="h-5 w-5 text-neutral-500" />
        <IconBrandPython className="h-5 w-5 text-neutral-500" />
        <IconBrandMongodb className="h-5 w-5 text-neutral-500" />
        <IconBrandDocker className="h-5 w-5 text-neutral-500" />
      </div>
    ),
  },
  {
    title: "Saute - Recipe WebApp",
    link: "https://webdev.cse.buffalo.edu/hci/teams/ben10",
    description:
      "REST API endpoints with Swagger API, Dynamic components, and Task management Trello",
    header: (
      <Skeleton>
        <Image
          src="/project_images/saute.png"
          alt="Project 4 Image"
          width={600}
          height={400}
          className="rounded-xl object-cover"
        />
      </Skeleton>
    ),
    icon: (
      <div className="flex space-x-2">
        <IconBrandReact className="h-5 w-5 text-neutral-500" />
        <IconFileTypeJsx className="h-5 w-5 text-neutral-500" />
        <IconBrandCss3 className="h-5 w-5 text-neutral-500" />
        <IconApi className="h-5 w-5 text-neutral-500" />
        <IconBrandNodejs className="h-5 w-5 text-neutral-500" />
        <IconBrandTrello className="h-5 w-5 text-neutral-500" />
      </div>
    ),
  },
  {
    title: "Simple Blockchain",
    link: "",
    description:
      "PostgreSQL for task storage, Express.js to handle API requests, Dynamic frontend.",
    header: (
      <Skeleton>
        <Image
          src="/project_images/blockchain.png"
          alt="Project 4 Image"
          width={600}
          height={400}
          className="rounded-xl object-cover"
        />
      </Skeleton>
    ),
    icon: (
      <div className="flex space-x-2">
        <IconBrandReact className="h-5 w-5 text-neutral-500" />
        <IconBrandTypescript className="h-5 w-5 text-neutral-500" />
        <IconBrandNodejs className="h-5 w-5 text-neutral-500" />
      </div>
    ),
  },
  {
    title: "Pern Stack - Todo List",
    link: "https://github.com/skxvtchy/chat-messaging",
    description:
      "PostgreSQL for task storage, Express.js to handle API requests, Dynamic frontend.",
    header: (
      <Skeleton>
        <Image
          src="/project_images/pern.png"
          alt="Project 4 Image"
          width={600}
          height={400}
          className="rounded-xl object-cover"
        />
      </Skeleton>
    ),
    icon: (
      <div className="flex space-x-2">
        <IconBrandReact className="h-5 w-5 text-neutral-500" />
        <IconFileTypeJs className="h-5 w-5 text-neutral-500" />
        <IconFileTypeJsx className="h-5 w-5 text-neutral-500" />
        <IconBrandCss3 className="h-5 w-5 text-neutral-500" />
        <IconDatabase className="h-5 w-5 text-neutral-500" />
        <IconBrandNodejs className="h-5 w-5 text-neutral-500" />
      </div>
    ),
  },
];

const ai = [
  {
    title: "Sentiment Analyis",
    link: "https://github.com/skxvtchy/sentiment_analysis",
    description:
      "ProsusAI/finbert model with pytorch to create locally hosted sentiment analysis with fastApi",
    header: (
      <Skeleton>
        <Image
          src="/project_images/sentiment_ai.png"
          alt="Project 4 Image"
          width={600}
          height={400}
          className="rounded-xl object-cover"
        />
      </Skeleton>
    ),
    icon: (
      <div className="flex space-x-2">
        <IconBrandPython className="h-5 w-5 text-neutral-500" />
        <IconFlame className="h-5 w-5 text-neutral-500" />
        <IconApi className="h-5 w-5 text-neutral-500" />
        <IconAi className="h-5 w-5 text-neutral-500" />
      </div>
    ),
  },
  {
    title: "Synthetic Media Generation",
    link: "https://github.com/skxvtchy/synthetic_media_generation",
    description:
      "Using insight face's pre-trained model to face swap people's face in an image",
    header: (
      <Skeleton>
        <Image
          src="/project_images/synthetic.png"
          alt="Project 4 Image"
          width={600}
          height={400}
          className="rounded-xl object-cover"
        />
      </Skeleton>
    ),
    icon: (
      <div className="flex space-x-2">
        <IconBrandPython className="h-5 w-5 text-neutral-500" />
        <IconFlame className="h-5 w-5 text-neutral-500" />
        <IconAi className="h-5 w-5 text-neutral-500" />
      </div>
    ),
  },
];
