import './AnimalList.css';
import Animal from './Animal/Animal.js';

const AnimalList = ({ animals = [] }) => {

  return (
    <div>
      {animals.map((animal, index) => <Animal key={`animal-list-number-${index + 1}`} name={animal.name} type={animal.type} says={animal.says} />)}
    </div>
  );
};

export default AnimalList;