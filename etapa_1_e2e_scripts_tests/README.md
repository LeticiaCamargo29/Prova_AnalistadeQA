# 💻 Etapa 1: Avaliação Técnica - Scripts de Testes E2E

#### Objetivos: 
* Avaliar o conhecimento do candidato em projetos de testes E2E automatizados;
* Avaliar o conhecimento do candidato em lógica de programação;

#### ⚠️ Observações importantes:
* A avaliação deve ser entregue via GitHub. O link deve ser enviado por e-mail com o restante da avaliação para a(o) Analista de Gente e Gestão que está conduzindo o processo seletivo;
    * O repositório deve conter um arquivo README.md com os pré requisitos e passos para executar o projeto de testes;
    * Todos os testes devem ser executados sem que seja necessário realizar qualquer uma alteração no código-fonte. Portanto, atente-se à utilizar diretórios dinâmicos para configuração das ferramentas necessárias. 
* Entregue a avaliação, mesmo que não tenha conseguido implementar todos testes. A entrega parcial também será considerada;
* A escolha das ferramentas e tecnologias é livre. Portanto, os testes podem ser desenvolvidos em qualquer ferramenta (Ex: Cypress, Selenium WebDriver) com qualquer linguagem de programação (JavaScript, Typescript, Java, etc), desde que se crie a cobertura dos testes especificadas na sessão *Projeto da Avaliação Técnica -> Casos de Testes*
        
## Projeto da Avaliação Técnica
#### Detalhes

O projeto alvo do desenvolvimento dos testes será o BugBank. Esta aplicação foi desenvolvida pelo [Jhonatas Matos](https://github.com/jhonatasmatos) com objetivo de estudos. Essa aplicação pode ser acessada pelo link [bugbank.netlify.app](http://bugbank.netlify.app/). Caso este link não esteja disponível, você pode iniciar a aplicação através do seu código fonte que está disponível no [GitHub do autor](https://github.com/jhonatasmatos/bugbank).

Caso tenha algum problema que o impeça o desenvolvimento do projeto, favor me notificar através do e-mail wemerson.marques@aliare.co.

#### Casos de Testes

##### (CD) Cadastro

* CD.1: Cadastro com e-mail inválido

| Passo | Descrição do passo                  | Resultado esperado                                                               |
|-------|-------------------------------------|----------------------------------------------------------------------------------|
| 1     | Acesse a aplicação                  |                                                                                  |
| 2     | Clique no botão 'Registrar'         | Sistema deve apresentar a tela de cadastros                                      |
| 3     | Informe o e-mail "email_errado.com" | Sistema deve apresentar a mensagem "Formato inválido" abaixo do campo de e-mail  |

* CD.2: Cadastro com e-mail válido

| Passo | Descrição do passo                      | Resultado esperado                         |
|-------|-----------------------------------------|--------------------------------------------|
| 1     | Acesse a aplicação                      |                                            |
| 2     | Clique no botão 'Registrar'             |                                            |
| 3     | Informe o e-mail 'test@test.com'        |                                            |
| 4     | Informe um nome válido                  |                                            |
| 5     | Informe uma senha válida                |                                            |
| 6     | Repita a senha informada no passo 5     |                                            |
| 7     | Marque a opção 'Criar conta com saldo?' |                                            |
| 8     | Clicar em 'Cadastrar'                   | Sistema deve cadastrar o usuário sem erros |

##### (LG) Login

* LG.1: Login com e-mail inválido

| Passo | Descrição do passo                  | Resultado esperado                                                          |
|-------|-------------------------------------|-----------------------------------------------------------------------------|
| 1     | Acesse a aplicação                  |                                                                             |
| 2     | Informe o e-mail 'email_errado.com' | Sistema deve exibir a mensagem 'Formato inválido' abaixo do campo de e-mail |

* LG.2: Login com e-mail inválido/senha não cadastrados

| Passo | Descrição do passo                          | Resultado esperado                                                                                            |
|-------|---------------------------------------------|---------------------------------------------------------------------------------------------------------------|
| 1     | Acesse a aplicação                          |                                                                                                               |
| 2     | Informe um e-mail que não estava cadastrado |                                                                                                               |
| 3     | Informe uma senha qualquer                  |                                                                                                               |
| 4     | Clique em 'Acessar'                         | Sistema deve apresentar a mensagem "Usuário ou senha inválido. Tente novamente ou verifique suas informações! |

* LG.3: Login com usuário/senha válidos

| Passo | Descrição do passo                               | Resultado esperado                                     |
|-------|--------------------------------------------------|--------------------------------------------------------|
| 1     | Acesse a aplicação                               |                                                        |
| 2     | Informe um e-mail previamente cadastrado         |                                                        |
| 3     | Informe a senha correta para o e-mail cadastrado |                                                        |
| 4     | Clique em 'Acessar'                              | Sistema deve permitir o login                          |
| 5     | Na página inicial                                | Sistema deve apresentar o nome do usuário corretamente |
| 5     | Na página inicial                                | Sistema deve apresentar a conta correta                |

##### (EX) Extrato

Por conta própria, automatize pelo menos 3 casos de testes para o processo de 'Transferência'

##### (TR) Transferências

Por conta própria, automatize pelo menos 2 casos de testes para o processo 'Extrato'