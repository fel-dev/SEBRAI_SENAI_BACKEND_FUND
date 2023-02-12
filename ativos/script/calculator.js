let resultado = document.getElementById("txtResultado");
const btCalcula = document.getElementById("bt_calcula");

function calcularValores(operação, valorA, valorB) {
  switch (operação) {
    case "+":
      return valorA + valorB;

    case "-":
      return valorA - valorB;

    case "/":
      return valorA / valorB;

    case "*":
      return valorA * valorB;

    default:
      return "Error switch";
  }
}

btCalcula.addEventListener("click", function () {
  let valor1 = parseFloat(document.getElementById("txtValor1").value);
  let valor2 = parseFloat(document.getElementById("txtValor2").value);
  let operacao = document.getElementById("cbxOperacao").value;

  let resultadoDaOperação = calcularValores(operacao, valor1, valor2);

  console.log(valor1, operacao, valor2, " = ", resultadoDaOperação);
  if (isNaN(valor1) || isNaN(valor2)) {
    resultado.innerText =
      "Beep, boop!\r\nError Detected, please check your inputs\n" +
      onomatopeiaErroRoboDesenho;
    robô();
  } else {
    resultado.innerText = resultadoDaOperação;
  }
});
// onomatomeia de robô console
function robô() {
  console.log("  .-') _   ('-.         ('-.      _ .-')     ('-.     .-') _");
  console.log(" ( OO ) ) ( OO ).-.    ( OO ).-. ( (  OO)  _(  OO)   ( OO ) )");
  console.log(
    ",--./ ,--/ / . --. /,--./ ,--,'  /     '._(,------.  / . --. /,"
  );
  console.log(
    "|   \\ |  | \\-.  \\    |   \\ |  |\\  |'--...__)|  .---'  \\-.  \\    |"
  );
  console.log(
    "|    \\|  |.-'  |  |.-'  '|  | ) |  '--.  \\ |  |       '-  |  |.-'"
  );
  console.log(
    "|  .     |\\| |_.'  |\\| |_.'  |(_/  |  |  |  |  '--.   /  |_.'  |"
  );
  console.log(
    "|  |\\    | |  .-.  | |  .-.  |  \\  '--'  / |  .--'   '--'  .-.  |"
  );
  console.log(
    "|  | \\   | |  | |  | |  | |  |   `-----'  (|  `----.      | |  |"
  );
  console.log("`--'  `--' `--' `--' `--' `--'            `------'      `--'");
}

// onomatomeia de robô
const onomatopeiaErroRoboDesenho =
  "" +
  "  .-') _   ('-.         ('-.      _ .-')     ('-.     .-') _\r\n" +
  " ( OO ) ) ( OO ).-.    ( OO ).-. ( (  OO)  _(  OO)   ( OO ) )\r\n" +
  ",--./ ,--/ / . --. /,--./ ,--,'  /     '._(,------.  / . --. /,\r\n" +
  "|   \\ |  | \\-.  \\    |   \\ |  |\\  |'--...__)|  .---'  \\-.  \\    |\r\n" +
  "|    \\|  |.-'  |  |.-'  '|  | ) |  '--.  \\ |  |       '-  |  |.-'\r\n" +
  "|  .     |\\| |_.'  |\\| |_.'  |(_/  |  |  |  |  '--.   /  |_.'  |\r\n" +
  "|  |\\    | |  .-.  | |  .-.  |  \\  '--'  / |  .--'   '--'  .-.  |\r\n" +
  "|  | \\   | |  | |  | |  | |  |   `-----'  (|  `----.      | |  |\r\n" +
  "`--'  `--' `--' `--' `--' `--'            `------'      `--'\r\n";
