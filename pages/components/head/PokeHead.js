import React from 'react'
import Head from 'next/head';

export default function PokeHead() {
    return (<>
        <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico?v=2" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#262626" />
        <meta
          name="description"
          content="A PokéDex-like app created with React"
        />
       
        <title>Poké React</title>
      </Head></>
    )
}
