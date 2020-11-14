import Layout from "../components/layout";
import Head from 'next/head'
import css from './Home.module.css'

function HomePage() {
  return (
    <Layout>
      <Head>
        <title>Home Page</title>
      </Head>
      <div className={css.home_page}>
        <h2>Home</h2>  
      </div>
    </Layout>
  );
}

export default HomePage;