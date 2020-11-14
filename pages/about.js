import Layout from "../components/layout";
import Head from 'next/head'
import css from './About.module.css'

function AboutPage() {
  return (
    <Layout>
      <Head>
        <title>About Page</title>
      </Head>
      <div className={css.about_page}>
        <h2 className={css.title}>About Page</h2>  
      </div>
    </Layout>
  );
}

export default AboutPage;