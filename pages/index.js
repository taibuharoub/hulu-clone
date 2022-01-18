import Head from "next/head";

import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hulu Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="">Hulu Clone</h1>

      {/* Header  */}
      <Header />

      {/* Nav  */}

      {/* Results  */}
    </div>
  );
}
