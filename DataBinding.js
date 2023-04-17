class DataBinding {

    target;
    item;

    constructor(target, item) {
        this.target = target;
        this.item = item;
    }

    set value(newValue) {
        this.target[this.item] = newValue;
    }

    get value() {
        return this.target[this.item];
    }
}