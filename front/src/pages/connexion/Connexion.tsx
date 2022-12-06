/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useContext } from 'react'
import './connexion.scss'
import axios from 'axios'
import { Navigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { ConnexionContext } from '../../store/ConnexionContext'

const Connexion: React.FC = () => {
  const { loggedIn, setLoggedIn } = useContext(ConnexionContext)

  const [{ email, password }, setCredentials] = useState({
    email: '',
    password: '',
  })

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const res = await axios
      .post(
        `${process.env.REACT_APP_NODE_URL}/connexion`,
        { email: email, password: password },
        { headers: { 'Content-type': 'Application/json' }, withCredentials: true },
      )
      .then((res) => {
        setLoggedIn?.(!loggedIn)
        const { accessToken, refreshToken } = res.data
        localStorage.setItem('accessToken', accessToken)
        localStorage.setItem('refreshToken', refreshToken)
        toast.success('connexion réussie')
      })
      .catch((e) => console.log('ça marche pas' + e))
  }

  if (loggedIn) return <Navigate to='/' />

  return (
    <div className='connexion'>
      <form className='connexion__form' onSubmit={handleSubmit}>
        <p className='disclaimer'>
          Attention seul les administrateurs déjà enregistré peuvent se connecter
        </p>
        <div>
          <label htmlFor='email'>email</label>
          <input
            className='form__email'
            type='email'
            placeholder='amap@test.fr'
            id='email'
            name='email'
            required
            value={email}
            onChange={(e) =>
              setCredentials({
                email: e.target.value,
                password,
              })
            }
          />
        </div>
        <div>
          <label htmlFor='password'>mot de passe</label>
          <input
            className='form__password'
            type=' password'
            placeholder='mot de passe'
            id='password'
            name='password'
            value={password}
            onChange={(e) =>
              setCredentials({
                email,
                password: e.target.value,
              })
            }
            required
          />
        </div>
        <button type='submit'>Se connecter</button>
        {loggedIn && <h2>wow you are logged in</h2>}
      </form>
    </div>
  )
}

export default Connexion
