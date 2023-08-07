export default function CustomButton({ color, text, onButtonClick }) {
  return (
    <button className={color} onClick={() => onButtonClick(text)}>
      {text}
    </button>
  );
}
