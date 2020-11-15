import css from "./New_question.module.css";

let questionName = "";
let choicesArr = [];

function handleQuestion(e) {
  questionName = e.target.value;
}

export async function postData() {
  let choices = document.querySelectorAll("input[data-attr='choice']");

  choices.forEach(function (item) {
    choicesArr.push(item.value);
  });

  await fetch("https://polls.apiblueprint.org/questions", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      question: questionName,
      choices: choicesArr,
    }),
  });
}

function NewQuestion() {
  return (
    <div className={css.new_question_page}>
      <form className={css.form_area}>
        <div className={`${css.input_area} ${css.question_area}`}>
          <input
            type="text"
            className={`${css.input} ${css.question}`}
            placeholder="Question"
            required
            onChange={handleQuestion}
          />
        </div>
        <div className={`${css.input_area} ${css.choice_area}`}>
          <input
            type="text"
            className={`${css.input} ${css.choice}`}
            placeholder="Choice"
            required
            data-attr="choice"
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
  );
}

export default NewQuestion;
