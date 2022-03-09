import React from "react";
import GlobalSvgSelector from "../../../assets/icons/global/GlobalSvgSelector";
import { Item } from "../../Home/components/ThisDayInfo/ThisDayInfo";
import ThisDayItem from "../../Home/components/ThisDayInfo/ThisDayItem";
import s from "./Popup.module.scss";

type Props = {};

const Popup = () => {
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

  return (
    <>
      <div className={s.blur}>
        <section className={s.popup}>
          <div className={s.day}>
            <div className={s.day__temp}>12°</div>    
            <div className={s.day__name}>Среда</div>
            <div className={s.day__img}>
                <GlobalSvgSelector id='small_rain_sun' />    
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
          <div className={s.close}>
            <GlobalSvgSelector id="close" />
          </div>
        </section>
      </div>
    </>
  );
};

export default Popup;
