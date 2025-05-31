import type { Metadata } from "next";
import { Footer, Layout, Navbar, ThemeSwitch } from "nextra-theme-docs";
import Image from "next/image";
import logoImg from "../../public/tipi.png";
import { getPageMap } from "nextra/page-map";
import { GeistSans } from "geist/font/sans";
import "nextra-theme-docs/style.css";
import "./globals.css";
import { Head } from "./components/Head";

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
    <ThemeSwitch lite className="cursor-pointer" />
  </Navbar>
);

const footer = (
  <Footer>
    <div className="flex w-full items-center justify-between">
      <div className="grow">Runtipi - Homeserver management made easy</div>
      <a
        href="https://www.flaticon.com/free-icons/tipi"
        title="tipi icons"
        target="_blank"
        rel="noreferrer"
      >
        Tipi logo created by Freepik - Flaticon
      </a>
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
