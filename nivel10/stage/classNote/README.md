# 🔗 Stage 10 - API Restful

> Integração front-end e back-end - Consumo de API - Autenticação - Validações - Middlewares - Upload de imagens

## 🔐 Fluxo de autenticação

O fluxo de autenticação são as etapas que o usuário passará para poder ter acesso à aplicação (Login).

Ou seja, há alguns recursos no back-end que o usuário só acessará quando ele tiver efetuado o Login (Ex: o recurso de atualizar os dados do usuário).

Esse fluxo acontece da seguinte forma:

- 1 - O usuário envia uma solicitação de autenticação com e-mail e senha para o back-end;

- 2 - O back-end verifica se o usuário já está cadastrado no DB e se a senha está correta;

- 3 - Dando tudo certo, o back-end devolve para o usuário um **token de autenticação**.

Esse token é como um "crachá" que o usuário recebe para poder se identificar dentro da aplicação.

O usuário estando autenticado, agora toda requisição que ele fizer irá conter esse token de autenticação.

Será utilizado um **middleware de autenticação** que irá interceptar as requisições do usuário para obter o token do usuário e, dessa forma, identificar quem é esse usuário pelo id que pode ser encontrado no token de autenticação.

## 🔑 JSON Web Token (JWT)

É um padrão de mercado que define um token de autenticação no formato JSON para a troca de informações entre cliente e servidor.

O JWT não representa o mecanismo de autenticação. Ele é só um meio para a troca de informações no fluxo de autenticação.

Um token no formato JWT é composto por três partes: header, payload e verify signature. Essas três partes aprecem em ordem e separadas por pontos.

```
### Exemplo

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
```

Cada parte dessas contém informações importantes sobre a requisição e sobre o próprio token. Exemplo:

- No header há informações sobre o algoritmo e o tipo do Token.

```
{
  "alg": "HS256",
  "typ": "JWT"
}
```

- No payload há informações sobre o conteúdo do Token.

```
{
  "sub": "1234567890",
  "name": "John Doe",
  "iat": 1516239022,
  "id": 001
}
```

- A parte de verify signature garante a integridade do token.

```
HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  your-256-bit-secret
)
```

## ⚙ API ResTful

Relembrando, uma API (Application Programming Interface) é uma interface que disponibiliza um conjunto de funcionalidades para serem utilizadas/consumidas.

### Representational State Transfer (REST)

Transferência Representacional de Estado.

Não é uma linguagem ou tecnologia de programação mas sim um **modelo de arquitetura**.

Ela fornece diretrizes para que os sistemas distribuídos se comuniquem usando os princípios e protocolos da Web, como o protocolo HTTP.

> Uma API RESTful é aquela que cumpre as diretrizes REST.

Diretrizes RESTful:

- Cliente/Servidor - O cliente e o servidor devem estar separados.

- Stateless - Cada requisição deve ter o necessário para o servidor entender e responder a requisição. O servidor não deve lembrar/armazenar estados.

- Layered System - O cliente acessa um endpoint sem precisar saber como é implementada.

## 📦 Cross-Origin Resource Sharing (CORS)

> O CORS habilita que o nosso back-end consiga atender as requisições do front-end.

CORS - Cross-Origin Resource Sharing (Compartilhamento de recursos com origens diferentes) é um mecanismo que usa cabeçalhos adicionais HTTP para informar a um navegador que permita que um aplicativo Web seja executado em uma origem (domínio) com permissão para acessar recursos selecionados de um servidor em uma origem distinta. Um aplicativo Web executa uma requisição cross-origin HTTP ao solicitar um recurso que tenha uma origem diferente (domínio, protocolo e porta) da sua própria origem.

Um exemplo de requisição cross-origin: o código JavaScript frontend de um aplicativo web disponível em http://domain-a.com usa XMLHttpRequest para fazer uma requisição para http://api.domain-b.com/data.json.

Por motivos de segurança, navegadores restringem requisições cross-origin HTTP iniciadas por scripts. Por exemplo, XMLHttpRequest e Fetch API seguem a política de mesma origem (en-US) (same-origin policy). Isso significa que um aplicativo web que faz uso dessas APIs só poderá fazer solicitações para recursos de mesma origem da qual o aplicativo foi carregado, a menos que a resposta da outra origem inclua os cabeçalhos CORS corretos.

## 🛠 Axios

Axios é um cliente HTTP simples baseado em promessas para o navegador e para o node.js. Axios fornece uma biblioteca simples de usar em um pacote pequeno com uma grande interface.

## 🧱 Context - React

Contexto (context) disponibiliza uma forma de passar dados entre a árvore de componentes sem precisar passar props manualmente em cada nível.

## 🔩 Hooks - React

Permite que você use estados e outros recursos do React sem escrever uma classe.

Encapsula funcionalidades e facilita o reaproveitamento da sua lógica.

Exemplos de Hooks: useState, useEffect.

Padrão de nomenclatura dos Hooks: **use**NomeDoHook.

## ⚙ useState

O useState é um hook próprio do React. Ele nos permite trabalhar com variáveis de estado.

Variáveis de estado persistem entre renderizações e o React consegue percebe-las.

### Por que não utilizar variáveis comuns?

Variáveis comuns não persistem entre renderizações.

