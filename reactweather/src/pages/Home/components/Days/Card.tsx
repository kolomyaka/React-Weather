import React, { ReactElement, useState } from 'react'
import { Day } from './Days';
import CardSvgSelector from '../../../../assets/icons/Card/CardSvgSelector';



import s from './Days.module.scss';
import Popup from '../../../shared/Popup/Popup';
import { WeeklyWeather } from '../../../../store/types/types';

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
}



// // интерфейс для пропсов
// interface ModalProps {
//   visible: boolean
//   title: string
//   content: ReactElement | string
//   footer: ReactElement | string
//   onClose: () => void
// }

// const Modal = ({
//   visible = false,
//   title = '',
//   content = '',
//   footer = '',
//   onClose,
// }: ModalProps) => {

//   // создаем обработчик нажатия клавиши Esc
//   const onKeydown = ({ key }: KeyboardEvent) => {
//     switch (key) {
//       case 'Escape':
//         onClose()
//         break
//     }
//   }

//   // c помощью useEffect цепляем обработчик к нажатию клавиш
//   // https://ru.reactjs.org/docs/hooks-effect.html
//   React.useEffect(() => {
//     document.addEventListener('keydown', onKeydown)
//     return () => document.removeEventListener('keydown', onKeydown)
//   })


//   // если компонент невидим, то не отображаем его
//   if (!visible) return null;

//   // или возвращаем верстку модального окна
//   return <div className="modal" onClick={onClose}>
//     <div className="modal-dialog" onClick={e => e.stopPropagation()}>
//       <div className="modal-header">
//         <h3 className="modal-title">{title}</h3>
//         <span className="modal-close" onClick={onClose}>
//           &times;
//         </span>
//       </div>
//       <div className="modal-body">
//         <div className="modal-content">{content}</div>
//       </div>
//       {footer && <div className="modal-footer">{footer}</div>}
//     </div>
//   </div>
// }



const Card = ({ temp, weather, dt, pressure, feelsLike, windDeg, windSpeed }: Props) => {


  let myDate = new Date(dt * 1000);
  let todayName = myDate.toLocaleString('ru', { weekday: "short" })
  let todayDate = myDate.toLocaleString('ru', { month: 'long', day: '2-digit' })

  const [isModal, setModal] = useState(false);

  const handleClick = () => {
    console.log(windSpeed);

  }

  const onClose = () => setModal(false);


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