import React from 'react'
import GlobalSvgSelector from '../../../../assets/icons/global/GlobalSvgSelector';
import { Weather } from '../../../../store/types/types';



import s from './ThisDay.module.scss';


type Props = {
  weather : Weather
}

const ThisDay = ({weather}: Props) => {

  const date = new Date();
  const currentHours = date.getHours();
  let currentMinutes = date.getMinutes();
  let currentTime;


  if (currentMinutes < 10) {
    currentTime = currentHours + ':0' + currentMinutes;
  } else {
    currentTime = currentHours + ':' + currentMinutes;
  }

  
  return (
    <section className={s.this__day}>
        <div className={s.top__block}>
            <div className={s.top__wrapper}>
                <div className={s.this__temp}>{Math.ceil(weather.main.temp)}</div>
                <div className={s.this__day_name}>Сегодня</div>      
            </div>
            <GlobalSvgSelector id='sun' />
        </div>
        <div className={s.bottom__block}>
            <div className={s.this__time}>Время: <span>{currentTime}</span></div>
            <div className={s.this__city}>Город: <span>{weather.name}</span></div>    
        </div>
    </section>
  )
}

export default ThisDay; 