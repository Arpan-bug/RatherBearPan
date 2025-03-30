// pages/_app.js
import { SpeedInsights } from "@vercel/speed-insights/next";
import '../styles/globals.css'; // ✅ pick the one you actually use

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <SpeedInsights />
    </>
  );
}

export default MyApp;
