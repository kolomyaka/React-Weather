import { Theme } from "../context/ThemeContext";


export function changeCssRootVariables(theme: Theme) {
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
}

