class Sound {

    static play(path) {
        var audio = new Audio(FileCache.getURL(path));
        audio.play();
    }
}