import React from 'react'
import { Day } from './Days';
import CardSvgSelector from '../../../../assets/icons/Card/CardSvgSelector';



import s from './Days.module.scss';


type Props = {
  day: Day
}

const Card = ({ day }: Props) => {

  const { dayName, day_info, icon_id, temp_day, temp_night, info } = day;


  const handleClick = (dayName: string) => {
    console.log(icon_id);
    
  }

  return (
    <section className={s.card} onClick={() => handleClick(dayName)}>
      <div className={s.day}>{dayName}</div>
      <div className={s.day_info}>{day_info}</div>
      <div className={s.img}>
        <CardSvgSelector id={icon_id} />
      </div>
      <div className={s.temp_day}>{temp_day}</div>
      <div className={s.temp_night}>{temp_night}</div>
      <div className={s.info}>{info}</div>
    </section>
  )
}

export default Card; 