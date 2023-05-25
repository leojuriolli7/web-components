import { SiteHeader } from "@/components/site-header";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { ThemeProvider } from "@/components/theme-provider";
import { AppProps } from "next/app";
import "@/styles/globals.css";
import DocsLayout from "@/components/docs-layout";

function App({ Component, pageProps, router }: AppProps) {
  const isDocsRoute = router.pathname.startsWith("/docs");

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="relative flex min-h-screen flex-col">
        <SiteHeader />
        <div className="flex-1">
          {isDocsRoute ? (
            <DocsLayout>
              <Component {...pageProps} />
            </DocsLayout>
          ) : (
            <Component {...pageProps} />
          )}
        </div>
      </div>
      <TailwindIndicator />
    </ThemeProvider>
  );
}

export default App;
