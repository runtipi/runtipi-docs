import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  logo: (
    <div className="flex">
      <img src="/tipi.png" className="w-6 h-6" />
      <span className="font-bold ml-2">Runtipi</span>
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
};

export default config;
