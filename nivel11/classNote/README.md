# 🚀 Stage 11

> PM2 - Heroku - Netlify - Jest

## ☁ O que é Deploy?

Deploy ou deployment significa implantar.

Significa enviar um novo projeto, mudanças ou atualizações para um determinado ambiente.

Um deploy pode ser feito manualmente ou automatizado.

### Ambientes

O objetivo de criar ambientes distintos para nossa aplicação é reduzir os impactos de bugs e ter um controle maior do código.

Normalmente, trabalha-se com 3 ambientes:

- Ambiente de Desenvolvimento
- Ambiente de Staging ou Teste
- Ambiente de Produção

### Dados Sensíveis

São dados que, em mãos erradas, podem gerar grandes problemas:

- Senhas
- Chave de Serviços ou API
- Tokens, Hash
- Informações do banco de dados

### Variáveis de Ambiente

Uma estratégia para lidar com dados sensíveis é criar variáveis de ambientes e guardá-las em um arquivo `.env`

```
APP_NAME=RocketNotes
SECRET_API=9as1%12#zx0#0
CPUS=4

# Banco de dados
DB_NAME=rocketnotes
DB_PASS=
DB_HOST=localhost
```

- As chaves são em caixa alta, por padrão.
- As chaves não podem ter espaço.
- Os valores podem ser de qualquer tipo, sempre será retornado uma string.
- Pode haver espeçamentos, porém é feito um trim (ignora os espaços) na string.
- Pode existir chave sem valor, retornará uma string vazia.

### Boas práticas e cuidados

Por se tratar de informações sensíveis na sua maioria é importante que esses dados só fiquem em ambiente de desenvolvimento, então se você pretende compartilhar o código lembre-se de remover o arquivo `.env`.

Caso utilize o github basta adicionar ao `.gitignore` o arquivo `.env` para ele fazer esse trabalho para você.

Outra boa prática, crie um arquivo de exemplo (`.env.example`) com as chaves que seu projeto está utilizando, sem os valores, sensíveis assim quem clonar seu repositório ou ter acesso ao código fonte não ficará perdido.

### PM2

PM2 é um gerenciador de processos que irá ajudar a gerenciar e manter a aplicação online 24h por dia, 7 dias por semana.

## ⚙ Testes

Testes permitem identificar erros durante o desenvolvimento e assegurar a qualidade e o funcionamento correto da aplicação.

### Testes Automatizados

Teste automatizado é a utilização de ferramentas de software para automatizar um processo manual conduzido por humanos de revisão e validação da aplicação.

### Tipos de Testes

Existem várias estratégias de testes, das bem comuns são:

- **Testes de unidade** - testa unidades individuais do código. (ex: testa uma função específica da aplicação).

- **Teste de integração** - testa as unidades do código trabalhando juntas. (ex: testa login que envolve um série de etapas).

### Boas Práticas

#### Simples e Rápido

Testes simples e rápidos nos possibilitam ter um feedback o mais cedo possível sobre possíveis impactos das modificações feitas no software.

Além disso, facilitam para podermos rodar-los várias vezes se necessário e tornam mais ágil o debug, reduzindo o tempo necessário para criar e manter os scripts.

#### Independentes

Testes devem ser independentes entre si. Isso evita que a falha de um cause a falha de outros, o que dificultaria a investigação de problemas.

O "você do futuro" vai agradecer muito ao "você do presente" por isso.

#### Ambiente

Testes não devem depender de ambientes ou recursos externos (como API'S, DB'S, etc). Os testes devem ser capazes de serem executados a qualquer momento e quantas vezes forem necessárias.

## 🤯 Princípio da inversão de dependência

O objetivo desse princípio é desacoplar e diminuir a dependência entre regra de negócio e infraestrutura.

### Controlando o acoplamento

Acoplamentos são partes de códigos responsáveis por lidar com coisas distintas.

De maneira geral, será praticamente impossível criar uma aplicação onde a arquitetura seja totalmente desacoplada e abstrata, pois acoplamentos concretos sempre existirão.

O segredo está em saber diferenciar os acoplamentos ruins e bons, pois assim modelaremos nossos sistemas fugindo dos "acoplamentos perigosos".

### Exemplo de Acoplamento

Normalmente, um **controller** tem 3 acoplamentos:

- Lidar com a requisição e a resposta.
- Lidar com o banco de dados.
- Lidar com a lógica da regra de negócio.

Até agora, estávamos utilizando de um arquitetura que usava arquivos únicos denominados de `controller` para responsabilizar-se desses três acoplamentos citados acima.

Nessa arquitetura, o princípio _inversão de dependências_ não está sendo respeitado. O motivo disso acontecer é: um controller depende do acoplamento que lida com banco de dados e do que lida com a lógica. Ou seja, a regra de negócio está acoplada com a infraestrutura.

Com o intuito de desacoplar essas coisas:

- Um arquivo `controller` vai de lidar somente com as requisições e respostas.

- Um arquivo `repository` vai lidar com o banco de dados.

- Um arquivo `service` vai lidar com a lógica.

Seguindo essa arquitetura, você desacopla a lógica da infraestrutura invertendo as dependências.

OBS: inverter as dependências é simplesmente deixar de depender explicitamente e começar a **abstrair** as coisas.