Quando o React renderiza o componente uma segunda vez ele o renderiza do zero. Não considera nenhuma mudança nas variáveis locais.

Ou seja, as alterações em variáveis locais não irão acionar renderizações. **O React não percebe** que precisa renderizar o componente novamente com os novos dados.

### Para utilizar um componente com novos dados, duas coisas precisam acontecer:

- 1 - Retenha os dados entre as renderizações.

- 2 - Acione o React para renderizar o componente com os novos dados (re-renderização).

### O useState fornece essas duas coisas:

- 1 - Uma variável de estado para reter os dados entre as renderizações.

- 2 - Uma função de configuração de estado para atualizar a variável e acionar o React para renderizar o componente novamente.

### Resumindo...

- 1 - Use uma variável de estado quando um componente precisar "lembrar" alguma informação entre renderizações.

- 2 - As variáveis de estado são declaradas utilizando o `useState`.

- 3 - O `useState` retorna um par de valores: o **estado atual** e a **função para atualizá-lo**.

- 4 - O estado é privado para o componente. Se você renderizar em dois lugares, cada cópia terá seu próprio estado. Além disso, se você recarregar a página o estado não persiste.

## ⚙ UseEffect

O useEffect é um hook próprio do React.

### O que o useEffect faz?

Você diz ao React que o componente precisa fazer algo depois da renderização. Isto é, depois que realizar as atualizações do DOM.

### Por que o useEffect é chamado dentro de um componente?

Colocando useEffect dentro do componente, podemos acessar os estados do componente (seja para a lógica ou dependência do Hook).

## 🔄 Fluxo de Renderizações

Renderizar é o processo de desenhar/construir o componente em tela para que o usuário possa visualizá-los.

Antes dos seus componentes serem exibidos na tela eles devem ser renderizados pelo React.

> O objetivo do React é **construção de interfaces**.

### 👨‍🍳 Analogia

Imagine que a nossa **aplicação é um restaurante** e os **componentes são cozinheiros** na cozinha montando pratos saborosos a partir dos ingredientes (**propriedades**).

Cada componente é especializado em montar seu próprio prato e para montá-lo é preciso ter ingredientes (propriedades) específicas.

Nesse cenário, o **React é o garçom** que anota os pedidos dos clientes e leva-os para a cozinha para serem preparados.

Esse processo que o garçom realiza pode ser dividido em 3 etapas:

1. **Acionar** - essa etapa compreende a parte em que o garçom (React) anota o pedido do cliente e leva-o para a cozinha para que ele possa ser preparado pelos cozinheiros certos.

2. **Renderizar** - aqui os cozinheiros já estão com os pratos que o cliente pediu prontos e entregam para o garçom.

3. **Comprometer-se** - por fim, o garçom entrega os pratos que foram preparados pelos cozinheiros para o cliente.

### ▶ Acionar (Etapa 1)

Há **duas razões** para um componente renderizar:

1. **Renderização inicial do componente.**

Quando o seu aplicativo é iniciado a renderização inicial é acionada.

2. **Mudança no estado do componente.**

A atualização do estado do componente enfileira automaticamente uma renderização. Conforme a analogia do restaurante, nesse caso, o cliente do restaurante está pedindo mais coisas.

#### Re-renderização

Re-renderização é o processo que ocorre quando há uma mudança no estado do componente.

1. Atualização do estado - O cliente já está com o prato na mesa mas quer requisitar uma mudança. Sendo assim, ele aciona o garçom (React) requisitando uma mudança no prato.

2. Gatilho - o garçom devolve o prato na cozinha para que seja feito um novo prato seguindo as novas exigências do cliente.

3. Renderizar - a cozinha devolve o novo prato para o garçom e ele leva para o cliente.

## 🔄 Renderizar (Etapa 2)

Depois de acionar uma renderização, o React chama seus componentes para descobrir o que exibir na tela.

O **Rendering** é o React chamando seus componentes.

Na **renderização inicial**, o React chamará o componente raiz.

Para **re-renderizações** o React chamará o componente cuja atualização do estado acionou a re-renderização.

Esse processo de **Re-renderização é recursivo**, ou seja, um componente pode ter "sub-componentes" que também podem disparar um gatilho para renderizar algo em seguida, e assim por diante.

O processo continuará até que não haja mais componentes aninhados e o React saiba exatamente o que deve ser exibido na tela.

## ☑ Comprometer-se (Etapa 3)

**Após renderizar (chamar) seus componentes, o React modificará a DOM.**

Para **renderização inicial**, o React usará a API DOM para colocar na tela todos os nós DOM criados.

Para **re-renderizações**, o React aplicará as operações mínimas necessárias (calculadas durante a renderização) para fazer a DOM corresponder à saída de renderizações mais recente.

> O React só altera os nós DOM se houver uma diferença entre as renderizações. Daí vem o nome React (Reagir), ele reage às mudanças ocorridas.

### Recapitulando

Qualquer atualização de tela numa aplicação React acontece em três etapas: Acionar, Renderizar e Comprometer-se.

O React não toca na DOM se o resultado da renderização for o mesmo da última vez.

<br>
<br>

<p align="center"> Desenvolvido com ❤ por Elias de Araújo Ferreira Neto 👋 <p>

<br>

<a href="../README.md">Voltar</a>
