import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* <!-- HTML Meta Tags --> */}
        <title>Net Zero Tech</title>
        <meta name="description" content="Net zero tech is a podcast where a PhD student from the University of Oxford interviews researchers to find out: Are EVs actually helping? What is geological carbon storage? And more.." />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://net-zero-tech.co.uk" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Net Zero Tech" />
        <meta property="og:description" content="Net zero tech is a podcast where a PhD student from the University of Oxford interviews researchers to find out: Are EVs actually helping? What is geological carbon storage? And more.." />
        <meta property="og:image" content="https://i.scdn.co/image/ab67656300005f1f827985387096ee815bf6e8a3" />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="net-zero-tech.co.uk" />
        <meta property="twitter:url" content="https://net-zero-tech.co.uk" />
        <meta name="twitter:title" content="Net Zero Tech" />
        <meta name="twitter:description" content="Net zero tech is a podcast where a PhD student from the University of Oxford interviews researchers to find out: Are EVs actually helping? What is geological carbon storage? And more.." />
        <meta name="twitter:image" content="https://i.scdn.co/image/ab67656300005f1f827985387096ee815bf6e8a3" />

        <link rel="alternate" type="application/rss+xml" title="Net Zero Tech Feed" href="https://feed.podbean.com/snigdhalal/feed.xml" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
