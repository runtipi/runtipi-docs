import React from "react";
import "./styles.css";

import CopyableCode from "../CopyableCode";
import { Browser } from "../Browser";
import Card from "../Card";
import {
  IconAdjustments,
  IconApps,
  IconBolt,
  IconCircleArrowUp,
  IconDownload,
  IconHandClick,
  IconLockCheck,
  IconMessage,
  IconPuzzle,
  IconRestore,
  IconShoppingBag,
} from "@tabler/icons-react";
import Button from "../Button";
import { DiscordIcon, GitHubIcon } from "nextra/icons";
import GridPattern from "../GridPattern";
import Image from "next/image";
import appstore_image from "../../../../public/images/screenshot.png";

export default async function Home() {
  return (
    <>
      <div className="mx-auto flex w-auto flex-col justify-center px-4 pt-16 pb-8 sm:pt-24 md:flex-row lg:max-w-7xl lg:px-8">
        <div className="flex w-full flex-col items-center justify-between md:mr-4">
          <div>
            <h1 className="mx-auto max-w-5xl text-center text-6xl leading-none font-extrabold tracking-tighter text-black sm:text-7xl dark:text-white">
              <span className="inline-block bg-linear-to-r/oklch from-red-500 to-blue-500 bg-clip-text text-transparent">
                Homeserver
              </span>
              <br />
              management made easy.
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-center text-xl leading-tight font-medium text-gray-400">
              Free and open-source, Runtipi lets you install all your favorite
              self-hosted apps without the hassle of configuring and managing
              each service. One-click installs and updates for almost 300
              popular apps.
            </p>
          </div>
          <div className="mt-4 mb-6 flex h-32 flex-col gap-3 md:my-0 md:flex-row md:items-center xl:flex-row">
            <Button
              href="/docs/introduction"
              className="betterhover:hover:bg-gray-700 betterhover:hover:dark:bg-gray-300 bg-black text-white dark:bg-white dark:text-black"
            >
              Get Started →
            </Button>
            <CopyableCode>curl -L https://setup.runtipi.io | bash</CopyableCode>
          </div>
        </div>
      </div>
      <div className="my-10 flex translate-y-32 justify-center" id="hero">
        <Browser />
      </div>
      <div className="relative isolate border-t border-gray-200 px-8 py-12 dark:border-gray-800">
        <GridPattern />
        <h2 className="text-center text-3xl font-bold tracking-tight text-neutral-800 sm:text-4xl dark:text-neutral-200">
          Features
        </h2>
        <div className="m-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          <Card title="Lorem Ipsum" icon={IconDownload}>
            Cubilia facilisi inceptos metus sociosqu bibendum nisi cum. Dolor
            proin litora hac taciti gravida magna ad.
          </Card>
          <Card title="Dolor Sit Amet" icon={IconHandClick}>
            Pharetra neque platea ullamcorper aliquet quis vivamus. Aliquam
            pellentesque netus quis dolor malesuada adipiscing.
          </Card>
          <Card title="Consectetur Adipiscing" icon={IconBolt}>
            Feugiat condimentum himenaeos non sociosqu egestas congue. Lectus
            nam aptent adipiscing metus quisque nulla.
          </Card>
          <Card title="Elit, Sed Do" icon={IconShoppingBag}>
            Sociis habitasse nec tempus integer quis ipsum phasellus. Est
            senectus senectus amet sem egestas ultricies himenaeos.
          </Card>
        </div>
      </div>
      <div className="m-8 border-t border-gray-200 py-12 dark:border-gray-800">
        <h2 className="px-8 text-3xl font-bold tracking-tight text-neutral-800 sm:text-4xl dark:text-neutral-200">
          Simple app management
        </h2>
        <div className="m-8 grid gap-12 md:grid-cols-2">
          <div className="flex flex-col gap-8">
            <Card title="Lorem Ipsum" icon={IconApps}>
              Cubilia facilisi inceptos metus sociosqu bibendum nisi cum. Dolor
              proin litora hac taciti gravida magna ad.
            </Card>
            <Card title="Dolor Sit Amet" icon={IconAdjustments}>
              Pharetra neque platea ullamcorper aliquet quis vivamus. Aliquam
              pellentesque netus quis dolor malesuada adipiscing.
            </Card>
            <Card title="Consectetur Adipiscing" icon={IconRestore}>
              Feugiat condimentum himenaeos non sociosqu egestas congue. Lectus
              nam aptent adipiscing metus quisque nulla.
            </Card>
          </div>
          <Image
            src={appstore_image}
            alt="Screenshot of App store"
            className="rounded-xl"
          />
        </div>
      </div>
      <div className="m-8 border-t border-gray-200 py-12 dark:border-gray-800">
        <h2 className="px-8 text-right text-3xl font-bold tracking-tight text-neutral-800 sm:text-4xl dark:text-neutral-200">
          Something else
        </h2>
        <div className="m-8 grid gap-12 md:grid-cols-2">
          <Image
            src={appstore_image}
            alt="Screenshot of App store"
            className="rounded-xl"
          />
          <div className="flex flex-col gap-8">
            <Card title="Lorem Ipsum" icon={IconPuzzle}>
              Cubilia facilisi inceptos metus sociosqu bibendum nisi cum. Dolor
              proin litora hac taciti gravida magna ad.
            </Card>
            <Card title="Dolor Sit Amet" icon={IconCircleArrowUp}>
              Pharetra neque platea ullamcorper aliquet quis vivamus. Aliquam
              pellentesque netus quis dolor malesuada adipiscing.
            </Card>
            <Card title="Consectetur Adipiscing" icon={IconLockCheck}>
              Feugiat condimentum himenaeos non sociosqu egestas congue. Lectus
              nam aptent adipiscing metus quisque nulla.
            </Card>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 py-12 dark:border-gray-800">
        <h2 className="px-8 text-center text-3xl font-bold tracking-tight text-neutral-800 sm:text-4xl dark:text-neutral-200">
          Community at the center
        </h2>
        <div className="m-8 grid gap-8 md:grid-cols-3">
          <Card
            title="Free and Open-source"
            footer={
              <Button
                href="https://github.com/runtipi/runtipi"
                className="betterhover:hover:bg-neutral-900 bg-black text-white"
              >
                See the code
                <GitHubIcon className="ml-2 size-6" />
              </Button>
            }
          >
            Runtipi is built on the principles of free and open-source software.
            All of our code is public and is licensed under{" "}
            <a
              href="https://github.com/runtipi/runtipi/blob/master/LICENSE"
              className="text-gray-800 underline dark:text-gray-200"
            >
              GPL-3.0
            </a>
            . This means that our code is free to use, modify, and distribute,
            and that we encourage others to do the same.
            <br />
            Anyone can browse our{" "}
            <a
              href="https://github.com/runtipi/runtipi"
              className="text-gray-800 underline dark:text-gray-200"
            >
              code
            </a>
            , report issues, and submit pull requests to help improve Runtipi.
          </Card>
          <Card
            title="Active community"
            footer={
              <>
                <Button
                  href="https://discord.gg/Bu9qEPnHsc"
                  className="betterhover:hover:bg-[#4752c4] bg-[#5865f2] text-white"
                >
                  Join our Discord
                  <DiscordIcon className="ml-2 size-6" />
                </Button>
                <Button
                  href="https://forums.runtipi.io"
                  className="betterhover:hover:bg-gray-700 betterhover:dark:hover:bg-gray-300 bg-black text-white dark:bg-white dark:text-black"
                >
                  Join our forums
                  <IconMessage className="ml-2 size-6" />
                </Button>
              </>
            }
          >
            Runtipi has a very active community on Discord and its (brand new)
            forums. We need more content here
          </Card>
          <Card title="Get involved">
            We welcome and appreciate contributions from anyone who is
            interested in helping us improve our project. Whether you're a
            developer, designer, or simply a user with a great idea, you can
            help.
            <br />
            <br />
            Here are some ways you can contribute:
            <ul className="list">
              <li>Report issues and bugs on our issue tracker</li>
              <li>Submit pull requests with new features or bug fixes</li>
              <li>Help us translate our project into new languages</li>
            </ul>
          </Card>
        </div>
      </div>
    </>
  );
}
