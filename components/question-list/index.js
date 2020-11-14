import css from "./Question_list.module.css";

function QuestionList({ data }) {
  return (
    <div className={css.question_list}>
      <ul className={css.list}>
        {data.map((item) => (
          <li className={css.list_item} key={item.url}>
            <div className={css.title_area}>
              <span className={css.title}>{item.question}</span>
              <span className={css.date}>
                ({new Date(item.published_at).toLocaleString()})
              </span>
            </div>
            <div className={css.choice_area}>
              {item.choices.map((i, index) => (
                <div className={css.choice} key={index}>
                  * {i.choice} ({i.votes})
                </div>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuestionList;
