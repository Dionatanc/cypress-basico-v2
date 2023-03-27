Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('#firstName').type('Dionatan')
    cy.get('#lastName').type('Carvalho')
    cy.get('#email').type('teste@teste.com')
    cy.get('#open-text-area').type('test')
    cy.contains('button', 'Enviar').click()

})