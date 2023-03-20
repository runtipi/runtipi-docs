import React from 'react';
import Image from 'next/image';
import { DocsThemeConfig } from 'nextra-theme-docs';

import logo from './public/tipi.png';
import { useRouter } from 'next/router';

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
        title: 'Runtipi Docs',
        description: 'Homeserver management made easy',
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
    link: 'https://github.com/meienberger/runtipi',
  },
  chat: {
    link: 'https://discord.gg/Bu9qEPnHsc',
  },
  docsRepositoryBase: 'https://github.com/meienberger/runtipi-docs',
  footer: {
    text: 'Runtipi - Homeserver management made easy',
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
