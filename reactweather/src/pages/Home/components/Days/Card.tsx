import React from 'react'
import { Day } from './Days';
import CardSvgSelector from '../../../../assets/icons/Card/CardSvgSelector';



import s from './Days.module.scss';

type TempType = {
  day : number
  night : number
}

type WeatherType = {
  description : string
  main : string
}

type Props = {
  temp : TempType
  weather : Array<WeatherType>
  dt: number
}

const Card = ({ temp,weather,dt }: Props) => {
  
  let myDate = new Date(dt * 1000);
  let todayName = myDate.toLocaleString('ru', {weekday: "long"})
  let todayDate = myDate.toLocaleString('ru',{month: '2-digit', day: '2-digit'})  

  return (
    <section className={s.card} >
      <div className={s.day}>{todayName}</div>
      <div className={s.day_info}>{todayDate}</div>
      <div className={s.img}>
        <CardSvgSelector id={weather[0].main} />
      </div>
      <div className={s.temp_day}>{Math.floor(temp.day)}</div>
      <div className={s.temp_night}>{Math.floor(temp.night)}</div>
      <div className={s.info}>{weather[0].description}</div>
    </section>
  )
}

export default Card; 