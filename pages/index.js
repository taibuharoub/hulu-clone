import Head from "next/head";

import Header from "../components/Header";
import Nav from "../components/Nav";
import Results from "../components/Results";
import requests from "../utils/requests";

export default function Home({ results }) {
  return (
    <div>
      <Head>
        <title>Hulu Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header  */}
      <Header />

      {/* Nav  */}
      <Nav />

      {/* Results  */}
      <Results results={results} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  );
  // const request = await fetch(
  //   `https://api.themoviedb.org/3/movie/550?api_key=641b8592460aebd14f7048b49b60ba9c`
  // );
  const response = await request.json();

  return {
    props: {
      results: response.results,
    },
  };
}
