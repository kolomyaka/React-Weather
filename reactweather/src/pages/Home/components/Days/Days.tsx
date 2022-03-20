import React from 'react'
import { useCustomSelector } from '../../../../HOOKS/store';
import { Weather, WeeklyWeather } from '../../../../store/types/types';
import Card from './Card';

import s from './Days.module.scss';
import Tabs from './Tabs';

type Props = {
    weeklyWeather: WeeklyWeather
    weather: Weather
}

export type Day = {
    dayName: string
    day_info: string
    icon_id: string
    temp_day: number
    temp_night: number
    info: string
}


const Days = ({ weeklyWeather, weather }: Props) => {

    const { daily } = useCustomSelector(state => state.weeklyWeatherSliceReducer.weeklyWeather)
    let arr = daily.slice(1)

    console.log(arr);


    return <div>
        <Tabs />
        <section className={s.days}>
            {
                arr.map((day: any) => (
                    <Card
                        temp={day.temp}
                        key={day.dt}
                        weather={day.weather}
                        dt={day.dt}
                        pressure={day.pressure}
                        feelsLike={day.feels_like.day}
                        windDeg={day.wind_deg}
                        windSpeed={day.wind_speed}
                    />
                ))
            }
        </section>
    </div>

}

export default Days; 