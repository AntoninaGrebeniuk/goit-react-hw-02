export default function Options({ options, updateFeedback }) {
  return (
    <ul>
      {options.map(option => (
        <li key={option}>
          <button
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
  );
}
