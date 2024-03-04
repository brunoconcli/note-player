import React, { useRef, useState } from 'react'

interface AudioPlayerProps {
  audio: string
}

function AudioPlayer({audio}: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  
  const playPauseToggle = () => {
    if (audioRef.current?.paused) {
      audioRef.current?.play()
    }
    else {
      audioRef.current?.pause()
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <div>
      <h1>Play {audio} </h1>
      <audio ref={audioRef} src={audio}></audio>
        {/* <source src={audio} type="audio/mp3"/> */}
      <button onClick={playPauseToggle}>
        {isPlaying ? "Pause" : "Play"}
      </button>
    </div>
  )
}

export default AudioPlayer