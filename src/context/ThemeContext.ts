import { createContext } from "react";


type Props = {
    theme: Theme
    changeTheme: (theme: Theme) => void
}

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark'
}


// Создаем переменую из которой будем делать глобальную для всех компонент
export const ThemeContext = createContext<Props>({
    // Функции возвращает объект, в который мы указываем, 
    // какие св-ва и методы компонент будет иметь
    theme: Theme.LIGHT,
    changeTheme: () => { }
});