Cypress.Commands.add('login',(nome,senha) => {
    cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > :nth-child(1) > .input__default').click({force: true}).type(nome);
    cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').click({force: true}).type(senha);
    cy.contains('button', 'Acessar').click({force: true});
    cy.contains('a','Sair').should('be.visible');  
        cy.request({
            method: 'GET',
            url: 'https://bugbank.netlify.app/home'
        })
        .then((res) =>{
          expect(res.status).to.be.equal(200)
           expect(res.body).is.not.empty
        })  
})

Cypress.Commands.add('cadastrar', (email,nome,senha,confsenha) => {
    cy.contains('button', 'Registrar').click({force:true});
        cy.get(':nth-child(2) > .input__default').click({force: true}).type(email);
        cy.get('input[placeholder = "Informe seu Nome"]').click({force: true}).type(nome);
        cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').click({force: true}).type(senha);
        cy.get(':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').click({force: true}).type(confsenha);
        cy.get('#toggleAddBalance').click({force: true});
        cy.contains('button', 'Cadastrar').click({force: true});
        cy.contains('a','Fechar').should('be.visible');
})

Cypress.Commands.add('isVisible', {
    prevSubject: true
  }, (subject) => {
    const isVisible = (elem) => !!(
      elem.offsetWidth ||
      elem.offsetHeight ||
      elem.getClientRects().length
    )
    expect(isVisible(subject[0])).to.be.true
  })