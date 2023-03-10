import React from 'react';
import Image from 'next/image';

import screenshot from '../public/images/screenshot.png';

export const AppScreenshot = () => {
  return (
    <div className="mt-4 mb-10 flex justify-center">
      <Image
        priority
        src={screenshot}
        className="w-full lg:w-10/12 max-w-none rounded-lg bg-gray-900 shadow-xl ring-1 ring-gray-400/10"
        alt="Screenshot of the Runtipi app"
      />
    </div>
  );
};
