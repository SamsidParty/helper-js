window.CSS.inject = (styleString) => {
    const style = document.createElement('style');
    style.textContent = styleString;
    document.head.append(style);
}

window.CSS.isDarkMode = () => window.matchMedia('(prefers-color-scheme: dark)').matches;

window.CSS.setVariable = (variable, value) => {
    window.CSS.global.setProperty("--" + variable, "value");
}

addEventListener("DOMContentLoaded", () => {
    window.CSS.global = document.querySelector(":root").style;
    window.CSS.body = document.body.style;
});

