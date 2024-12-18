import { Character } from "./character.interface"

export interface ResponseApi{
    
        characters: {
            info:{
                next: number | null
                prev: number |null
            },
            results: Character[]
        }

}
