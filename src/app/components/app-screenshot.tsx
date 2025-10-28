import React from "react";
import Image from "next/image";

import appstore_light from "../../../public/images/appstore.png";
import appstore_dark from "../../../public/images/appstore-dark.png";
import { twMerge } from "tailwind-merge";

const styles =
  "w-full max-w-none rounded-lg bg-gray-900 ring-1 shadow-xl ring-gray-400/10 lg:w-10/12";
const altText = "Screenshot of Runtipi&apos;s appstore";

export const AppScreenshot = () => {
  return (
    <div className="mt-4 mb-10 flex justify-center">
      <Image
        priority
        src={appstore_light}
        className={twMerge(styles, "dark:hidden")}
        alt={altText}
      />
      <Image
        priority
        src={appstore_dark}
        className={twMerge(styles, "hidden dark:block")}
        alt={altText}
      />
    </div>
  );
};
