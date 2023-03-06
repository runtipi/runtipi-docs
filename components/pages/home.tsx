import {
  ArrowDownTrayIcon,
  CursorArrowRaysIcon,
  DocumentDuplicateIcon,
  ServerIcon,
} from '@heroicons/react/24/outline';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from '@heroicons/react/24/outline';
import Head from 'next/head';
import Link from 'next/link';
import { Container } from '../Container';
import { toast, Toaster } from 'react-hot-toast';

const features = [
  {
    name: 'Push to deploy',
    description:
      'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL certificates',
    description:
      'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
    icon: LockClosedIcon,
  },
  {
    name: 'Simple queues',
    description:
      'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Advanced security',
    description:
      'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
    icon: FingerPrintIcon,
  },
];

export default function Home() {
  const onClick = (command: string) => {
    navigator.clipboard.writeText(command);
    toast.success('Copied to clipboard');
  };

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between px-4 pt-16 pb-8 mx-auto sm:pt-24 lg:px-8 w-auto lg:max-w-7xl">
        <div className="w-full md:w-10/12 lg:w-9/12 xl:w-7/12 flex flex-col justify-between md:mr-4">
          <div>
            <h1 className="max-w-5xl mx-auto nx-text-6xl font-extrabold tracking-tighter leading-[1.1] text-6xl sm:text-7xl lg:nx-text-8xl xl:nx-text-8xl">
              <span className="pr-1 inline-block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500 ">
                Homeserver
              </span>
              management made easy.
            </h1>
            <p className="max-w-2xl mt-6 nx-text-xl font-medium leading-tight text-gray-400 sm:nx-text-2xl md:nx-text-3xl lg:nx-text-4xl">
              Runtipi is a homeserver management tool made for humans.
            </p>
            <p className="max-w-2xl mt-6 nx-text-xl font-medium leading-tight text-gray-400 sm:nx-text-2xl md:nx-text-3xl lg:nx-text-4xl">
              Free and Open-Source, it lets you run your favorite self-hosted services without the
              hassle of managing it. One-click installs and updates
            </p>
          </div>
          <div className="flex flex-col fix-flex-col h-32 mt-4 md:mt-0 mb-6 md:mb-0 md:items-center gap-3 md:flex-row xl:flex-row">
            <div className="rounded-md fix-width-auto xl:w-auto">
              <Link
                href="/docs/introduction"
                className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white no-underline bg-black border border-transparent rounded-md dark:bg-white dark:text-black betterhover:dark:hover:bg-gray-300 betterhover:hover:bg-gray-700 md:py-3 md:text-lg md:px-10 md:leading-6"
              >
                Get Started →
              </Link>
            </div>
            <div className="relative rounded-md fix-width-auto xl:w-auto">
              <button
                onClick={() => onClick('curl -L https://setup.runtipi.com | bash')}
                className="flex items-center justify-center w-full px-8 py-3 font-mono text-sm font-medium text-gray-600 bg-black border border-transparent border-gray-200 rounded-md bg-opacity-5 dark:bg-white dark:text-gray-300 dark:border-gray-700 dark:bg-opacity-5 betterhover:hover:bg-gray-50 betterhover:dark:hover:bg-gray-900 md:py-3 md:text-base md:leading-6 md:px-10"
              >
                curl -L https://setup.runtipi.com | bash
                <DocumentDuplicateIcon className="w-6 h-6 ml-2 -mr-3 text-gray-400" />
              </button>
            </div>
          </div>
        </div>
        {/* <div className="w-1/12 md:w-3/12 lg:w-7/12 max-w-[436px] flex flex-col gap-1.5 m-auto md:justify-start"></div> */}
      </div>

      <div className="border-t dark:border-gray-900 relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            className="absolute top-0 left-[max(50%,25rem)] h-[64rem] w-[128rem] -translate-x-1/2 dark:stroke-gray-800 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
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
                <h1 className="mt-2 text-3xl font-bold tracking-tight light:text-gray-900 sm:text-4xl">
                  Don't waste time on configuration
                </h1>
                <p className="mt-6 text-xl leading-8 light:text-gray-700">
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
            <img
              className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              src="/images/screenshot.png"
              alt=""
            />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-7 light:text-gray-700 lg:max-w-lg">
                <ul role="list" className="space-y-8 light:text-gray-600">
                  <li className="flex gap-x-3">
                    <CursorArrowRaysIcon
                      className="mt-1 h-5 w-5 flex-none text-blue-700"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold light:text-gray-900 dark:text-blue-700">
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
                      <strong className="font-semibold text-gray-900">SSL certificates.</strong>{' '}
                      Expose your apps to the world instantly. Automatic SSL certificates management
                      with Let's Encrypt.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <ArrowDownTrayIcon
                      className="mt-1 h-5 w-5 flex-none text-blue-700"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
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
        <div className="px-4 py-16 mx-auto sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24">
          <h2 className="nx-text-4xl font-extrabold tracking-tight lg:nx-text-5xl xl:nx-text-6xl lg:text-center dark:text-white">
            Don't think about configuration
          </h2>
          <p className="mx-auto mt-4 text-lg font-medium text-gray-400 lg:max-w-3xl lg:text-xl lg:text-center">
            Runtipi takes care of all the configuration for you. Just pick your services and we'll
            do the rest.
          </p>
          <div className="flex mt-4 mb-4 justify-center">
            <div className="shadow lg:w-7/12 overflow-hidden rounded-md">
              <ReactCompareSlider
                itemOne={
                  <img src="/images/before.png" alt="Image two" className=" w-full object-cover" />
                }
                itemTwo={
                  <img src="/images/after.png" alt="Image one" className="w-full object-cover" />
                }
              />
            </div>
          </div>
        </div>
      </div>
      <Toaster position="bottom-right" />
    </>
  );
}
