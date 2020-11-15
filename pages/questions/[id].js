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

export async function vote(e) {
  let choice_id = parseInt(e.target.getAttribute("data-ind")) + 1;
  let voted = parseInt(e.target.getAttribute("data-value"));
  for (var i = 0; i < e.target.childNodes.length; i++) {
    if (e.target.childNodes[i].className == "votes") {
      e.target.childNodes[i].innerText = `(${voted + 1})`;
      break;
    }
  }
  e.target.setAttribute("data-value", voted + 1);

  let question_id = document.URL.split('/')[4].toString();
  await fetch(`https://polls.apiblueprint.org/questions/${question_id}/choices/${choice_id}`);
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
            <div
              onClick={vote}
              data-value={item.votes}
              data-ind={index}
              className={css.choice}
              key={index}
            >
              {item.choice}
              <span className="votes">({item.votes})</span>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default DetailPage;
