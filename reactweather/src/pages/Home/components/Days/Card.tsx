import React from 'react'
import { Day } from './Days';
import GlobalSvgSelector from '../../../../assets/icons/global/GlobalSvgSelector';



import s from './Days.module.scss';


type Props = {
  day: Day
}

const Card = ({ day }: Props) => {

  const { dayName, day_info, icon_id, temp_day, temp_night, info } = day;

  

  return (
    <section className={s.card}>
      <div className={s.day}>{dayName}</div>
      <div className={s.day_info}>{day_info}</div>
      <div className={s.img}>
        <GlobalSvgSelector id={icon_id} />
      </div>
      <div className={s.temp_day}>{temp_day}</div>
      <div className={s.temp_night}>{temp_night}</div>
      <div className={s.info}>{info}</div>
    </section>
  )
}

export default Card; 