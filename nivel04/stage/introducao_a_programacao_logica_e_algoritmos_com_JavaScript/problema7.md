# Interagindo com um menu de opções

- Faça um programa que tenha um menu e apresente a seguinte mensagem:

  ```
    "Olá usuário! Digite o número a opção desejada".

    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa
  ```

- O programa deverá capturar o número digitado pelo usuário e executar os seguintes cenários:

  - Caso o usuário digite 1, ele poderá cadastrar um item em uma lista.

  - Caso o usuário digite 2, ele poderá ver os itens cadastrados Se não houver nenhum item cadastrado, mostra a mensagem: "Não existem itens cadastrados.".

  - Caso o usuário digite 3, a aplicaçâo deverá ser encerrada.

```js
let option
let items = []

while (option != 3) {
  option = Number(
    prompt(`
    Olá usuário! Digite o número a opção desejada

    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa
  `)
  )

  switch (option) {
    case 1:
      let item = prompt("Digite o nome do item:")
      items.push(item)
      break
    case 2:
      if (items.length == 0) {
        alert("Não existem itens cadastrados.")
      } else {
        alert(items)
      }
      break
    case 3:
      alert("Aplicação encerrada!")
      break
    default:
      alert("Opção inválida! Tente novamente.")
  }
}
```

<br>
<br>

<p align="center"> Desenvolvido com ❤ por Elias de Araújo Ferreira Neto 👋 <p>

<br>

<a href="../README.md">Voltar</a>
