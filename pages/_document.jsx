import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {

  render() {
    return (
      <Html>
        <Head>
          <link rel="apple-touch-icon" href="/logo.png" />
          <meta name="robots" content="index,follow" />
          <meta name="googlebot" content="index,follow" />
          <meta
            name="description"
            content="How would you like to dive deeper and learn unknown information about VALORANT?"
          />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@VALORANTLeaksEN" />
          <meta name="twitter:creator" content="@VALORANTLeaksEN" />
          <meta property="og:url" content="https://valorantleaks.vercel.app" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="VALEAKS" />
          <link
            rel="icon"
            href="/img/logo2.png"
            type="image/x-icon"
          />
          <meta
            property="og:description"
            content="How would you like to dive deeper and learn unknown information about VALORANT?"
          />
          <meta property="og:image" content="/img/logo.png" />
          <meta property="og:image:alt" content="VALEAKS" />
          <meta property="og:locale" content="en_GB" />
          <meta
            property="og:site_name"
            content="VALORANT Leaks"
          />
          <meta name="theme-color" content="#FF4655" />
          <link rel="icon" href="/img/logo.png" type="image/x-icon" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://pro.fontawesome.com/releases/v6.0.0-beta1/css/all.css"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="/css/nprogress.css" />
    
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
