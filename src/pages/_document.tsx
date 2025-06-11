import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Mayar Alsalem</title>
        <meta
          name="description"
          content="Mayar Alsalem – Front-End Developer specializing in Next.js, React, Tailwind, GSAP animations, and more."
        />
        <link rel="canonical" href="https://mayaralsalem.vercel.app" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Mayar Alsalem",
              url: "https://mayaralsalem.vercel.app",
              description: "Front-End Developer portfolio and services by Mayar Alsalem."
            })
          }}
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
