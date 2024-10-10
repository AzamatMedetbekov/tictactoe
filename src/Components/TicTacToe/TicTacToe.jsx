import React, { useState, useRef } from 'react';
import './TicTacToe.css';
import circle_icon from '../Assets/circle.png';
import cross_icon from '../Assets/cross.png';

let data = ["", "", "", "", "", "", "", "", ""]; 

const TicTacToe = () => {
  let [count, setCount] = useState(0); 
  let [lock, setLock] = useState(false); 
  let [winner, setWinner] = useState(null);
  let titleRef = useRef(null);
  let box1 = useRef(null);
  let box2 = useRef(null);
  let box3 = useRef(null);
  let box4 = useRef(null);
  let box5 = useRef(null);
  let box6 = useRef(null);
  let box7 = useRef(null);
  let box8 = useRef(null);
  let box9 = useRef(null);

let box_array = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

  const toggle = (e, num) => {
    if (lock || data[num] !== "") {
      return; 
    }

    if (count % 2 === 0) {
      data[num] = "x"; 
    } else {
      data[num] = "o";
    }

    setCount(++count); 
    checkWin();
  };

  const resetGame = () => {
    data = ["", "", "", "", "", "", "", "", ""]; 
    setCount(0); 
    setLock(false); 
    setWinner(null); 
  };

  const checkWin = () => {
    if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      won(data[2]);
    } else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
      won(data[5]);
    } else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
      won(data[6]);
    } else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
      won(data[7]);
    } else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
      won(data[6]);
    }
  };

  const won = (winner) => {
    setLock(true); 
    setWinner(winner); 
  };

  return (
    <div className="container">
      <h1 className="title" ref={titleRef}>
        Tic Tac Toe Game In<span>React</span>
      </h1>
      {winner && (
        <h2 className="winner">
          Congratulations: {winner === "x" ? <img src={cross_icon} alt="X" /> : <img src={circle_icon} alt="O" />}
        </h2>
      )}
      <div className="board">
        <div className="row1">
          <div className="boxes" ref={box1} onClick={(e) => toggle(e, 0)}>
            {data[0] === "x" && <img src={cross_icon} alt="X" />}
            {data[0] === "o" && <img src={circle_icon} alt="O" />}
          </div>
          <div className="boxes" ref={box2}  onClick={(e) => toggle(e, 1)}>
            {data[1] === "x" && <img src={cross_icon} alt="X" />}
            {data[1] === "o" && <img src={circle_icon} alt="O" />}
          </div>
          <div className="boxes" ref={box3} onClick={(e) => toggle(e, 2)}>
            {data[2] === "x" && <img src={cross_icon} alt="X" />}
            {data[2] === "o" && <img src={circle_icon} alt="O" />}
          </div>
        </div>
        <div className="row2">
          <div className="boxes" ref={box4} onClick={(e) => toggle(e, 3)}>
            {data[3] === "x" && <img src={cross_icon} alt="X" />}
            {data[3] === "o" && <img src={circle_icon} alt="O" />}
          </div>
          <div className="boxes" ref={box5}  onClick={(e) => toggle(e, 4)}>
            {data[4] === "x" && <img src={cross_icon} alt="X" />}
            {data[4] === "o" && <img src={circle_icon} alt="O" />}
          </div>
          <div className="boxes" ref={box6} onClick={(e) => toggle(e, 5)}>
            {data[5] === "x" && <img src={cross_icon} alt="X" />}
            {data[5] === "o" && <img src={circle_icon} alt="O" />}
          </div>
        </div>
        <div className="row3">
          <div className="boxes" ref={box7}  onClick={(e) => toggle(e, 6)}>
            {data[6] === "x" && <img src={cross_icon} alt="X" />}
            {data[6] === "o" && <img src={circle_icon} alt="O" />}
          </div>
          <div className="boxes" ref={box8} onClick={(e) => toggle(e, 7)}>
            {data[7] === "x" && <img src={cross_icon} alt="X" />}
            {data[7] === "o" && <img src={circle_icon} alt="O" />}
          </div>
          <div className="boxes" ref={box9} onClick={(e) => toggle(e, 8)}>
            {data[8] === "x" && <img src={cross_icon} alt="X" />}
            {data[8] === "o" && <img src={circle_icon} alt="O" />}
          </div>
        </div>
      </div>
      <button className="reset" onClick={resetGame}>Reset</button>
    </div>
  );
};

export default TicTacToe;
