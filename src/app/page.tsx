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
import { DiscordIcon, GitHubIcon } from "nextra/icons";
import { Browser } from "./components/browser/browser";
import Button from "./components/button";
import CopyableCode from "./components/copyable-code";
import GridPattern from "./components/grid-patern";
import Card from "./components/card";
import "./page.css";

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col">
      <div className="mt-[10%] flex flex-col gap-6 px-4">
        <div>
          <h1 className="mb-3 text-center text-5xl font-extrabold">
            <span className="inline-block bg-linear-to-r/oklch from-red-500 to-blue-500 bg-clip-text text-transparent">
              Homeserver
            </span>
            managment made easy.
          </h1>
          <p className="text-md text-center text-gray-400">
            Say goodbye to complex setups. Runtipi simplifies managing
            self-hosted apps with a free, open-source solution. Install and
            update nearly 300 apps effortlessly.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <Button
            href="/docs/introduction"
            className="betterhover:hover:bg-gray-700 betterhover:hover:dark:bg-gray-300 bg-black text-white dark:bg-white dark:text-black"
          >
            Get Started
          </Button>
          <CopyableCode>
            curl -fsSL https://setup.runtipi.io | bash
          </CopyableCode>
        </div>
      </div>
      <div className="flex justify-center p-9">
        <Browser />
      </div>
      <div className="relative isolate border-t border-gray-200 px-8 py-12 dark:border-gray-800">
        <GridPattern />
        <h2 className="mb-6 text-center text-3xl font-semibold text-neutral-800 dark:text-neutral-200">
          Features
        </h2>
        <div className="grid gap-3">
          <Card title="Quick Setup" icon={IconDownload}>
            One command is all it takes. Runtipi works seamlessly on most 64-bit
            Linux systems.
          </Card>
          <Card title="Full Control" icon={IconHandClick}>
            Manage apps, settings, and backups with ease using an intuitive web
            dashboard.
          </Card>
          <Card title="Extensive App Library" icon={IconShoppingBag}>
            Access nearly 300 apps, from AI tools to media servers, with simple
            installation.
          </Card>
        </div>
      </div>
      <div className="relative isolate border-t border-gray-200 px-8 py-12 dark:border-gray-800">
        <GridPattern />
        <h2 className="mb-6 text-center text-3xl font-semibold text-neutral-800 dark:text-neutral-200">
          Powerful. Simple. Reliable.
        </h2>
        <div className="grid gap-3">
          <Card title="Effortless Installation" icon={IconApps}>
            Install with ease—just click, configure, and go.
          </Card>
          <Card title="Tailor Your Setup" icon={IconAdjustments}>
            Customize apps and settings directly in the dashboard.
          </Card>
          <Card title="Seamless Backup & Restore" icon={IconRestore}>
            Back up and restore data effortlessly for smooth updates.
          </Card>
        </div>
      </div>
      <div className="relative isolate border-t border-gray-200 px-8 py-12 dark:border-gray-800">
        <GridPattern />
        <h2 className="mb-6 text-center text-3xl font-semibold text-neutral-800 dark:text-neutral-200">
          Secure. Flexible. Future-Proof.
        </h2>
        <div className="grid gap-3">
          <Card title="Advanced Customization" icon={IconPuzzle}>
            Fine-tune apps with Docker Compose, and keep changes after updates.
          </Card>
          <Card title="One-Click Updates" icon={IconCircleArrowUp}>
            Get notified and update apps effortlessly with a single click.
          </Card>
          <Card title="Secure by Design" icon={IconLockCheck}>
            Each service runs in its own container for maximum security.
          </Card>
        </div>
      </div>
      <div className="flex flex-col pt-12 pb-6">
        <h2 className="mb-4 px-8 text-center text-3xl font-semibold text-neutral-800 dark:text-neutral-200">
          Thanks to our generous Sponsors
        </h2>
        <p className="mb-6 px-8 text-center text-gray-600 dark:text-gray-300">
          Their contributions help us maintain and improve our project.
        </p>
        <div className="mb-6 grid gap-3 px-6">
          <a
            href="https://coderabbit.ai?utm_source=runtipi&utm_campaign=website"
            target="_blank"
            rel="noreferrer"
          >
            <Card title="" footer={<p>coderabbit.ai</p>}>
              <h3 className="text-center text-xl font-bold text-neutral-800 underline dark:text-neutral-200">
                CodeRabbit
              </h3>
              <p className="text-center text-gray-600 dark:text-gray-300">
                Cut Code Review Time & Bugs in Half
              </p>
              <img
                src="/images/sponsors/coderabbit.png"
                alt="CodeRabbit logo"
                width="200"
                className="mx-auto mt-4"
              />
            </Card>
          </a>
          <a
            href="https://www.lambdatest.com/?utm_source=runtipi&utm_medium=sponsor"
            target="_blank"
            rel="noreferrer"
          >
            <Card title="" footer={<p>lambdatest.com</p>}>
              <div>
                <h3 className="text-center text-xl font-bold text-neutral-800 underline dark:text-neutral-200">
                  LambdaTest
                </h3>
                <p className="text-center text-gray-600 dark:text-gray-300">
                  Browser testing via
                </p>
              </div>
              <img
                src="https://www.lambdatest.com/blue-logo.png"
                alt="lambdatest logo"
                style={{ height: 200, objectFit: "contain" }}
                className="mx-auto mt-4 w-full"
              />
            </Card>
          </a>
        </div>
        <Button
          href="https://github.com/runtipi/runtipi?sponsor=1"
          className="self-center bg-black text-white dark:bg-white dark:text-black"
        >
          Sponsor us
        </Button>
      </div>
      <div className="flex flex-col pt-3 pb-12">
        <h2 className="mb-6 px-8 text-center text-3xl font-semibold text-neutral-800 dark:text-neutral-200">
          Build by the community, for the community.
        </h2>
        <div className="grid gap-3 px-6">
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
            <br />
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
            Contributions are welcome! Whether you're a developer, designer, or
            user with ideas, you can help by:
            <ul className="list">
              <li>Reporting issues and bugs</li>
              <li>Submitting pull requests</li>
              <li>Helping with translations</li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
}
