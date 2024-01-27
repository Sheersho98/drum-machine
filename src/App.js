import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [ activeKey, setActiveKey ] = useState('');

  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      playSound(event.key.toUpperCase());
    })
  }, []);

  const sampleName = {
    "Q": "Heater 1",
    "W": "Heater 2",
    "E": "Heater 3",
    "A": "Heater 4",
    "S": "Clap",
    "D": "Open-HH",
    "Z": "Kick-n-Hat",
    "X": "Kick",
    "C": "Closed-HH"
  }

  const keyArr = [
    {
      keyCode: 81,
      text: "Q",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
    },
    {
      keyCode: 87,
      text: "W",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
    },
    {
      keyCode: 69,
      text: "E",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
    },
    {
      keyCode: 65,
      text: "A",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
    },
    {
      keyCode: 83,
      text: "S",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
    },
    {
      keyCode: 68,
      text: "D",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
    },
    {
      keyCode: 90,
      text: "Z",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
    },
    {
      keyCode: 88,
      text: "X",
      src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
    },
    {
      keyCode: 67,
      text: "C",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
    }
  ];

  const playSound = (selector) => {
    const audio = document.getElementById(selector);
    audio.play();
    setActiveKey(sampleName[selector]);
  }

  return (
    <div className="App">
      <div id="drum-machine">
        <div id="display">{activeKey}</div>
        <div className='drum-pads'>
          {keyArr.map((pad) => 
          <div 
            onClick={() => { playSound(pad.text) }} 
            className='drum-pad'
            id={pad.src}
            key={pad.src}
            >
            {pad.text}
            <audio src={pad.src}
              className='clip'
              id={pad.text}>
            </audio>
          </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
