import "./globals.css";
import SmoothScroll from "@/components/shared/SmoothScroll";

export const metadata = {
  title: "ROBIN AI — Discord Economy Bot",
  description:
    "The Ultimate Discord Economy Bot. Earn, bank, trade, and compete.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600,700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
        />
      </head>
      <body className="tw-bg-background tw-text-foreground tw-font-geist tw-overflow-x-hidden">
        <div className="noise-overlay" />
        <SmoothScroll>{children}</SmoothScroll>
        <script
          src="https://unpkg.com/aos@2.3.1/dist/aos.js"
          strategy="lazyOnload"
        ></script>
        <script
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `if(typeof AOS!=='undefined'){AOS.init({duration:600,offset:80,once:true,easing:'ease-out-cubic'});}`,
          }}
        />
      </body>
    </html>
  );
}
