import React, { useEffect, useState } from "react";
import Select from "react-select";

import GlobalSvgSelector from "../../../assets/icons/global/GlobalSvgSelector";
import s from "./Header.module.scss";

type Props = {};

const Header = (props: Props) => {
  const options = [
    { value: "city-1", label: "Санкт-Петербург" },
    { value: "city-2", label: "Москва" },
    { value: "city-3", label: "Мурманск" },
  ];

  const selectStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: 0 ? "#4F4F4F" : "rgba(71,147,255, .2)",
      width: "194px",
      height: "37px",
      border: "none",
      borderRadius: "10px",
      zIndex: 1000000,
    }),
    singleValue: (styles: any) => ({
      ...styles,
      color: theme === 'light' ? '#000' : '#fff',
    }),
  };

  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    // Функция для изменения темы
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    // Теперь в зависимости от значения переменной темы, изменяем css свойства
    const root = document.querySelector(":root") as HTMLElement;

    const components = [
      'body-background',
      "components-background",
      "card-background",
      "card-shadow",
      "text-color",
    ];

    components.forEach((component) => {
        root.style.setProperty(`--${component}-default`,
        `var(--${component}-${theme})`
        );
    })
  }, [theme]);

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
          defaultValue={options[0]}
          styles={selectStyles}
          options={options}
        />
      </div>
    </header>
  );
};

export default Header;
