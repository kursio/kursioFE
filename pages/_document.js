import Document, { Html, Head, Main, NextScript } from 'next/document';
import Header from 'components/Header/Header';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <title>Kursio</title>
          <link href="https://fonts.googleapis.com/css?family=Raleway:200,300,400,600,700,800&display=swap" rel="stylesheet"></link>
        </Head>
        <style>{`
          body {
            margin: 0;
            font-family: Raleway;
          }
        `}</style>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;