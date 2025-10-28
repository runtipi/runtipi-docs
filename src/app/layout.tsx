import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import Image from "next/image";
import { Footer, Layout, Navbar } from "nextra-theme-docs";
import "nextra-theme-docs/style.css";
import { getPageMap } from "nextra/page-map";
import { Head } from "@/app/components/head";
import logoImg from "@public/tipi.png";
import "./globals.css";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/16/solid";

export const metadata: Metadata = {
  title: "Runtipi",
  description: "Homeserver management made easy",
};

const logo = (
  <div className="flex">
    <Image src={logoImg} alt="Tipi logo" className="h-6 w-6" />
    <span className="ml-2 font-bold">Runtipi</span>
  </div>
);

const navbar = (
  <Navbar
    logo={logo}
    projectLink="https://github.com/runtipi/runtipi"
    chatLink="https://discord.gg/Bu9qEPnHsc"
  >
    <a
      className="x:focus-visible:nextra-focus"
      href="https://forums.runtipi.io"
      target="_blank"
      rel="noreferrer"
    >
      <ChatBubbleLeftRightIcon className="size-6" />
    </a>
  </Navbar>
);

const footer = (
  <Footer>
    <div className="flex w-full flex-col">
      <div className="mb-9 flex w-full items-center justify-between">
        <div className="text-sm md:text-base">
          Runtipi - Homeserver management made easy
        </div>
        <a
          href="https://www.flaticon.com/free-icons/tipi"
          title="Tipi icons"
          target="_blank"
          rel="noreferrer"
          className="text-sm md:text-base"
        >
          Tipi logo created by Freepik - Flaticon
        </a>
      </div>
      <div className="text-center text-sm md:text-base">
        Released under the GPL-3.0 license. Copyright &copy;{" "}
        {new Date().getFullYear()} Runtipi.
      </div>
    </div>
  </Footer>
);

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
      className={`${GeistSans.className} antialiased`}
    >
      <Head />
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          footer={footer}
          feedback={{
            content: "Need help? Visit our forums",
          }}
          docsRepositoryBase="https://github.com/runtipi/runtipi-docs/blob/main"
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
