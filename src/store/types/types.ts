
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
    weather : Array<WeatherArray>
}

type WeatherArray = {
    main : string
}

export type WeeklyWeather = {
    daily : Array<daily>
}

type daily = {
    temp : {
        day : number
        night : number
    }
    feels_like : {
        day : number
    }
    wind_deg : number
    wind_speed : number
    dt : number
    weather : Array<Description>
}

type Description = {
    description : string
    main : string
}