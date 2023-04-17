class Mouse {
    static clientX = 0;
    static clientY = 0;
    static screenX = 0;
    static screenY = 0;
}

window.addEventListener("mousemove", (e) => {
    Mouse.clientX = e.clientX;
    Mouse.clientY = e.clientY;
    Mouse.screenX = e.screenX;
    Mouse.screenY = e.screenY;
});