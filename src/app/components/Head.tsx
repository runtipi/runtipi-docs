"use client";

// Commented out properties in this file depends on https://github.com/shuding/nextra/issues/3980 being solved. For now this breaks X/Twitter OpenGraph previews

// import { useConfig } from "nextra-theme-docs";
import { Head as NextraHead } from "nextra/components";

export function Head() {
  // const config = useConfig().normalizePagesResult.activeMetadata!;
  // const title = `${config.title} – Runtipi`;
  // const description = config.description || "Homeserver management made simple";
  const image = "https://runtipi.io/images/tipi-og.png";
  return (
    <NextraHead>
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <script
        defer
        data-domain="runtipi.io"
        src="https://plausible.foreach.li/js/script.js"
      ></script>
      {/* <title>{title}</title> */}
      {/* <meta property="og:title" content={title} />
      <meta name="description" content={description} />
      <meta property="og:description" content={description} /> */}
      <meta name="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="https://runtipi.io" />
      <meta name="apple-mobile-web-app-title" content="Runtipi" />
    </NextraHead>
  );
}
