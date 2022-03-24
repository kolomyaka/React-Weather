import { ReactNode, useState } from "react"
import { Theme, ThemeContext } from "../context/ThemeContext"
import { changeCssRootVariables } from "../model/ChangeCssRootVariables"
import { storage } from "../model/Storage"

type Props = {
    children: ReactNode
}

// children - все то, что находится внутри компонента ThemeProvider !!!
export const ThemeProvider = ({ children, ...props }: Props) => {

    const [theme, setTheme] = useState<Theme>(
        storage.getItem('theme') || Theme.LIGHT
    );

    changeCssRootVariables(theme);



    // Функцию создаем, т.к указали, что setTheme нам ничего не возвращает
    // Поэтому передаем новую функцию, которая вызываем
    // setTheme внутри себя
    function changeTheme(theme: Theme) {
        storage.setItem('theme', theme);
        setTheme(theme);
        changeCssRootVariables(theme);
    }

    // Возвращаем компоненту, у которой есть метод .Provider
    // В аттр. value передаем объект, который будет иметь св-ва
    // и мет-ды нашей глобальной переменной   
    return <ThemeContext.Provider value={{
        theme,
        changeTheme
    }} {...props}>{children}</ThemeContext.Provider>
} 
