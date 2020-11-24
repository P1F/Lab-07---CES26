import Big from "big-js";

function operate(numberOne, numberTwo, operation) {
  const one = Big(numberOne || "0");
  const two = Big(numberTwo || (operation === "÷" || operation === 'x' ? "1" : "0"));
  if (operation === "+") {
    return one.plus(two).toString();
  }
  if (operation === "-") {
    return one.minus(two).toString();
  }
  if (operation === "x") {
    return one.times(two).toString();
  }
  if (operation === "÷") {
    if (two == 0) {
      alert("Indefinido");
      return "0";
    } else {
      return one.div(two).toString();
    }
  }
  throw Error(`Operação desconhecida '${operation}'`);
}

export default operate