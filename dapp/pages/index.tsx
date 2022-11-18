import Head from "next/head";
import Header from "../components/Header";

const Home = () => {
  return (
    <div>
      <Head>
        {/* PLN title, meta의 content 변경  */}
        <title>ProjectLion NFT</title>
        <meta name="description" content="ProjectLion NFT" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
      </main>
      <footer></footer>
    </div>
  );
};

export default Home;
