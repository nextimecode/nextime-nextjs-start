import React from 'react'
import { AppProps } from 'next/app'

import '../styles/bootstrap.scss'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
