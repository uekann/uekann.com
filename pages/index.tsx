import Link from "next/link";
import Head from "next/head";
import Header from "../components/Header";

const IndexPage = () => (
  <>
    <Head>
      <title>Uekann</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      {/* favicon */}
      <link rel="icon" href="/favicon.svg" />
    </Head>
    <Header />
    <div>
      <h1>This is my portfolio! 👋</h1>
    </div>
  </>
);

export default IndexPage;
