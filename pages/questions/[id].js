import Layout from "../../components/layout";
import Head from "next/head";
import css from "./Questions_detail.module.css";

export async function getStaticPaths() {
  const res = await fetch(`https://polls.apiblueprint.org/questions`);
  const questions = await res.json();
  const paths = questions.map((question) => ({
    params: { id: question.url.split("/")[2].toString() },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const currentUrl = `https://polls.apiblueprint.org/questions/${params.id}`;
  const res = await fetch(currentUrl);
  const data = await res.json();

  return {
    props: { data },
  };
}

function DetailPage({ data }) {
  return (
    <Layout>
      <Head>
        <title>{data.question}</title>
      </Head>
      <div className={css.list_item}>
        <div className={css.title_area}>
          <h2 className={css.title}>{data.question}</h2>
          <div className={css.date}>
            ({new Date(data.published_at).toLocaleString()})
          </div>
        </div>
        <div className={css.choice_area}>
          {data.choices.map((item, index) => (
            <div className={css.choice} key={index}>
              {item.choice}
              <span className={css.votes}>({item.votes})</span>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default DetailPage;
