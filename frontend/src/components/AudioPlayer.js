import "../assets/css/style.css"
import play_button from "../assets/images/play_button.png"
import stop_button from "../assets/images/stop_button.png"

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
                <button onClick={playPokemonCenterMusic()}>< img src={play_button} alt="Play"  /></button>
            </div>
            <div>
                <button onClick={stopPokemonCenterMusic()}><img src={stop_button} alt="stop" className="stopbtn"/></button>
            </div>
        </div>
    )
}

export default AudioPlayer