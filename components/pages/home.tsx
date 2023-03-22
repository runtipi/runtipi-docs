import Image from 'next/image';
import React from 'react';
import {
  ArrowDownTrayIcon,
  CursorArrowRaysIcon,
  DocumentDuplicateIcon,
  LockClosedIcon,
} from '@heroicons/react/24/outline';
import { ReactCompareSlider } from 'react-compare-slider';

import screenshot from '../../public/images/screenshot.png';
import before from '../../public/images/before.png';
import after from '../../public/images/after.png';

import Link from 'next/link';
import { toast, Toaster } from 'react-hot-toast';

export default function Home() {
  const onClick = (command: string) => {
    navigator.clipboard.writeText(command);
    toast.success('Copied to clipboard');
  };

  return (
    <>
      <div className="mx-auto flex w-auto flex-col justify-between px-4 pt-16 pb-8 sm:pt-24 md:flex-row lg:max-w-7xl lg:px-8">
        <div className="flex w-full flex-col justify-between md:mr-4 md:w-10/12 lg:w-9/12 xl:w-7/12">
          <div>
            <h1 className="mx-auto max-w-5xl text-6xl font-extrabold leading-[1.1] tracking-tighter sm:text-7xl">
              <span className="inline-block bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text pr-1 text-transparent ">
                Homeserver
              </span>
              management made easy.
            </h1>
            <p className="mt-6 max-w-2xl text-xl font-medium leading-tight text-gray-400">
              Free and open-source, Runtipi lets you install all your favorite self-hosted apps
              without the hassle of configuring and managing each service. One-click installs and
              updates for more than 80 popular apps.
            </p>
          </div>
          <div className="mt-4 mb-6 flex h-32 flex-col gap-3 md:my-0 md:flex-row md:items-center xl:flex-row">
            <div className="rounded-md xl:w-auto">
              <Link
                href="/docs/introduction"
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-black px-8 py-3 text-base font-medium text-white no-underline dark:bg-white dark:text-black md:py-3 md:px-10 md:text-lg md:leading-6 betterhover:hover:bg-gray-700 betterhover:dark:hover:bg-gray-300"
              >
                Get Started →
              </Link>
            </div>
            <div className="relative rounded-md xl:w-auto">
              <button
                onClick={() => onClick('curl -L https://setup.runtipi.com | bash')}
                className="flex w-full items-center justify-center rounded-md border border-gray-200 bg-black/10 px-8 py-3 font-mono text-sm font-medium text-gray-600 dark:border-gray-700 dark:bg-white/10 dark:text-gray-300 md:py-3 md:px-10 md:text-base md:leading-6 betterhover:hover:bg-gray-50 betterhover:dark:hover:bg-gray-900"
              >
                curl -L https://setup.runtipi.com | bash
                <DocumentDuplicateIcon className="ml-2 -mr-3 h-6 w-6 text-gray-400" />
              </button>
            </div>
          </div>
        </div>
        {/* <div className="w-1/12 md:w-3/12 lg:w-7/12 max-w-[436px] flex flex-col gap-1.5 m-auto md:justify-start"></div> */}
      </div>

      <div className="relative isolate overflow-hidden border-t px-6 py-24 dark:border-gray-900 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            className="absolute top-0 left-[max(50%,25rem)] h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)] dark:stroke-gray-800"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50 dark:fill-gray-900">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            />
          </svg>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="text-base font-semibold leading-7 text-blue-700">Deploy faster</p>
                <h1 className="light:text-gray-900 mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                  Don&apos;t waste time on configuration
                </h1>
                <p className="light:text-gray-700 mt-6 text-xl leading-8">
                  Chose any app from our{' '}
                  <a className="text-blue-700" href="/docs/apps-available">
                    app store
                  </a>{' '}
                  and install it pre-configured. It just works and everything can be customized to
                  your needs.
                </p>
              </div>
            </div>
          </div>
          <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <Image
              className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              src={screenshot}
              alt="Screenshot of the Runtipi dashboard"
            />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="light:text-gray-700 max-w-xl text-base leading-7 lg:max-w-lg">
                <ul role="list" className="light:text-gray-600 space-y-8">
                  <li className="flex gap-x-3">
                    <CursorArrowRaysIcon
                      className="mt-1 h-5 w-5 flex-none text-blue-700"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="light:text-gray-900 font-semibold dark:text-blue-700">
                        One click install.
                      </strong>{' '}
                      Install your favorite self-hosted apps with a single click. No configuration,
                      no docker knowledge required.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <LockClosedIcon
                      className="mt-1 h-5 w-5 flex-none text-blue-700"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="light:text-gray-900 font-semibold dark:text-blue-700">
                        SSL certificates.
                      </strong>{' '}
                      Expose your apps to the world instantly. Automatic SSL certificates management
                      with Let&apos;s Encrypt.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <ArrowDownTrayIcon
                      className="mt-1 h-5 w-5 flex-none text-blue-700"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="light:text-gray-900 font-semibold text-gray-900 dark:text-blue-700">
                        Easy updates and configuration.
                      </strong>{' '}
                      Update your apps with a single click. Customize your apps with a simple web
                      UI.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative from-gray-50 to-gray-100">
        <div className="mx-auto px-4 py-16 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24">
          <h2 className="text-4xl font-extrabold tracking-tight dark:text-white lg:text-center">
            Easy to use and to customize
          </h2>
          <p className="mx-auto mt-4 text-lg font-medium text-gray-400 lg:max-w-3xl lg:text-center lg:text-xl">
            Each app comes with a pre-configured state that works out of the box. You can customize
            it as you want to fit your needs.
          </p>
          <div className="my-4 flex justify-center">
            <div className="overflow-hidden rounded-md shadow lg:w-7/12">
              <ReactCompareSlider
                itemOne={<Image src={before} alt="Image two" className="w-full object-cover" />}
                itemTwo={<Image src={after} alt="Image one" className="w-full object-cover" />}
              />
            </div>
          </div>
        </div>
      </div>
      <Toaster position="bottom-right" />
    </>
  );
}
