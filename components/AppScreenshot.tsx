import React from 'react';
import Image from 'next/image';

import screenshot from '../public/images/screenshot.png';

export const AppScreenshot = () => {
  return (
    <div className="mb-10 mt-4 flex justify-center">
      <Image
        priority
        src={screenshot}
        className="w-full max-w-none rounded-lg bg-gray-900 shadow-xl ring-1 ring-gray-400/10 lg:w-10/12"
        alt="Screenshot of the Runtipi app"
      />
    </div>
  );
};
