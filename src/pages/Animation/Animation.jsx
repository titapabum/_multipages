import React, { useState, useEffect } from "react";
import "./Animation.css";

// Global constants
const fieldWidth = 700;
const fieldHeight = 400;
const diameter = 150;
const maxLeft = fieldWidth - diameter - 2;
const maxTop = fieldHeight - diameter - 2;
const vx = 5;
const vy = 5;

function Animation() {
  // State variables
  const [running, setRunning] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [goRight, setGoRight] = useState(true);
  const [goDown, setGoDown] = useState(true);
  const [rotationAngle, setRotationAngle] = useState(0);

  // Start or pause animation
  const runClick = () => {
    setRunning(!running);
  };

  // Calculate new position and rotation
  const calculate = () => {
    let newX = x;
    let newY = y;
    let newRotation = rotationAngle;
    let right = goRight;
    let down = goDown;

    if (right) {
      newX += vx;
      newRotation += 5;
      if (newX >= maxLeft) {
        right = false;
        newRotation += 90;
      }
    } else {
      newX -= vx;
      newRotation -= 5;
      if (newX <= 0) {
        right = true;
        newRotation += 90;
      }
    }

    if (down) {
      newY += vy;
      if (newY >= maxTop) {
        down = false;
        newRotation += 90;
      }
    } else {
      newY -= vy;
      if (newY <= 0) {
        down = true;
        newRotation += 90;
      }
    }

    // Set updated state
    setX(newX);
    setY(newY);
    setGoRight(right);
    setGoDown(down);
    setRotationAngle(newRotation % 360);
  };

  // Update ball position and rotation
  const render = () => {
    const ball = document.querySelector(".ball");
    ball.style.left = `${x}px`;
    ball.style.top = `${y}px`;
    ball.style.transform = `rotate(${rotationAngle}deg)`;
  };

  // Animation loop
  useEffect(() => {
    const interval = setInterval(() => {
      if (running) {
        calculate();
        render();
      }
    }, 30);

    return () => clearInterval(interval);
  }, [running, x, y, goRight, goDown, rotationAngle]);

  // Function to handle other buttons
  const noneClick = () => {
    document.querySelector(".ball").style.backgroundImage = "none";
  };

  const basketballClick = () => {
    document.querySelector(".ball").style.backgroundImage =
      "url(image/basketball.png)";
  };

  const footballClick = () => {
    document.querySelector(".ball").style.backgroundImage =
      "url(image/football.png)";
  };

  const volleyballClick = () => {
    document.querySelector(".ball").style.backgroundImage =
      "url(image/volleyball.png)";
  };

  const humanClick = () => {
    document.querySelector(".ball").style.backgroundImage =
      "url(image/IMG.JPG)";
  };

  const cartoonClick = () => {
    document.querySelector(".ball").style.backgroundImage =
      "url(image/cartoon.jpg)";
  };

  const logoClick = () => {
    document.querySelector(".ball").style.backgroundImage =
      "url(image/logo.png)";
  };

  return (
    <div className="animation-container">
      <div className="field">
        <div className="ball" style={{ width: diameter, height: diameter }}></div>
      </div>
      <div className="control">
        <button className="btn btn-success" onClick={runClick}>
          {running ? "PAUSE" : "RUN"}
        </button>
        <button className="btn btn-outline-primary" onClick={noneClick}>
          NONE
        </button>
        <button className="btn btn-outline-primary" onClick={basketballClick}>
          BASKETBALL
        </button>
        <button className="btn btn-outline-primary" onClick={footballClick}>
          Football
        </button>
        <button className="btn btn-outline-primary" onClick={volleyballClick}>
          Volleyball
        </button>
        <button className="btn btn-outline-primary" onClick={humanClick}>
          Human
        </button>
        <button className="btn btn-outline-primary" onClick={cartoonClick}>
          Cartoon
        </button>
        <button className="btn btn-outline-primary" onClick={logoClick}>
          Logo
        </button>
      </div>
    </div>
  );
}

export default Animation;
