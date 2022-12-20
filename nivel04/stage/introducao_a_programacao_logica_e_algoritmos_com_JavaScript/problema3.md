# Operações matemáticas

- Capturar 2 números e fazer as operações matemáticas de soma, subtração, multiplicação, divisão e resto da divisão.

```js
alert("Digite dois 2 números :)")

let firstNumber = prompt("Digete o primeiro número: ")
let secondNumber = prompt("Digete o segundo número: ")

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const multi = firstNumber * secondNumber
const div = firstNumber / secondNumber
const restDiv = firstNumber % secondNumber

alert("SOMA: " + firstNumber + " + " + secondNumber + " = " + sum)
alert("SUBTRAÇÃO: " + firstNumber + " - " + secondNumber + " = " + sub)
alert("MULTIPLICAÇÃO: " + firstNumber + " * " + secondNumber + " = " + multi)
alert("DIVISÃO: " + firstNumber + " / " + secondNumber + " = " + div)
alert(
  "RESTO DA DIVISÃO: " + firstNumber + " % " + secondNumber + " = " + restDiv
)
```

<br>
<br>

<p align="center"> Desenvolvido com ❤ por Elias de Araújo Ferreira Neto 👋 <p>

<br>

<a href="../README.md">Voltar</a>
