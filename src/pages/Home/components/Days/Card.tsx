import React from 'react'
import CardSvgSelector from '../../../../assets/icons/Card/CardSvgSelector';

import { setCurrentData, toggleVision } from "../../../../store/slices/popupSlices";
import s from './Days.module.scss';
import { useDispatch } from 'react-redux';

type TempType = {
  day: number
  night: number
}

type WeatherType = {
  description: string
  main: string
}

type Props = {
  temp: TempType
  weather: Array<WeatherType>
  dt: number
  pressure: number
  windDeg: number
  windSpeed: number
  feelsLike: number
  icon: string
}


const Card = ({ temp, weather, dt, pressure, feelsLike, windDeg, windSpeed, icon }: Props) => {

  const dispatch = useDispatch()

  let myDate = new Date(dt * 1000);
  let todayName = myDate.toLocaleString('ru', { weekday: "short" })
  let todayNameForPopup = myDate.toLocaleString('ru', { weekday: "long" })

  let todayDate = myDate.toLocaleString('ru', { month: 'long', day: '2-digit' })

  const handleClick = () => {
    dispatch(toggleVision())
    let currentDate = {
      feels_like: feelsLike,
      pressure: pressure,
      temp: temp.day,
      wind_deg: windDeg,
      wind_speed: windSpeed,
      icon: icon,
      todayName: todayNameForPopup,
      todayDate: todayDate,
    }
    dispatch(setCurrentData(currentDate))
  }

  return (
    <>
      <section className={s.card} onClick={handleClick} >
        <div className={s.day}>{todayName}</div>
        <div className={s.day_info}>{todayDate}</div>
        <div className={s.img}>
          <CardSvgSelector id={weather[0].main} />
        </div>
        <div className={s.temp_day}>{Math.floor(temp.day)}</div>
        <div className={s.temp_night}>{Math.floor(temp.night)}</div>
        <div className={s.info}>{weather[0].description}</div>
      </section>
    </>
  )
}

export default Card; 