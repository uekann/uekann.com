import Head from "next/head";
import Header from "../components/Header";

const IndexPage = () => (
  <>
    <Head>
      <title>Uekann</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="/favicon.svg" />
    </Head>
    <Header />
    <div>
      <h1 className="text-[2.5rem] pl-[60px] pt-[60px]">This is my portfolio! 👋</h1>
    </div>
  </>
);

export default IndexPage;
