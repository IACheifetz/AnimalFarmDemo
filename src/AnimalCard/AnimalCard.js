import './AnimalCard.css';

export default function AnimalCard(props) {
  return (
    <div className="animal-card">
      <img alt={props.type} src={`../public/images/${props.type}.svg`} />
      <span className="name">{props.name}</span>
      <span className="saying">{props.says}</span>
    </div>
  );
}