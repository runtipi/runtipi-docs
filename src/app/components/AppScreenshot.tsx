import React from "react";
import Image from "next/image";

import appstore_light from "../../../public/images/appstore.png";
import appstore_dark from "../../../public/images/appstore-dark.png";

export const AppScreenshot = () => {
  return (
    <div className="mt-4 mb-10 flex justify-center">
      <Image
        priority
        src={appstore_light}
        className="w-full max-w-none rounded-lg bg-gray-900 ring-1 shadow-xl ring-gray-400/10 lg:w-10/12 dark:hidden"
        alt="Screenshot of Runtipi's appstore"
      />
      <Image
        priority
        src={appstore_dark}
        className="hidden w-full max-w-none rounded-lg bg-gray-900 ring-1 shadow-xl ring-gray-400/10 lg:w-10/12 dark:block"
        alt="Screenshot of Runtipi's appstore"
      />
    </div>
  );
};
