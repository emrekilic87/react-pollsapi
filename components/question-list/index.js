import css from "./Question_list.module.css";
import Link from "next/link";

function QuestionList({ data }) {
  return (
    <div className={css.question_list}>
      <ul className={css.list}>
        {data.map((item) => (
          <li className={css.list_item} key={item.url}>
            <Link href={item.url}>
              <a className={css.title_area}>
                <span className={css.title}>{item.question}</span>
                <span className={css.date}>
                  ({new Date(item.published_at).toLocaleString()})
                </span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuestionList;
