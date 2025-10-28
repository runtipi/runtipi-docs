import Link from "next/link";
import React from "react";
import { AppLogo } from "./app-logo";

type App = {
  name: string;
  description: string;
  logo: string;
  link: string;
};

type ApiResponse = {
  name: string;
  // path: string;
  // sha: string;
  // size: number;
  // url: string;
  // html_url: string;
  // git_url: string;
  // download_url: string | null;
  type: "dir" | "file";
  // _links: {
  //   self: string;
  //   git: string;
  //   html: string;
  // };
}[];

const getApps = async () => {
  const apps: Record<string, App> = {};
  // fetch apps from app store repository
  const res = await fetch(
    "https://api.github.com/repos/runtipi/runtipi-appstore/contents/apps",
  );

  const data: ApiResponse = await res.json();
  const appNames = data
    .filter((app) => app.type === "dir" && app.name !== "__tests__")
    .map((app) => app.name);

  for (const app of appNames) {
    const config = await fetch(
      `https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/${app}/config.json`,
    );
    const appConfig = await config.text();
    try {
      const appConfigJson = JSON.parse(appConfig);

      apps[app] = {
        name: appConfigJson.name,
        description: appConfigJson.short_desc,
        logo: `https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/${app}/metadata/logo.jpg`,
        link: appConfigJson.source,
      };
    } catch (e) {
      console.error(`Error parsing config for ${app}`);
    }
  }

  return apps;
};

export async function AppsList() {
  const apps = await getApps();
  const length = Object.keys(apps).length;
  return (
    <>
      <br />
      Here is a list of all <b>{length}</b> available apps sorted
      alphabetically:
      <div>
        <ul className="divide-y">
          {Object.keys(apps).map((app) => (
            <Link
              className="hover:underline"
              href={apps[app].link}
              key={app}
              rel="noopener noreferrer"
              target="_blank"
            >
              <li className="flex py-5" key={app}>
                <AppLogo
                  className="mr-5 h-16 w-16 rounded-md"
                  url={apps[app].logo}
                />
                <div className="flex flex-col justify-center">
                  <h3 className="text-lg font-bold">{apps[app].name}</h3>
                  <p>{apps[app].description.substring(0, 1000)}</p>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
}
