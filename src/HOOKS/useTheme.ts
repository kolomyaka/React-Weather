import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";


// Создаем функцию, которая будем вызывать хук useContext
// которой мы передадим наш контекст 

export const useTheme = () => useContext(ThemeContext)

// Хук должен вернуть объект у которого будет 2 поля
// 1. Первое св-во это будет тема
// 2. Вторым будет метод для смены темы 