import classNames from "classnames";
import React, { useEffect } from "react";
import PopupSvgSelector from "../../../assets/icons/Popup/PopupSvgSelector";
import GlobalSvgSelector from "../../../assets/icons/global/GlobalSvgSelector";
import { useCustomSelector } from "../../../HOOKS/store";
import { Item } from "../../Home/components/ThisDayInfo/ThisDayInfo";
import ThisDayItem from "../../Home/components/ThisDayInfo/ThisDayItem";
import s from "./Popup.module.scss";
import '../../../styles/index.scss'
import { useDispatch } from "react-redux";
import { hideVision } from "../../../store/slices/popupSlices";
import { usePressure, useWindDirection } from "../../../HOOKS/useDayInfo";


type Props = {
  isModal?: boolean
};


const Popup = ({ isModal }: Props) => {

  const dispatch = useDispatch()

  const { temp, feels_like, wind_deg, wind_speed, icon, pressure, todayName } = useCustomSelector(state => state.popupSlices)


  const items = [
    { icon_id: "temp", name: "температура", value: `${Math.floor(temp)}° - ощущается как ${Math.floor(feels_like)}°` },
    {
      icon_id: "pressure",
      name: "давление",
      value: usePressure(pressure),
    },
    { icon_id: "precipitation", name: "Осадки", value: "Без осадков" },
    { icon_id: "wind", name: "ветер", value: `${Math.floor(wind_speed)} м/с ${useWindDirection(wind_deg)} - легкий ветер` },
  ];

  const isVisible = useCustomSelector(state => state.popupSlices.isVisible)
  const currentCity = useCustomSelector(state => state.popupSlices.currentCity)

  const date = new Date();
  const currentHours = date.getHours();
  let currentMinutes = date.getMinutes();
  let currentTime;


  if (currentMinutes < 10) {
    currentTime = currentHours + ':0' + currentMinutes;
  } else {
    currentTime = currentHours + ':' + currentMinutes;
  }

  const hidePopup = (e: KeyboardEvent) => {
    if (e.key === 'Escape' || e.key === '1') {
      dispatch(hideVision())
    }
  }

  const handleClick = () => {
    dispatch(hideVision())
  }

  useEffect(() => {
    document.addEventListener('keydown', hidePopup)

  }, [])


  return (
    <>
      <div className={s.blur + ' ' + classNames({
        'open': isVisible,
        'close': !isVisible
      })}>
        <section className={s.popup + ' ' + classNames({
          'open': isVisible,
          'close': !isVisible
        })}>
          <div className={s.popup__block}>
            <div className={s.day}>
              <div className={s.day__temp}>{Math.floor(temp)}°</div>
              <div className={s.day__name}>{todayName}</div>
              <div className={s.day__img}>
                <PopupSvgSelector id={icon} />
              </div>
              <div className={s.day__time}>
                Время: <span>{currentTime}</span>
              </div>
              <div className={s.day__city}>
                Город: <span>{currentCity}</span>
              </div>
            </div>
            <div className={s.this__day_info_items}>
              {items.map((item: Item) => (
                <ThisDayItem key={item.icon_id} item={item} />
              ))}
            </div>
          </div>
          <div className={s.closeB} onClick={handleClick}>
            <GlobalSvgSelector id="close" />
          </div>
        </section>
      </div>
    </>
  );
};

export default Popup;
