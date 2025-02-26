import React from "react";
import "./styles.css";

import CopyableCode from "../CopyableCode";
import { Browser } from "../Browser";
import Card from "../Card";
import {
  IconAdjustments,
  IconApps,
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
import appstore_light from "../../../../public/images/appstore.png";
import appstore_dark from "../../../../public/images/appstore-dark.png";
import app_page_light from "../../../../public/images/appstore.png";
import app_page_dark from "../../../../public/images/appstore-dark.png";

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
              Say goodbye to tedious configurations. Runtipi is your all-in-one,
              free, and open-source solution for managing self-hosted apps with
              ease. Install and update nearly 300 powerful apps in just one
              click—no hassle, no headaches.
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
        <div className="mt-8 grid gap-8 lg:m-8 lg:grid-cols-3">
          <Card title="Set up in minutes" icon={IconDownload}>
            Run a single command, and Runtipi handles everything for you. Works
            seamlessly on most 64-bit Linux systems with minimal terminal
            know-how required.
          </Card>
          <Card title="Ultimate control" icon={IconHandClick}>
            Manage system status, install apps, tweak settings, and handle
            backups—all from a sleek, intuitive web dashboard built for
            efficiency.
          </Card>
          <Card title="Massive app library" icon={IconShoppingBag}>
            With nearly 300 apps at your fingertips, you can set up AI agents,
            media servers, utilities, and more—all with effortless installation.
          </Card>
        </div>
      </div>
      <div className="m-8 border-t border-gray-200 py-12 dark:border-gray-800">
        <h2 className="px-8 text-4xl font-bold tracking-tight text-neutral-800 dark:text-neutral-200">
          Powerful. Simple. Reliable.
        </h2>
        <div className="mt-8 grid gap-12 lg:m-8 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <Card title="Effortless installation" icon={IconApps}>
              No need for complex configurations. Click to install, fill in any
              required details, and you’re good to go.
            </Card>
            <Card title="Tailor your setup" icon={IconAdjustments}>
              Customize apps directly through the dashboard. Choose how they're
              exposed, tweak settings, and make it your own.
            </Card>
            <Card title="Seamless backup & restore" icon={IconRestore}>
              Never lose your data. Easily back up and restore app data before
              updates, ensuring a smooth experience.
            </Card>
          </div>
          <Image
            src={appstore_light}
            alt="Screenshot of Runtipi's app store"
            className="self-center rounded-xl dark:hidden"
          />
          <Image
            src={appstore_dark}
            alt="Screenshot of Runtipi's app store"
            className="hidden self-center rounded-xl dark:block"
          />
        </div>
      </div>
      <div className="m-8 border-t border-gray-200 py-12 dark:border-gray-800">
        <h2 className="px-8 text-right text-4xl font-bold tracking-tight text-neutral-800 dark:text-neutral-200">
          Secure. Flexible. Future-Proof.
        </h2>
        <div className="mt-8 grid gap-12 lg:m-8 lg:grid-cols-2">
          <Image
            src={app_page_light}
            alt="Screenshot of Runtipi's app store"
            className="self-center rounded-xl dark:hidden"
          />
          <Image
            src={app_page_dark}
            alt="Screenshot of Runtipi's app store"
            className="hidden self-center rounded-xl dark:block"
          />
          <div className="flex flex-col gap-6">
            <Card title="Advanced customization" icon={IconPuzzle}>
              Modify Docker Compose files to fine-tune your apps. Your changes
              stay intact even after updates.
            </Card>
            <Card title="One-click updates" icon={IconCircleArrowUp}>
              Stay up to date with zero hassle. Get notified of new versions and
              update your apps with a single click.
            </Card>
            <Card title="Secure by design" icon={IconLockCheck}>
              Every service runs in its own Docker container, keeping your
              environment secure by default.
            </Card>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 py-12 dark:border-gray-800">
        <h2 className="px-8 text-center text-3xl font-bold tracking-tight text-neutral-800 sm:text-4xl dark:text-neutral-200">
          Built by the Community. For the Community.
        </h2>
        <div className="m-8 grid gap-8 lg:grid-cols-3">
          <Card
            title="Free and Open-source"
            footer={
              <Button
                href="https://github.com/runtipi/runtipi"
                className="betterhover:hover:bg-neutral-900 w-full bg-black text-white md:w-auto"
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
            title="A Thriving Community"
            footer={
              <>
                <Button
                  href="https://discord.gg/Bu9qEPnHsc"
                  className="betterhover:hover:bg-[#4752c4] w-full bg-[#5865f2] px-4 text-white"
                >
                  Join our Discord
                  <DiscordIcon className="ml-2 size-6" />
                </Button>
                <Button
                  href="https://forums.runtipi.io"
                  className="betterhover:hover:bg-gray-700 w-full bg-black px-4 text-white dark:bg-white dark:text-black"
                >
                  Join our forums
                  <IconMessage className="ml-2 size-6" />
                </Button>
              </>
            }
          >
            Engage with hundreads of self-hosting enthusiasts. Share ideas,
            troubleshoot, and shape the future of Runtipi.
          </Card>
          <Card title="Get involved">
            We welcome and appreciate contributions from anyone who is
            interested in helping us improve our project. Whether you&apos;re a
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
