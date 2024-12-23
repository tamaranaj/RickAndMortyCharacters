export interface Character{
    id: string,
    name: string,
    image: string,
    species: string,
    gender: Gender,
    origin: Origin,
    status: string,

}
export enum Gender {
    MALE = 'Male',
    FEMALE = 'Female',
    UNKNOWN = 'unknown'
}

export type Origin={
    dimension: string,
    name: string
}
