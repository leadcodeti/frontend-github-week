import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { UserProps } from "../types/props";


interface UserContextProps {
   userName:string,
   registerEmail:(name:string) => void,
}

interface UserProviderProps {
    children: ReactNode;
}

const usersContext = createContext<UserContextProps>( {} as UserContextProps)

export function UserProvider ({children}: UserProviderProps){
    const [users, setUsers] = useState<UserProps[]>([]);
    const [registerUserEmail, setRegisterUserEmail] = useState('')
    const [userName, setUserName] = useState('')
    const user = users.find((user) => {return user} );

    useEffect(()=>{
        async function getUser(){
          await api.get('/users').then(resp =>{
            console.log(resp.data)
            setUsers(resp.data)
          })
        }
        getUser();
      },[]);

      console.log(userName);

    function registerEmail(email:string){
      setRegisterUserEmail(email)
    }

    function validationName(){
      if(user?.email === registerUserEmail){
        setUserName(user.name)
      }
    }

    validationName()

    return(
        <usersContext.Provider value={{ userName,registerEmail }}>
          {children}
        </usersContext.Provider>
    )

}

export function UserContext (){
    const context = useContext(usersContext);
    return context;
}