import React from 'react';
import { AppLogo } from './AppLogo';

type App = {
  name: string;
  description: string;
  logo: string;
};

export const getStaticProps = async () => {
  const apps: Record<string, App> = {};
  // fetch apps from app store repo
  const res = await fetch(
    'https://api.github.com/repos/meienberger/runtipi-appstore/contents/apps',
  );

  const data = await res.json();
  const appNames = data.map((app) => app.name);

  for (const app of appNames) {
    const config = await fetch(
      `https://raw.githubusercontent.com/meienberger/runtipi-appstore/master/apps/${app}/config.json`,
    );
    const appConfig = await config.text();
    try {
      const appConfigJson = JSON.parse(appConfig);

      apps[app] = {
        name: appConfigJson.name,
        description: appConfigJson.short_desc,
        logo: `https://raw.githubusercontent.com/meienberger/runtipi-appstore/master/apps/${app}/metadata/logo.jpg`,
      };
    } catch (e) {
      console.error(`Error parsing config for ${app}`);
    }
  }

  return { props: { ssg: { apps } } };
};

export const AppsList = (props: { apps: App[] }) => {
  const { apps } = props;
  return (
    <div>
      <ul className="divide-y">
        {Object.keys(apps).map((app) => (
          <li className="flex py-5" key={app}>
            <AppLogo className="w-16 h-16 rounded-md mr-5" url={apps[app].logo} />
            <div className="flex flex-col justify-center">
              <h3 className="text-lg font-bold">{apps[app].name}</h3>
              <p>{apps[app].description.substring(0, 1000)}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
