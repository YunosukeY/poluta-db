import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';

import '../styles/materialize.min.css';
import '../styles/globals.css';
const Layout = dynamic(() => import('../components/Layout'), { ssr: false });

function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
  return (
    <>
      <Head>
        <title>ぽるうたデータベース｜尾丸ポルカさんの歌を検索！</title>
        <meta name='viewport' content='width=device-width,initial-scale=1' />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
