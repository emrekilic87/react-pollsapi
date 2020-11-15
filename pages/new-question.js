import Layout from "../components/layout";
import Head from "next/head";
import NewQuestion from "../components/new-question/index";

function NewQuestionPage() {
  return (
    <Layout>
      <Head>
        <title>New Question Page</title>
      </Head>

      <NewQuestion />
      
    </Layout>
  );
}

export default NewQuestionPage;
