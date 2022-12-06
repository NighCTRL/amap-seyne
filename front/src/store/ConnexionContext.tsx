import { useState, createContext } from 'react'

interface IState {
  loggedIn: boolean
  // eslint-disable-next-line @typescript-eslint/ban-types
  setLoggedIn?: Function
}

export const ConnexionContext = createContext<IState>({
  loggedIn: false,
  setLoggedIn: () => null,
})

interface IProviderProps {
  children: React.ReactNode
}

const ConnexionContextProvider = ({ children }: IProviderProps) => {
  const [loggedIn, setLoggedIn] = useState(false)
  return (
    <ConnexionContext.Provider value={{ loggedIn, setLoggedIn }}>
      {children}
    </ConnexionContext.Provider>
  )
}

export default ConnexionContextProvider
