class FileCache {

    static cachedData = {};

    static getURL(url) {
        if (this.cachedData[url]){
            return this.cachedData[url];
        }
        else {
            setTimeout(async () => {
                var request = await fetch(url);
                var blob = await request.blob();
                this.cachedData[url] = URL.createObjectURL(blob);
            }, 0)
            return url;
        }
    }
}