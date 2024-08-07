import React, { useState } from 'react';

const Omikuji = () => {
  const [fortuneImg, setFortuneImg] = useState('../img/start.png');

  const drawFortune = () => {
    setFortuneImg('../img/start.png');
  };

  return (
    <div>
      <button id="draw" onClick={drawFortune}>おみくじを引く！</button>
      <p id="start" className="start">
        <img id="rotate" src="../img/start_.png" alt="おみくじ" />
      </p>
      <p>
        <img src={fortuneImg} id="fortune" className="fortune" alt="fortune" />
      </p>
    </div>
  );
}

export default Omikuji;
