
export type Weather = {
    main : {
        temp : number
        feels_like: number
        pressure : number
    }
    name : string
    wind : {
        speed : number
        deg : number
    }
}