import React from 'react'
import { Weather, WeeklyWeather } from '../../../../store/types/types';
import Card from './Card';

import s from './Days.module.scss';
import Tabs from './Tabs';

type Props = {
    weeklyWeather : WeeklyWeather
    weather : Weather
}

export type Day = {
    dayName : string
    day_info : string
    icon_id: string
    temp_day : number
    temp_night : number
    info : string
}



const Days = ({weeklyWeather, weather}: Props) => {

    console.log(weeklyWeather.daily[4].weather[0].main);
    

        let days: Array<Day> = [
            {
                dayName: 'Сегодня',
                day_info: '28 авг',
                icon_id: weather.weather[0].main,
                temp_day: Math.floor(weather.main.temp),
                temp_night: Math.floor(weeklyWeather.daily[0].temp.night),
                info : weeklyWeather.daily[0].weather[0].description
            },
            {
                dayName: 'Завтра',
                day_info: '29 авг',
                icon_id: weeklyWeather.daily[1].weather[0].main,
                temp_day: Math.floor(weeklyWeather.daily[1].temp.day),
                temp_night: Math.floor(weeklyWeather.daily[1].temp.night),
                info: weeklyWeather.daily[1].weather[0].description
            },
            {
                dayName: 'пн',
                day_info: '30 авг',
                icon_id: weeklyWeather.daily[2].weather[0].main,
                temp_day: Math.floor(weeklyWeather.daily[2].temp.day),
                temp_night: Math.floor(weeklyWeather.daily[2].temp.night),
                info: weeklyWeather.daily[2].weather[0].description
            },
            {
                dayName: 'вт',
                day_info: '31 авг',
                icon_id: weeklyWeather.daily[3].weather[0].main,
                temp_day: Math.floor(weeklyWeather.daily[3].temp.day),
                temp_night: Math.floor(weeklyWeather.daily[3].temp.night),
                info: weeklyWeather.daily[3].weather[0].description
            },
            {
                dayName: 'ср',
                day_info: '01 июл',
                icon_id: weeklyWeather.daily[4].weather[0].main,
                temp_day: Math.floor(weeklyWeather.daily[4].temp.day),
                temp_night: Math.floor(weeklyWeather.daily[4].temp.night),
                info: weeklyWeather.daily[4].weather[0].description
            },
            {
                dayName: 'чт',
                day_info: '02 июл',
                icon_id: weeklyWeather.daily[5].weather[0].main,
                temp_day: Math.floor(weeklyWeather.daily[5].temp.day),
                temp_night: Math.floor(weeklyWeather.daily[5].temp.night),
                info: weeklyWeather.daily[5].weather[0].description
            },
            {
                dayName: 'пт',
                day_info: '03 июл',
                icon_id: weeklyWeather.daily[6].weather[0].main,
                temp_day: Math.floor(weeklyWeather.daily[6].temp.day),
                temp_night: Math.floor(weeklyWeather.daily[6].temp.night),
                info: weeklyWeather.daily[6].weather[0].description
            }
        ];

        if (weeklyWeather.daily.length === 8) {
            return (
                <>
                    <Tabs />
                    <section className={s.days}>
                        { days.map((day: Day) => (
                            <Card day={day} key={day.dayName} />
                        ))}
                    </section>
                </>
              )
        } else {
            return <div></div>
        }

}

export default Days; 