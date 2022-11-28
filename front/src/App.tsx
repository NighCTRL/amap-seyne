import { useEffect } from "react"
import { Navbar, Footer } from './components/index'
import { ToastContainer } from 'react-toastify';
import { Amap, Contact, Home, Livraisons, Producteurs, Recettes, Journal, Connexion, EditProducteur, Mentions } from './pages';
import { Route, Routes } from 'react-router-dom';
import ConnexionContextProvider from "./store/ConnexionContext";
import './styles.scss'
import './reset.css'

const accessToken = localStorage.getItem("accessToken");

function App() {

  return (
		<ConnexionContextProvider >
      <div className="App">
				<Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/producteurs" element={<Producteurs />} />
					<Route path="/edit/producteurs/:id" element={<EditProducteur />} />
          <Route path="/livraisons" element={<Livraisons />} />
          <Route path="/amap" element={<Amap />} />
          <Route path="/recettes" element={<Recettes />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/mentions" element={<Mentions />} />
        </Routes>
        <Footer />
        <ToastContainer />
      </div>
    </ConnexionContextProvider >
  );
}

export default App;
