![Axur](src/assets/logo.png)

## Axur challenge

Este projeto consiste em um desafio para a vaga de Desenvolvedor front.

#### Arquitetura

O projeto é desenvolvido com base em uma arquitetura modular.
[Mais sobre arquitetura modular](https://levelup.gitconnected.com/building-a-scalable-and-modular-architecture-for-react-ts-applications-e1d917250e04)

#### Dependências

- **axios 1.3.3**
  - Usada para fazer as requisições as apis rest <br>
- **date-fns 2.29.3**
  - Usada para formatar os modelos de datas<br>
- **framer-motion 9.0.4**
  - Usada para adicionar aimações ao componentes<br>
- **i18next 22.4.10**
  - Usada para internacionalizar o app<br>
- **json-server 0.17.1**
  - Usada para criar uma api fake<br>
- **concurrently 7.6.0**
  - Usada para executar dois scripts simultâneamente<br>

#### Execução

1. **Instalar todas as dependências** `yarn`
 
    - Antes de passar para o passo 2, crie um arquivo `.env` no root usando como exemplo o `env-example`.
 


2. **Iniciar o projeto** `yarn start`
    - Neste passo ele irá executar dois comandos simultâneos,
      `npx json-server --watch api/db.json -p 4040` e `react-sripts start` usando o
      `concurrently`. <br> O primeiro comando inicia o json server com o endpoint
      `http://localhost:4040/crawl`. <br> O segundo comando inicia a aplicação react
      no endereço `http://localhost:3000`

3. **Inicia o teste de unidade** `yarn test`

    - Não foi feito uma cobertura mais expressiva, os exemplos são para mostrar o
      conhecimento.

4. **Iniciar os testes de regressão** `yarn e2e`

    - Para iniciar o `cypress` em modo browser use `yarn e2e:open`

5. **Buidar a aplicação** `yarn build`
 
#### Melhorias

- A cobertura de testes está entre 50% e 60%, em uma aplicação real teria que
  estar entre 98% -100%
- O Hook `useCrawler` assume muitas responsabilidades, a solução seria criar um `bff` para consolidar estes dois endpoints e diminuir as manipulações no
  Front.
 
