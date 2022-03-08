import React from 'react'
import Select from 'react-select';
import GlobalSvgSelector from '../../../../assets/icons/global/GlobalSvgSelector';

import s from './ThisDayInfo.module.scss';
import cloud from '../../../../assets/images/cloud.png';
import ThisDayItem from './ThisDayItem';

type Props = {}

export interface Item {
  icon_id: string
  name: string 
  value : string
}



const ThisDayInfo = (props: Props) => {

  const items = [
    {icon_id: 'temp', name: 'температура', value : '20° - ощущается как 17°'},
    {icon_id: 'pressure', name: 'давление', value : '765 мм ртутного столба - нормальное'},
    {icon_id: 'precipitation', name: 'Осадки', value : 'Без осадков'},
    {icon_id: 'wind', name: 'ветер', value : '3 м/с юго-запад - легкий ветер'},
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