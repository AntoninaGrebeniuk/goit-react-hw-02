import css from './Feedback.module.css';

export default function Feedback({
  good,
  neutral,
  bad,
  total,
  positiveFeedback,
}) {
  return (
    <ul>
      <li className={css.item}>
        <span className={css.text}>Good:</span>
        <span>{good}</span>
      </li>
      <li className={css.item}>
        <span className={css.text}>Neutral:</span>
        <span>{neutral}</span>
      </li>
      <li className={css.item}>
        <span className={css.text}>Bad:</span>
        <span>{bad}</span>
      </li>
      <li className={css.item}>
        <span className={css.text}>Total:</span>
        <span>{total}</span>
      </li>
      <li className={css.item}>
        <span className={css.text}>Positive:</span>
        <span>{positiveFeedback}%</span>
      </li>
    </ul>
  );
}
