import "../assets/css/style.css"
import { BsFillPlayCircleFill, BsFillPauseCircleFill, BsFillFileMusicFill } from 'react-icons/bs'
import { songdata } from "../assets/audio/audio"
const AudioPlayer = () => {
    const playlist = songdata.url
    const audio = new Audio(playlist)
    async function playMusic() {
        audio.loop = true;
        audio.volume = .04;
        audio.play()
    }

    function stopMusic() {
        audio.pause()
    }

    return (
        <div>
            <div>
                <button onClick={playMusic}>< BsFillPlayCircleFill /></button>
                <button onClick={stopMusic}>< BsFillPauseCircleFill /></button>
                <p><BsFillFileMusicFill/>Pokemon Collosseum - Pokemon Center<BsFillFileMusicFill/></p>
            </div>
        </div>
    )
}

export default AudioPlayer