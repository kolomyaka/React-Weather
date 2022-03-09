import React from 'react'
import Card from './Card';




import s from './Days.module.scss';
import Tabs from './Tabs';


type Props = {}

export type Day = {
    dayName : string
    day_info : string
    icon_id: string
    temp_day : string
    temp_night : string
    info : string
}

const Days = (props: Props) => {

    const days: Array<Day> = [
        {
            dayName: 'Сегодня',
            day_info: '28 авг',
            icon_id: 'small_rain_sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Небольшой дождь и солнце' 
        },
        {
            dayName: 'Завтра',
            day_info: '29 авг',
            icon_id: 'small_rain',
            temp_day: '+15',
            temp_night: '+10',
            info: 'Небольшой дождь' 
        },
        {
            dayName: 'пн',
            day_info: '30 авг',
            icon_id: 'small_rain_sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Небольшой дождь и солнце' 
        },
        {
            dayName: 'вт',
            day_info: '31 авг',
            icon_id: 'rain',
            temp_day: '+13',
            temp_night: '+9',
            info: 'Дожь' 
        },
        {
            dayName: 'ср',
            day_info: '01 июл',
            icon_id: 'mainly_cloudy',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Облачно' 
        },
        {
            dayName: 'чт',
            day_info: '02 июл',
            icon_id: 'sunny',
            temp_day: '+20',
            temp_night: '+16',
            info: 'Солнечно' 
        },
        {
            dayName: 'пт',
            day_info: '03 июл',
            icon_id: 'small_rain',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Небольшой дождь' 
        }
    ];

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
}

export default Days; 