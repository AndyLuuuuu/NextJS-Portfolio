import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>
          <title>Andy Lu Portfolio</title>
          <meta
            name="google-site-verification"
            content="iuLnCu3tgmaMKaxOxgns9S3go0IAB8hIDLLZBDd13u4"
          />
          <meta
            name="description"
            content="Official portfolio of Andy Lu, a web developer based in Vancouver, B.C. This portfolio was developed using NextJS with SSR and ReactJS framework."
          />
          <meta
            name="keywords"
            content="HTML, CSS, HTML5, CSS3, JavaScript, JS, ReactJS, MongoDB, NodeJS, NextJS, SSR, Server-side Rendering, Portfolio, Web Development, Web Developer, Web, Developer"
          />
          <meta name="author" content="Andy Lu" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" type="image/png" href="../static/favicon.png" />
          <link
            href="https://fonts.googleapis.com/css?family=Lato:300,700"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Euphoria+Script"
            rel="stylesheet"
          />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
