import Layout from "../components/layout";
import Head from "next/head";
import css from "./New_question.module.css";

export async function postData() {
  const rawResponse = await fetch("https://polls.apiblueprint.org/questions", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      /* this parameters static but question and choices should be changed when enter input areas */
      question: 'example question',
      choices: ["Swift", "Python", "Objective-C", "Ruby"],
    }),
  });
}

function NewQuestionPage() {
  return (
    <Layout>
      <Head>
        <title>New Question Page</title>
      </Head>
      <div className={css.new_question_page}>
        <form className={css.form_area}>
          <div className={`${css.input_area} ${css.question_area}`}>
            <input
              type="text"
              className={`${css.input} ${css.question}`}
              placeholder="Question"
              required
            />
          </div>
          <div className={`${css.input_area} ${css.choice_area}`}>
            <input
              type="text"
              className={`${css.input} ${css.choice}`}
              placeholder="Choice"
              required
            />
          </div>
          <div className={css.add_choice_area}>
            {/* when clicked this button new choice input should be added */}
            <button type="button">Add Choice</button>
          </div>
          <div className={css.submit_area}>
            <button onClick={postData} type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}

export default NewQuestionPage;
