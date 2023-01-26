import { createContext, useEffect, useState } from "react"
import { UserData } from "../pages/Conta"
import { getAllLocalStorage } from "../services/storage"

interface IAppContext {
    userData: UserData,
    setUserData: (user: UserData) => void
    isLoggedIn: boolean,
    setIsLoggedIn: (isLoggedIn: boolean) => void
}
  
export const AppContext = createContext({} as IAppContext)
  
export const AppContextProvider = ({ children }: any) => {
    const [ isLoggedIn, setIsLoggedIn ] = useState<boolean>(false)
    const [userData, setUserData] = useState<UserData>({} as UserData)
    const storage = getAllLocalStorage()

    useEffect(() => {
      if(storage){
        const { login } = JSON.parse(storage)
        setIsLoggedIn(login)
      }
    }, [])
  
    return (
      <AppContext.Provider value={{ userData, isLoggedIn, setIsLoggedIn, setUserData }}>
        { children }
      </AppContext.Provider>
    )
}
