import Layout from "../components/layout";
import QuestionList from "../components/question-list/index";
import Head from "next/head";
import css from "./Home.module.css";

export async function getServerSideProps() {
  const res = await fetch(`https://polls.apiblueprint.org/questions`);
  const data = await res.json();

  return { props: { data } };
}

function HomePage({ data }) {
  return (
    <Layout>
      <Head>
        <title>Home Page</title>
      </Head>
      <div className={css.home_page}>
        <QuestionList data={data} />
      </div>
    </Layout>
  );
}

export default HomePage;