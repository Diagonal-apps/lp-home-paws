
import Head from 'next/head'
import GoogleTagManager from './gtm';
import './globals.css'

export const metadata = {
  title: 'Home Paws',
  description: 'Home Paws Official',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <Head>
        <title>Home Paws</title>
          <link rel="shortcut icon" href="/image/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/image/apple-touch-icon.ico" />
          <link rel="icon" type="image/png" sizes="32x32" href="/image/favicon-32x32.ico"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/image/favicon-16x16.ico"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" />
        <link rel="stylesheet" href="style/style.css" />
        <script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link href='https://fonts.googleapis.com/css?family=Nunito' rel='stylesheet' />
        <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css" />
        <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css" />
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
        
      </Head>
      <body>
        <GoogleTagManager />
        {children}
      </body>
    </html>
  )
}
