import React from 'react';
import Image from 'next/image';
import { DocsThemeConfig, ThemeSwitch } from 'nextra-theme-docs';

import logo from './public/tipi.png';
import { useRouter } from 'next/router';

const footer = () => {
  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex-1">Runtipi - Homeserver management made easy</div>
      <a
        href="https://www.flaticon.com/free-icons/tipi"
        title="tipi icons"
        target="_blank"
        rel="noreferrer"
      >
        Tipi logo created by Freepik - Flaticon
      </a>
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
  logo: (
    <div className="flex">
      <Image src={logo} alt="Tipi logo" className="h-6 w-6" />
      <span className="ml-2 font-bold">Runtipi</span>
    </div>
  ),
  project: {
    link: 'https://github.com/runtipi/runtipi',
  },
  chat: {
    link: 'https://discord.gg/Bu9qEPnHsc',
  },
  navbar: {
    extraContent: <ThemeSwitch lite className="[&_span]:hidden" />,
  },
  docsRepositoryBase: 'https://github.com/runtipi/runtipi-docs',
  footer: {
    content: footer(),
  },
  toc: {
    backToTop: true,
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
