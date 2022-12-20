# Calculando IMC dos pacientes com Funções

- Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima: "Paciente X possui o IMX de: Y". Onde X é o nome do paciente e Y é o IMC desse paciente.

- Crie uma função para fazer o cálculo de IMC (PESO/ALTURA²).

```js
const patients = [
  {
    name: "Luiz",
    age: 20,
    weight: 100,
    height: 1.9,
  },
  {
    name: "Alexandra",
    age: 27,
    weight: 70,
    height: 1.7,
  },
  {
    name: "Carlos",
    age: 42,
    weight: 90,
    height: 1.8,
  },
]

function IMC(weight, height) {
  return (weight / height ** 2).toFixed(2)
}

function printPatientIMC(patient) {
  return `
  Paciente ${patient.name} possui o IMC de ${IMC(
    patient.weight,
    patient.height
  )}
`
}

for (const patient of patients) {
  let IMCmessage = printPatientIMC(patient)
  alert(IMCmessage)
}
```

<br>
<br>

<p align="center"> Desenvolvido com ❤ por Elias de Araújo Ferreira Neto 👋 <p>

<br>

<a href="../README.md">Voltar</a>
