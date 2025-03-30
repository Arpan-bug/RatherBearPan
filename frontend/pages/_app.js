// pages/_app.js
import { ThemeProvider } from 'next-themes';
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true}>
      <>
        <Component {...pageProps} />
        <SpeedInsights />
        <Analytics />
      </>
    </ThemeProvider>
  );
}

export default MyApp;
