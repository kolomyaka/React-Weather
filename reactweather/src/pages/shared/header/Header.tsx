import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Select from "react-select";

import GlobalSvgSelector from "../../../assets/icons/global/GlobalSvgSelector";
import { Theme } from "../../../context/ThemeContext";
import { useTheme } from "../../../HOOKS/useTheme";
import { fetchCurrentWeather } from "../../../store/thunks/fetchCurrentWeather";
import s from "./Header.module.scss";

type Props = {};

const Header = (props: Props) => {

  const dispatch = useDispatch();

  const theme = useTheme();

  const options = [
    { value: "Sankt-Peterburg", label: "Санкт-Петербург" },
    { value: "Moscow", label: "Москва" },
    { value: "Murmansk", label: "Мурманск" },
  ];

  const selectStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: theme.theme === Theme.DARK ? "#4F4F4F" : "rgba(71,147,255, .2)",
      width: "194px",
      height: "37px",
      border: "none",
      borderRadius: "10px",
      position: 'relative',
      top:0,
      right:0,
      zIndex: 10000000,
    }),
    singleValue: (styles: any) => ({
      ...styles,
      position: 'relative',
      zIndex: 1000,
      color: theme.theme === Theme.LIGHT ? '#000' : '#fff',
    }),
  };

  const changeTheme = () => {
    theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  };


  const changeSelect = (e: any) => {
    dispatch(fetchCurrentWeather(e.value))
  }

  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <GlobalSvgSelector id="header-logo" />
        </div>
        <div className={s.title}>React Weather</div>
      </div>
      <div className={s.wrapper}>
        <div className={s.change_theme} onClick={changeTheme}>
          <GlobalSvgSelector id="change-theme" />
        </div>
        <Select
          onChange={changeSelect}
          defaultValue={options[0]}
          styles={selectStyles}
          options={options}
        />
      </div>
    </header>
  );
};

export default Header;
