# Condicionais e Controle de Fluxo

## If e else

```js
// Control flow (if..else)

let temperature = 37.2
let hightTemperatura = temperature >= 37.5
let mediumTemperatura = temperature < 37.5 && temperature >= 37

if (hightTemperatura) {
  console.log("Febre!")
} else if (mediumTemperatura) {
  console.log("Febre moderada!")
} else {
  console.log("Saudável!")
}
```

## switch

```js
// Control flow (siwtch case)

function calculate(number1, operator, number2) {
  let result

  switch (operator) {
    case "+":
      result = number1 + number2
      break
    case "-":
      result = number1 - number2
      break
    case "*":
      result = number1 * number2
      break
    case "/":
      result = number1 / number2
      break
    default:
      result = "não implementado"
      break
  }

  return result
}

console.log(calculate(4, "", 8))
```

## Throw e Try/Catch

- throw (lançar) lança uma execução/valor definida pelo usuário caso ocarra um erro.

- try..catch (tentar..pegar) try irá tentar executar uma função e, se houver erro, ele vai ser disparado pelo throw e irá ser capturado pelo catch. O catch vai colocar o valor lançado pelo throw dentro de um parâmetro.

```js
// throw
function sayMyname(name) {
  if (name === "") {
    throw "Erro! Nome é obrigatório."
  } else if (name === "bilu") {
    throw "Erro! Você é um et."
  }
  console.log("não houve erro :)")
}

// try..catch
try {
  sayMyname("")
} catch (erro) {
  console.log(erro)
}
```

<br>
<br>

<p align="center"> Desenvolvido com ❤ por Elias de Araújo Ferreira Neto 👋 <p>

<br>

<a href="../README.md">Voltar</a>
