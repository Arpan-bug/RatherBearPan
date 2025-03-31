// pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en"> {/* ⛔ REMOVE className from here */}
      <Head />
      <body className="scroll-smooth transition-colors duration-300"> {/* ✅ Move scroll-smooth here */}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
