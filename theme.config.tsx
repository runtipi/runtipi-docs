import React from 'react';
import Image from 'next/image';
import { DocsThemeConfig, ThemeSwitch, useConfig } from 'nextra-theme-docs';

import logo from './public/tipi.png';

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
  head: function useHead() {
    const config = useConfig();
    const title = `${config.title} – Runtipi`;
    const description = config.frontMatter.description || 'Homeserver management made simple';
    const image = config.frontMatter.image || 'https://runtipi.io/images/tipi-og.png';

    return (
      <>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta name="og:image" content={image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="https://runtipi.io" />
        <meta name="apple-mobile-web-app-title" content="Runtipi" />
      </>
    );
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
};

export default config;
