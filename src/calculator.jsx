import styles from "./calculator.module.css";

let sumValue = 0;

function sum() {
  let number1 = document.getElementById("num1");
  let number2 = document.getElementById("num2");
  let result = document.getElementById("sum");
  result.innerHTML = `<h2>Sum:${+number1.value + +number2.value}</h2>`; //` allows to add value in the string
}

// function multiply() {
//   let number1 = document.getElementById("num1");
//   let number2 = document.getElementById("num2");
//   let result = docum.getElementById("multiply");
//   result.innerHTML = `<h2>Multiply:${+number1 * +number2}</h2>`;
// }

function Calculator() {
  return (
    <>
      <div className={styles.header}>
        <h1>Calculator</h1>
        <div className={styles.calculator}>
          <label htmlFor="number1:"> Number1:</label>
          <input type="number1" id="num1" /> <br /> <br />
          <label htmlFor="number2:">Number2:</label>
          <input type="number2" id="num2" /> <br /> <br />
          <button onClick={sum} className={styles.btn}>
            Click to get Sum
          </button>
          <h2 id="sum"></h2>
        </div>
      </div>
    </>
  );
}

export default Calculator;
