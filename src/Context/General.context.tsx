import { createContext, ReactNode, useState } from "react";
import { Character } from "../Interfaces/character.interface";

interface ContextDefault{
    page: number ,
    language: string,
    characters: Character[] 
    status: string,
    species: string
    updateCharacters: (changed: Character[] ) => void,
    updatePage: (num: number) => void,
    updateStatus: (changed: string) => void
    updateSpecies: (changed: string) => void
    updateLanguage: (changed: string) => void
}

const ContextDefaultValues: ContextDefault = {
    page:1,
    language: 'en',
    characters: [],
    status: '',
    species: '',
    updateCharacters: ()=>{},
    updateLanguage: ()=>{},
    updatePage: ()=>{},
    updateSpecies: ()=>{},
    updateStatus:()=>{}
}

export const GeneralContext = createContext(ContextDefaultValues)

interface GeneralContextProviderProps{
    children: ReactNode
}

export const GeneralContextProvider = ({children}:GeneralContextProviderProps)=>{
    const [page, setPage] = useState<number >(1);
      const [status, setStatus] = useState<string>('');
      const [species, setSpecies] = useState<string>('');
      const [language, setLanguage] = useState('en');
      const[characters,setCharacters] = useState<Character[] >([])

      const updatePage=(num: number)=>{
        setPage(num)
      }

      const updateStatus=(changed: string)=>{
        setStatus(changed)
      }

      const updateSpecies = (changed: string)=>{
        setSpecies(changed)
      }

      const updateLanguage = (changed:string)=>{
        setLanguage(changed)
      }
      const updateCharacters=(changed:Character[])=>{
        
        console.log(changed)
        setCharacters(changed)
      }
    return(
        <GeneralContext.Provider value={{page,status,species,language,characters,updateCharacters,updateLanguage,updatePage,updateSpecies,updateStatus}}>
            {children}
        </GeneralContext.Provider>
    )
}
