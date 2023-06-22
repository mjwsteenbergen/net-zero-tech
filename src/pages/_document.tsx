import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Net Zero Tech</title>
        <meta name="og:title" content="Net Zero Tech" />
        <meta name="description" content="Net zero tech is a podcast where a PhD student from the University of Oxford interviews researchers to find out: Are EVs actually helping? What is geological carbon storage? And more.." />
        <meta name="og:description" content="Net zero tech is a podcast where a PhD student from the University of Oxford interviews researchers to find out: Are EVs actually helping? What is geological carbon storage? And more.." />
        <meta name="description" content="Net zero tech is a podcast where a PhD student from the University of Oxford interviews researchers to find out: Are EVs actually helping? What is geological carbon storage? And more.." />
        <meta name="twitter:description" content="Net zero tech is a podcast where a PhD student from the University of Oxford interviews researchers to find out: Are EVs actually helping? What is geological carbon storage? And more.." />
        <link rel="alternate" type="application/rss+xml" title="Net Zero Tech Feed" href="https://feed.podbean.com/snigdhalal/feed.xml" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
