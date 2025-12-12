import nextra from "nextra";

const withNextra = nextra({
  defaultShowCopyCode: true,
});

export default withNextra({
  output: "export",
  transpilePackages: ["geist"],
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      },
    ],
  },
  // async redirects() {
  //   return [
  //     {
  //       source: "/docs/getting-started/why-runtipi",
  //       destination: "/docs/learn/why-runtipi",
  //       permanent: true,
  //     },
  //     {
  //       source: "/docs/contributing/:path*",
  //       destination: "/docs/developers/:path*",
  //       permanent: true,
  //     },
  //   ];
  // },
});
