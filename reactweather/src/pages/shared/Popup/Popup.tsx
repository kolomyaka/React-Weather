import classNames from "classnames";
import React from "react";
import PopupSvgSelector from "../../../assets/icons/Popup/PopupSvgSelector";
import GlobalSvgSelector from "../../../assets/icons/global/GlobalSvgSelector";
import { useCustomSelector } from "../../../HOOKS/store";
import { Item } from "../../Home/components/ThisDayInfo/ThisDayInfo";
import ThisDayItem from "../../Home/components/ThisDayInfo/ThisDayItem";
import s from "./Popup.module.scss";
import '../../../styles/index.scss'
import { useDispatch } from "react-redux";
import { hideVision } from "../../../store/slices/popupSlices";


type Props = {
  isModal?: boolean
  todayName?: string
};


const Popup = ({ isModal, todayName }: Props) => {

  const dispatch = useDispatch()

  const items = [
    { icon_id: "temp", name: "температура", value: "20° - ощущается как 17°" },
    {
      icon_id: "pressure",
      name: "давление",
      value: "765 мм ртутного столба - нормальное",
    },
    { icon_id: "precipitation", name: "Осадки", value: "Без осадков" },
    { icon_id: "wind", name: "ветер", value: "3 м/с юго-запад - легкий ветер" },
  ];

  const isVisible = useCustomSelector(state => state.popupSlices.isVisible)
  const { temp, feels_like, wind_deg, wind_speed, icon, pressure } = useCustomSelector(state => state.popupSlices)


  const handleClick = () => {
    dispatch(hideVision())
  }
  console.log(icon);


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
              <div className={s.day__name}>Среда</div>
              <div className={s.day__img}>
                <PopupSvgSelector id={icon} />
              </div>
              <div className={s.day__time}>
                Время: <span>21:54</span>
              </div>
              <div className={s.day__city}>
                Город: <span>Санкт-Петербург</span>
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
