import { SiteHeader } from '@/components/site-header'
import { TailwindIndicator } from '@/components/tailwind-indicator'
import { ThemeProvider } from '@/components/theme-provider'
import { AppProps } from 'next/app'
import DocsLayout from '@/components/docs-layout'
import Head from 'next/head'
import { siteConfig } from '@/site-config'
import { baseUrl } from '@/lib/baseUrl'
import '@/styles/globals.css'

function App({ Component, pageProps, router }: AppProps) {
  const isDocsRoute = router.pathname.startsWith('/docs')

  return (
    <>
      <Head>
        <title>{siteConfig.name}</title>
        <link rel="icon" href={`${baseUrl}/favicon.ico`} />
        <meta name="title" content={siteConfig.name} />
        <meta name="description" content={siteConfig.description} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={siteConfig.name} />
        <meta property="og:description" content={siteConfig.description} />
        <meta property="og:image" content={`${baseUrl}/opengraph-image.png`} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={baseUrl} />
        <meta property="twitter:title" content={siteConfig.name} />
        <meta property="twitter:description" content={siteConfig.description} />
        <meta
          property="twitter:image"
          content={`${baseUrl}/opengraph-image.png`}
        />
      </Head>
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
    </>
  )
}

export default App
