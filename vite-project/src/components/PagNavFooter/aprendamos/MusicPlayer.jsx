
import "./aprendamos.css"

const MusicPlayer = () => (
  <div className="music-player">
    <img className="album-cover" src="./pic/imagen5.jpg"></img>
    <div className="song-info">
      <h2 className="song-title">Relajación</h2>
      <h3 className="artist">Xhisfire</h3>
    </div>
    {/* <audio src="/audio/classicalpiano.mp3" controls></audio> */}
  </div>
);

export default MusicPlayer;
