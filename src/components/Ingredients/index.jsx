import PropTypes from 'prop-types';
import { Container } from "./styles";
import Lettuce from "../../assets/alface.png";
import Plum from "../../assets/ameixa.png";
import Almonds from "../../assets/amendoas.png";
import Anise from "../../assets/aniz.png";
import Coffee from "../../assets/cafe.png";
import Shrimp from "../../assets/camarao.png";
import LowerLeg from "../../assets/canela.png";
import EggWhites from "../../assets/claras.png";
import Damascus from "../../assets/damasco.png";
import Flour from "../../assets/farinha.png";
import Lemon from "../../assets/limao.png";
import Apple from "../../assets/maca.png";
import PassionFruit from "../../assets/maracuja.png";
import Pasta from "../../assets/massa.png";
import Bread from "../../assets/pao.png";
import BreadNaan from "../../assets/paonaan.png";
import Cucumber from "../../assets/pepino.png";
import Peach from "../../assets/pessego.png";
import Pesto from "../../assets/pesto.png";
import Ham from "../../assets/presunto.png";
import Radish from "../../assets/rabanete.png";
import Arugula from "../../assets/rucula.png";
import Tomato from "../../assets/tomate.png";
import Whiskey from "../../assets/whiskey.png";

export function Ingredients({ ingredient }) {
  function fetchImageIngredient(name) {
    const ingredient = name.toLowerCase().trim();
    // Map of ingredient names to image imports
    const ingredientsMap = {
      alface: Lettuce,
      ameixa: Plum,
      amêndoas: Almonds,
      aniz: Anise,
      café: Coffee,
      camarão: Shrimp,
      canela: LowerLeg,
      claras: EggWhites,
      damasco: Damascus,
      farinha: Flour,
      limão: Lemon,
      maçã: Apple,
      maracujá: PassionFruit,
      massa: Pasta,
      pão: Bread,
      "pão naan": BreadNaan,
      pepino: Cucumber,
      pêssego: Peach,
      pesto: Pesto,
      presunto: Ham,
      rabanete: Radish,
      rúcula: Arugula,
      tomate: Tomato,
      whiskey: Whiskey,
    };
    return ingredientsMap[ingredient] || Apple;
  }
  
  const result = fetchImageIngredient(ingredient);
  
  return (
    <Container>
      <img src={result} alt="Ingredientes que são usados no seu prato." />
      <span className="ingredient-name">{ingredient}</span>
    </Container>
  );
}

Ingredients.propTypes = {
  ingredient: PropTypes.string.isRequired
};