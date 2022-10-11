describe('Login e registro de usuários', () => {
    beforeEach(() => {
        cy.visit('https://bugbank.netlify.app');
        cy.restoreLocalStorage();
    })
    afterEach(() =>{
        cy.saveLocalStorage();
    })

    it('Caso de Teste 1 - Cadastro com e-mail inválido', () => {

        cy.contains('button', 'Registrar').click();
        cy.get(':nth-child(2) > .input__default').click({force: true}).type('email_errado.com');
        cy.contains('p', 'Formato inválido').isVisible(); 
        //Ok!
    })

    it('Caso de Teste 2 - Cadastro com e-mail válido', () => {

        cy.contains('button', 'Registrar').click();
        cy.get(':nth-child(2) > .input__default').click({force: true}).type('test@test.com');
        cy.get('input[placeholder = "Informe seu Nome"]').click({force: true}).type('Fulana');
        cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').click({force: true}).type('123');
        cy.get(':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').click({force: true}).type('123');
        cy.get('#toggleAddBalance').click({force: true});
        cy.contains('button', 'Cadastrar').click({force: true});
        cy.contains('a','Fechar').should('be.visible');
        //Ok!
    })

    it('Caso de Teste 3 - Login com e-mail inválido', () => {
        cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > :nth-child(1) > .input__default').click({force: true}).type('email_errado.com');
        cy.contains('p', 'Formato inválido').should('be.visible');
        //Ok!  
    })
 
    it('Caso de Teste 4 - Login com e-mail inválido/senha não cadastrados', () => {
        cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > :nth-child(1) > .input__default').click({force: true}).type('email@email.com');
        cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').click({force: true}).type('123');
        cy.contains('button', 'Acessar').click({force: true});
        cy.contains('#modalText','Usuário ou senha inválido. Tente novamente ou verifique suas informações!').should('be.visible');
        //Ok!
    })
    

    //Cadastro de usuários por meio de um arquivo JSON
    const usuarios = require('../../fixtures/usuarios.json');
    usuarios.forEach(usuario => {
        it(`Registra novo usuário ${usuario.nome}`  ,() => {
            cy.contains('button', 'Registrar').click();
            cy.get(':nth-child(2) > .input__default').click({force: true}).type(usuario.email);
            cy.get('input[placeholder = "Informe seu Nome"]').click({force: true}).type(usuario.nome);
            cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').click({force: true}).type(usuario.senha);
            cy.get(':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').click({force: true}).type(usuario.confsenha);
            cy.get('#toggleAddBalance').click({force: true});
            cy.contains('button', 'Cadastrar').click({force: true});
            cy.contains('a','Fechar').should('be.visible');
        })
        
    })
    it('Caso de Teste 5 - Login com usuário/senha válidos', () => {

        //inserindo usuário

        cy.cadastrar('test@test.com','Fulana','123','123');
        
        //entrando na conta

        cy.login('test@test.com','123').should(() => {
            const getUsu = localStorage.getItem('test@test.com');   
            const usuObjt = JSON.parse(getUsu);
            cy.get('p').contains(usuObjt.name).should('be.visible');
            cy.get('span').contains(usuObjt.accountNumber).should('be.visible');
        });
    })


    it('Caso de Teste 6 - Tranferência para conta inexistente', () => { 
        //inserindo usuário

        cy.cadastrar('test@test.com','Fulana','123','123');
        cy.contains('a','Fechar').should('be.visible');
        
        //entrando na conta

        cy.login('test@test.com','123');
        cy.contains('a','Sair').should('be.visible');  

        //Tranferencia conta inexistente
        cy.get('#btn-TRANSFERÊNCIA').click();
        cy.get('input[placeholder = "Informe o número da conta"]').click().type(458);
        cy.get('input[placeholder = "Informe o dígito da conta"]').click().type(6);
        cy.get('input[placeholder = "Informe o valor da transferência"]').click().type(55);
        cy.get('input[placeholder = "Informe uma descrição"]').click().type('Teste');
        cy.contains('button','Transferir agora').click();
        cy.contains('p','Conta inválida ou inexistente').should('be.visible');
    
    })
    it('Caso de Teste 7 - Tranferência valor zerado', () => { 
        cy.cadastrar('test@test.com','Fulana','123','123');
        cy.cadastrar('fulana@fulana.com','Siclana','123','123');
        cy.contains('a','Fechar').should('be.visible');
        //entrando na conta

        cy.login('test@test.com','123');
        cy.contains('a','Sair').should('be.visible');  

        //Tranferencia Inválida (valor zerado)
        cy.get('#btn-TRANSFERÊNCIA').click();
        cy.get('input[placeholder = "Informe o número da conta"]').click().type(891);
        cy.get('input[placeholder = "Informe o dígito da conta"]').click().type(1);
        cy.get('input[placeholder = "Informe o valor da transferência"]').click().type(0);
        cy.get('input[placeholder = "Informe uma descrição"]').click().type('Teste');
        cy.contains('button','Transferir agora').click();
        cy.contains('p','Valor da transferência não pode ser 0 ou negativo').should('be.visible');

        
    })

    it('Caso de Teste 8 - Extrato', () => { 
        cy.login('test@test.com','123').should(() => {
            cy.get('#btn-EXTRATO').click();
            const getUsu = localStorage.getItem('transaction:test@test.com');   
            const usuObjt = JSON.parse(getUsu);
            cy.contains('p',usuObjt.type).should('be.visible')
            
        });

        
        
    })



})