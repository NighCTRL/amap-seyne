import './navbar.scss'
import { useState } from 'react'
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom'

const Navbar: React.FC = () => {
  const [clicked, setClicked] = useState(false)

  return (
    <div className='nav'>
      <img className='nav__logo' src={logo} alt="logo de l'amap" />
      <span className='nav__subtitle'>Amap la Seyne sur Mer</span>
      <div
        className={clicked ? 'nav__button clicked' : 'nav__button'}
        onClick={() => setClicked(!clicked)}
      >
        <div className='hint-background' />
        <div className='burger'>
          <div className='bar-1' />
          <div className='bar-2' />
          <div className='bar-3' />
        </div>
      </div>
      <div
        className={clicked ? 'nav__links clicked' : 'nav__links'}
        onClick={() => setClicked(!clicked)}
      >
        <Link to='/'>accueil</Link>
        <Link to='/producteurs'>nos paysans bio</Link>
        <Link to='/livraisons'>livraisons</Link>
        <Link to='/amap'>l&apos;amap</Link>
        <Link to='/recettes'>recettes</Link>
        <Link to='/contact'>contact</Link>
        <Link to='/journal'>feuilles de chou</Link>
      </div>
    </div>
  )
}

export default Navbar
