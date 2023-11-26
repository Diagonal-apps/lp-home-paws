
import Link from 'next/link'
import './globals.css'
import Head from 'next/head'


export const metadata = {
  title: 'Home Paws',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <Head>
        <title>Home Paws</title>
        <Link rel="icon" href="img/favicon.svg" sizes="any" type="image/svg+xml" />
        <Link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" />
        <Link rel="stylesheet" href="style/style.css" />
        <script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script>
        <Link rel="preconnect" href="https://fonts.googleapis.com" />
        <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <Link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <Link href='https://fonts.googleapis.com/css?family=Nunito' rel='stylesheet' />
        <Link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css" />
        <Link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css" />
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
      </Head>
      <body>{children}</body>
    </html>
  )
}
