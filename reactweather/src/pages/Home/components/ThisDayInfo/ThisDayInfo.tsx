import React from 'react'

import s from './ThisDayInfo.module.scss';
import cloud from '../../../../assets/images/cloud.png';
import ThisDayItem from './ThisDayItem';
import { Weather } from '../../../../store/types/types';
import { usePressure, useWindDirection } from '../../../../HOOKS/useDayInfo';

type Props = {
  weather : Weather
}

export interface Item {
  icon_id: string
  name: string 
  value : string
}

const ThisDayInfo = ({weather}: Props) => {

  const items = [
    {icon_id: 'temp', name: 'температура', value : `${Math.floor(weather.main.temp)}° - ощущается как ${Math.floor(weather.main.feels_like)}°`},
    {icon_id: 'pressure', name: 'давление', value : usePressure()},
    {icon_id: 'precipitation', name: 'Осадки', value : 'Без осадков'},
    {icon_id: 'wind', name: 'ветер', value : `${Math.ceil(weather.wind.speed)} м/с ${useWindDirection()} - легкий ветер`},
  ]

  return (
    <section className={s.this__day_info}>
      <div className={s.this__day_info_items}>
        { items.map((item: Item) => (
          <ThisDayItem key={item.icon_id} item={item} />
        ))}
      </div>
      <img src={cloud} alt="cloud" className={s.cloud} />
    </section>
  )
}

export default ThisDayInfo; 