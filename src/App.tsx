import './App.css';
import AudioPlayer from './components/AudioPlayer';
import A5 from './audio/piano-notes/A5.mp3'
import G5 from './audio/piano-notes/Gb5.mp3'

function App() {
  return (
    <div>
      <AudioPlayer audio={A5}/>
      <AudioPlayer audio={G5}/>

    </div>
  );
}

export default App;