
const AudioPlayer = () => {

    function playPokemonCenterMusic() {
        var audio = document.createElement('audio');
        audio.src = 'https://www.youtube.com/watch?v=es_E2fdNa8M';
        audio.loop = true;
        audio.play();
    }

    function stopPokemonCenterMusic() {
        var audio = document.createElement('audio');
        audio.src = 'https://www.youtube.com/watch?v=es_E2fdNa8M';
        audio.loop = true;
        audio.pause();
    }

    return (
        <div>
            <div>
                <button onClick={playPokemonCenterMusic()}>Play</button>
            </div>
            <div>
                <button onClick={stopPokemonCenterMusic()}>Stop</button>
            </div>
        </div>
    )
}

export default AudioPlayer