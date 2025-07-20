import { useState } from 'react';

export function useAudioPlayer() {
  const [currentAudio, setCurrentAudio] = useState(null);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  const playRandomMusic = (musicArray) => {
    // Stop current audio if playing
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    // Select random song
    const randomIndex = Math.floor(Math.random() * musicArray.length);
    const selectedMusic = musicArray[randomIndex];

    // Create new audio element
    const audio = new Audio(selectedMusic);
    audio.volume = 0.5; // Set volume to 50%
    audio.loop = true; // Loop the music

    // Play the music
    audio.play().then(() => {
      setCurrentAudio(audio);
      setIsAudioPlaying(true);
    }).catch(error => {
      console.error('Error playing audio:', error);
    });
  };

  return {
    currentAudio,
    isAudioPlaying,
    playRandomMusic
  };
} 