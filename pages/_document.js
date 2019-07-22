import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <b>Hi there </b>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}