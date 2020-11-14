import Layout from "../components/layout";
import Head from 'next/head'

function AboutPage() {
  return (
    <Layout>
      <Head>
        <title>About Page</title>
      </Head>
      <div className="about-page">
        <h2>About</h2>  
      </div>
    </Layout>
  );
}

export default AboutPage;