import "./recettes.scss"

import placeholder from "../../images/recettes-placeholder.jpg"
import carottesPesto from "../../images/recettes/carottes-pesto.jpg";
import carottesSoupe from "../../images/recettes/carottes-soupe.jpg";
import choukaleCurry from "../../images/recettes/chou-kale-curry.jpg";
import fèves from "../../images/recettes/fèves.jpg";
import poireaux from "../../images/recettes/poireaux-guacamole.jpg";

const Recettes = () => {
  return (
    <div className="recettes">
      <div className="recettes__section">
        <h1>
          Carotte
        </h1>
        <ul className="recettes__list">
          <li className="recette">
            <img src={carottesPesto} alt="placeholder" />
            <div className="recette__text">
              <h2>Pesto de fanes de carottes</h2>
              <p>PESTO DE FANES DE CAROTTES par Samar, (www.mesinspirationsculinaires.com) les fanes d’une botte de carotte (70-80 g). 50 g d’amandes entières ou de noix ou pignons. 50 g de parmesan jus d&apos;1/2 citron. 1 à 2 gousses d’ail 100 g d’huile d’olive Poivre-Rincer à l&apos;eau courant les fanes de carottes, les hacher grossièrement (en retirant les tiges). Dans le mixer verser les fanes de carottes, les gousses d&apos;ail pelées dégermées et hachées grossièrement, le parmesan, le jus de citron et les pignons (amandes ou noix). Poivrer et ajouter le 1⁄3 d&apos;huile d&apos;olive. Mixer afin de réduire en purée la préparation. Continuer à mixer tout en versant lentement le reste d&apos;huile d&apos;olive jusqu’à obtenir la consistance désirée (pensez à racler les parois du mixer de temps en temps). Il se peut qu’on n’ait pas besoin d&apos;utiliser la quantité́ totale de l&apos;huile ou au contraire en rajouter selon le goût de chacun. Verser le pesto dans un contenant, rajouter une couche fine d&apos;huile d&apos;olive afin de conserver ce dernier. Fermer le contenant et réserver au réfrigérateur. Notes : Si vous utilisez les noix, les griller au four avant de les utiliser pour plus de saveur. Ce pesto se conserve jusqu’à 2 semaines au réfrigérateur et jusqu’à 2 mois au congélateur dans des bacs à glaçon. On peut ajouter du piment d&apos;Espelette pour plus de goût. </p>
            </div>
          </li>
          {/* <li className="recette">
              <img src={carottesSoupe} alt="placeholder" />
              <div className="recette__text">
              <h2>Soupe froide carottes-orange</h2>
              <p>Odio eu feugiat pretium, nibh ipsum consequat nisl, vel pretium lectus quam id leo in vitae? Id nibh tortor, id aliquet lectus proin nibh nisl, condimentum id venenatis a, condimentum vitae sapien pellentesque? Eget aliquet nibh praesent tristique magna sit amet purus gravida quis blandit turpis cursus in hac habitasse.</p>
              </div>
              </li> */}
        </ul>
      </div>
      <div className="recettes__section">
        <h1>
          Chou kale
        </h1>
        <ul className="recettes__list">
          <li className="recette">
            <img src={choukaleCurry} alt="placeholder" />
            <div className="recette__text">
							<h2>Curry de chou Kale</h2>
              <p>Curry de chou kale (Recette très largement inspirée du blog : Amandes et basilic) Ingrédients: 1 bouquet de chou kale  2 tomates de taille moyenne (300g) ou ½ boîte de tomates pelées ou une brick de purée de tomates  2 pommes de terre 150g de petits pois surgelés (facultatif) 1 cuillère à café de graines de moutarde noire  1,5 cuillère à soupe de curry 1 cuillère à café de curcuma  1 à 2 cuillères à soupe de gingembre râpé (si on aime un peu relevé)  1 cuillère à café de sucre de canne roux  2 cuillères à soupe d’huile de colza (ou d’olive)  400 ml de lait de coco  200ml d’eau  Sel et poivre du moulin Instructions: Laver le chou kale, enlever la côte centrale puis le couper au couteau très grossièrement. Éplucher les pommes de terre, les laver ainsi que les tomates et les couper en petits cubes. Dans une cocotte à fond épais, faire chauffer l’huile et y jeter les graines de moutarde. Lorsque celles-ci commencent à sauter, ajouter le curry et le curcuma. Cuire environ 2 minutes en remuant. Intégrer alors les dés de tomates ou la boîte et, toujours en remuant, laisser cuire à feu doux environ 4 minutes. Ajouter alors les pommes de terre, le chou kale, les petits pois, le sucre et l’eau. À feu moyen cuire environ 5 minutes. Verser alors le lait de coco, ajouter le gingembre, saler, poivrer et couvrir. Poursuivre la cuisson à feu doux une vingtaine de minutes. Surveiller le curry et ajouter si nécessaire en cours de cuisson un peu d’eau ou de lait de coco. </p>
            </div>
          </li>
        </ul>
      </div>
      <div className="recettes__section">
        <h1>
          Fève
        </h1>
        <ul className="recettes__list">
          <li className="recette">
            <img src={fèves} alt="placeholder" />
            <div className="recette__text">
              <h2>Fève en cocotte</h2>
              <p>1kg de fèves tendres 2 oignons ou 1 botte d’oignons frais 2 barquettes de lardons Persil, sel, poivre Dans une cocotte-minute, mettre les fèves nettoyées, les oignons finement ciselés, les lardons. Les faire dorer 10 mn. Remuer, saler et poivrer, ajouter du persil ciselé  Fermer la cocotte et faire cuire 15 mn  Si on se sert d’un faitout, ajouter un peu d’eau et faire cuire 45mn Bonne dégustation Pour les végétariens, on peut remplacer les lardons par un épice en fin de cuisson, de la coriandre</p>
            </div>
          </li>
        </ul>
	    </div>
      <div className="recettes__section">
        <h1>
          Poireaux
        </h1>
        <ul className="recettes__list">
          <li className="recette">
            <img src={poireaux} alt="placeholder" />
            <div className="recette__text">
              <h2>Guacamole au verts de poireaux</h2>
              <p>Étape 1 Coupez les verts de poireaux en 2 dans la longueur et lavez-les abondamment pour enlever tout excès de sable ou de terre. Étape 2 Faites cuire les verts de poireaux dans une grande casserole d&apos;eau bouillante pendant 15 minutes. Étape 3 Égouttez-les et mixez-les au blender avec un fond d&apos;eau. Ajoutez à ce mélange la crème fraîche puis assaisonnez selon vos goûts: une pincée de curry, de gingembre et de piment pour ma part. Salez, poivrez et mélangez bien. Étape 4 Réservez ce mélange 30 minutes au frigo pour servir bien frais, en accompagnement de chips, de crudités etc... <a href="https://www.marmiton.org/recettes/recette_guacamole-aux-poireaux_223737.aspx">source</a>  </p>
            </div>
          </li>
        </ul>
      </div>	    
    </div>
  )
}

export default Recettes;
