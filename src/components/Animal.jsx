import { data } from "../utils/constants.js";

import "./Animal.css";

function Animal({ selectedAnimal }) {
  let animal = data.find((item) => {
    return item.name == selectedAnimal;
  });

  animal = animal?.image ? animal : data.find(item => item.name == "default");

  return <img src={animal.image} alt={animal.name} className="animal"/>;
}
export default Animal;