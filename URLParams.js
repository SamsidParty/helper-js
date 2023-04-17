class URLParams {
    static get(param) {
        var url = new URL(window.location.href);
        return url.searchParams.get(param);
    }

    static getAll() {
        var url = new URL(window.location.href);
        return Object.fromEntries(url.searchParams);
    }
}