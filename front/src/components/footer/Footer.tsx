import { useContext } from 'react'
import { Link } from 'react-router-dom'
import './footer.scss'
import { ConnexionContext } from '../../store/ConnexionContext'
import { AiOutlineInstagram } from 'react-icons/ai'
import { toast } from 'react-toastify'

const Footer: React.FC = () => {
  const { loggedIn, setLoggedIn } = useContext(ConnexionContext)

  const logout = () => {
    setLoggedIn?.(!loggedIn)
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    toast.success('Vous êtes bien déconnecté')
  }
  return (
    <div className='footer'>
      <Link to='/contact'>Contact</Link>
      <Link to='/mentions'>Mentions légales</Link>
      <a href='https://www.instagram.com/amaplaseynesurmer' className='footer__socials'>
        <span>Nous suivre </span>
        <AiOutlineInstagram />
      </a>
      {loggedIn ? (
        <a href='#' onClick={logout}>
          déconnexion
        </a>
      ) : (
        <Link to='/connexion'>Se connecter</Link>
      )}
    </div>
  )
}

export default Footer
