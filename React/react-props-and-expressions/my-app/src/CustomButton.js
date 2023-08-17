import './CustomButton.css';

export default function CustomButton({ buttons }) {
  return buttons.map((button) => {
    return <button className={button.style}>{button.label}</button>;
  });
}
