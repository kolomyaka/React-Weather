import React from 'react'

import GlobalSvgSelector from '../../../../assets/icons/global/GlobalSvgSelector';

import s from './ThisDayInfo.module.scss';
import cloud from '../../../../assets/images/cloud.png';
import ThisDayItem from './ThisDayItem';
import { Weather } from '../../../../store/types/types';
import { usePressure, useWindDirection } from '../../../../HOOKS/useDayInfo';
import { useSelector } from 'react-redux';

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
    {icon_id: 'temp', name: 'температура', value : `${Math.ceil(weather.main.temp)}° - ощущается как ${Math.ceil(weather.main.feels_like)}°`},
    {icon_id: 'pressure', name: 'давление', value : usePressure()},
    {icon_id: 'precipitation', name: 'Осадки', value : 'Без осадков'},
    {icon_id: 'wind', name: 'ветер', value : `${weather.wind.speed} м/с ${useWindDirection()} - легкий ветер`},
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