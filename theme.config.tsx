import React from 'react';
import Image from 'next/image';
import { DocsThemeConfig } from 'nextra-theme-docs';

import logo from './public/tipi.png';
import { useRouter } from 'next/router';

const footer = () => {
  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex-1">Runtipi - Homeserver management made easy</div>
      <div className="flex-1">
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://vercel.com/?utm_source=runtipi&utm_campaign=oss"
        >
          <img
            height="34px"
            src="https://images.ctfassets.net/e5382hct74si/78Olo8EZRdUlcDUFQvnzG7/fa4cdb6dc04c40fceac194134788a0e2/1618983297-powered-by-vercel.svg"
            alt="Powered by vercel"
          />
        </a>
      </div>
    </div>
  );
};

const config: DocsThemeConfig = {
  useNextSeoProps() {
    const { asPath } = useRouter();

    const title = asPath === '/' ? 'Runtipi - Homeserver management made easy' : 'Runtipi - %s';

    return {
      titleTemplate: title,
      description: 'Homeserver management made easy',
      canonical: 'https://runtipi.io',
      openGraph: {
        url: 'https://runtipi.io',
        title: 'Runtipi - Homeserver management made easy',
        description:
          'Free and open-source, Runtipi lets you install all your favorite self-hosted apps without the hassle of configuring and managing each service. One-click installs and updates for more than 80 popular apps.',
        images: [
          {
            url: 'https://runtipi.io/images/tipi-og.png',
            width: 1200,
            height: 630,
            alt: 'Runtipi usage screenshot',
            type: 'image/png',
          },
        ],
        siteName: 'Runtipi',
      },
      twitter: {
        handle: '@runtipi',
        cardType: 'summary_large_image',
      },
    };
  },
  nextThemes: {
    forcedTheme: 'light',
  },
  logo: (
    <div className="flex">
      <Image src={logo} alt="Tipi logo" className="h-6 w-6" />
      <span className="ml-2 font-bold">Runtipi</span>
    </div>
  ),
  darkMode: false,
  project: {
    link: 'https://github.com/meienberger/runtipi',
  },
  chat: {
    link: 'https://discord.gg/Bu9qEPnHsc',
  },
  docsRepositoryBase: 'https://github.com/meienberger/runtipi-docs',
  footer: {
    text: footer(),
  },
  head: (
    <>
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="Runtipi: Homeserver management made simple" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@runtipi" />
      <meta property="og:title" content="Runtipi: Homeserver management made easy" />
      <meta property="og:description" content="Runtipi: Homeserver management made easy" />
      <meta name="apple-mobile-web-app-title" content="Runtipi" />
    </>
  ),
};

export default config;
