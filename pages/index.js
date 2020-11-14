import Layout from "../components/layout";
import Head from 'next/head'

function HomePage() {
  return (
    <Layout>
      <Head>
        <title>Home Page</title>
      </Head>
      <div className="home-page">
        <h2>Home</h2>  
      </div>
    </Layout>
  );
}

export default HomePage;