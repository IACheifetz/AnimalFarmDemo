import './Animal.css';

const Animal = ({ type = '', name = '', says = '' }) => (
  <div className="animal-card">
    <img alt={type} src={`/${type}.svg`} />
    <span className="name">{name}</span>
    <span className="saying">{says}</span>
  </div>
);

export default Animal;