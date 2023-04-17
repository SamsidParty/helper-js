Object.defineProperty(window.Element.prototype, "onEnterKey", {
    set : function (callback) {
        this.addEventListener("keyup", (e) => {
            if (e.key === "Enter") {
                callback(e);
            }
        });
    }
});

Object.defineProperty(window.Element.prototype, "onEscapeKey", {
    set : function (callback) {
        this.addEventListener("keyup", (e) => {
            if (e.key === "Escape") {
                callback(e);
            }
        });
    }
});

Object.defineProperty(window.Element.prototype, "onTabKey", {
    set : function (callback) {
        this.addEventListener("keyup", (e) => {
            if (e.key === "Tab") {
                callback(e);
            }
        });
    }
});

Object.defineProperty(window.Element.prototype, "onKey", {
    set : function (tuple) {
        this.addEventListener("keyup", (e) => {
            if (e.key === tuple[0]) {
                tuple[1].call(window, e);
            }
        });
    }
});