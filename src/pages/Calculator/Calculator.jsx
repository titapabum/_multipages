import React, { useState } from "react";
import "./Calculator.css"; // นำไฟล์ CSS เข้ามาใช้งาน

function Calculator() {
  const [display, setDisplay] = useState("");

  // ฟังก์ชันสำหรับแสดงตัวเลขและเครื่องหมายใน display
  const numberDisplay = (input) => {
    setDisplay(display + input);
  };

  // ฟังก์ชันสำหรับเคลียร์ค่าใน display
  const clearClicked = () => {
    setDisplay("");
  };

  // ฟังก์ชันสำหรับการคำนวณ
  const equalClicked = () => {
    try {
      setDisplay(eval(display)); // ใช้ eval คำนวณ
    } catch {
      setDisplay("Error"); // แสดงข้อความผิดพลาดหากการคำนวณไม่สำเร็จ
    }
  };

  return (
    <div className="calculator-container">
      <div className="input">
        <input className="display" type="text" value={display} disabled />
        <button className="button button-clear" onClick={clearClicked}>C</button>
      </div>
      <div className="button-row">
        <button className="button" onClick={() => numberDisplay("7")}>7</button>
        <button className="button" onClick={() => numberDisplay("8")}>8</button>
        <button className="button" onClick={() => numberDisplay("9")}>9</button>
        <button className="button" onClick={() => numberDisplay("/")}>/</button>
      </div>
      <div className="button-row">
        <button className="button" onClick={() => numberDisplay("4")}>4</button>
        <button className="button" onClick={() => numberDisplay("5")}>5</button>
        <button className="button" onClick={() => numberDisplay("6")}>6</button>
        <button className="button" onClick={() => numberDisplay("*")}>*</button>
      </div>
      <div className="button-row">
        <button className="button" onClick={() => numberDisplay("1")}>1</button>
        <button className="button" onClick={() => numberDisplay("2")}>2</button>
        <button className="button" onClick={() => numberDisplay("3")}>3</button>
        <button className="button" onClick={() => numberDisplay("-")}>-</button>
      </div>
      <div className="button-row">
        <button className="button" onClick={() => numberDisplay("0")}>0</button>
        <button className="button" onClick={() => numberDisplay(".")}>.</button>
        <button className="button" onClick={() => numberDisplay("+")}>+</button>
        <button className="button" onClick={equalClicked}>=</button>
      </div>
    </div>
  );
  
}
  
export default Calculator;
