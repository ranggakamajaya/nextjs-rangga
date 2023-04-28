import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const localStorage = require('node-localstorage').LocalStorage;

  return (
    <Html 
    lang='en'
    className={typeof window !== 'undefined' && (localStorage.getItem("darkMode") === "true" ? "dark" : "light")} >
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='true'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Poltawski+Nowy:wght@100;200;300;400;500;600;700;800;900&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body className='bg-gray-100 border-gray-800 text-gray-800 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-300'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
