import css from './Options.module.css';

export default function Options({
  options,
  updateFeedback,
  total,
  resetFeedback,
}) {
  return (
    <div className={css.wrap}>
      <ul className={css.list}>
        {options.map(option => (
          <li className={css.item} key={option}>
            <button
              className={css.btn}
              type="button"
              onClick={() => {
                updateFeedback(option);
              }}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>

      {total > 0 && (
        <button className={css.btn} type="button" onClick={resetFeedback}>
          Reset
        </button>
      )}
    </div>
  );
}
