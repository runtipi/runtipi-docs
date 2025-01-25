import React from "react";
import Image from "next/image";

import screenshot from "../../../public/images/screenshot.png";

export const AppScreenshot = () => {
  return (
    <div className="mt-4 mb-10 flex justify-center">
      <Image
        priority
        src={screenshot}
        className="w-full max-w-none rounded-lg bg-gray-900 ring-1 shadow-xl ring-gray-400/10 lg:w-10/12"
        alt="Screenshot of the Runtipi app"
      />
    </div>
  );
};
