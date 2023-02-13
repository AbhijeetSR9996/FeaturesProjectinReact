export const themes = {
    light: {
    foreground: "#b440de",
    background: "#f05983",
    color: "#f2f7fa"
    },
    dark: {
    foreground: "#bcf55b",
    background: "#de81fc",
    color: "black"
    }
    };
    const testValue = "Other Value";
    const defaultContext = {
    theme: themes.light,
    toggleTheme: () => {},
    value: testValue,
    setValue: () => {}
    };
    export default defaultContext;