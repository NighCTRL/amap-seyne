
import {useContext} from "react";
import ProducteurData from "../../types/types"
import { BsFillPencilFill } from "react-icons/bs";
import { ConnexionContext } from "../../store/ConnexionContext";
import "./producteur.scss"
import { Link } from "react-router-dom";

interface Props {
  data: ProducteurData,
}
const Producteur: React.FC<Props["data"]> = ({ prod_id, prod_name, prod_type, prod_loca, prod_pres }: Props["data"]) => {
  const {loggedIn, setLoggedIn} = useContext(ConnexionContext)
  return (
		<div className="producteur">
			<div className="producteur__image">
        <img src={require(`../../images/producteurs/${prod_id}.jpg`)} alt="placeholder" />
			</div>
			<div className="producteur__text">
        <h1>{prod_name}</h1>
        <span>
          {prod_type} <br />
          {/* {prod_loca} */}
        </span>
        <p className="producteur__text-narrow">{prod_pres}</p>
				{loggedIn &&
				 <Link to={`/edit/producteurs/${prod_id}`} className="icon">
					 <BsFillPencilFill />
				 </Link>
				}
			</div>
		</div>
  )
}

export default Producteur;
