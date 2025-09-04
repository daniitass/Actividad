
describe('registro usuario', ()=>{
    it('happy path', () =>{
         cy.visit('https://ticketazo.com.ar/auth/registerUser')
         
    })
})

describe('Se completa nombre con numeros', ()=>{
    it('Campo Nombre debe recibir letras',()=>{
    cy.visit('https://ticketazo.com.ar/auth/registerUser')
    cy.get('[data-cy="input-nombres"]').type('52365210')
    cy.get('body').click()
    cy.contains('Utiliza un formato que coincida con el solicitado').should('be.visible')
    cy.get('[data-cy="input-dni"]').should('have.value', '01')

    })
})


describe('Muestra mensaje de error si el dni tiene mas de 8 numeros', ()=>{
  it('Campo dni debe tener 8 numeros', ()=>{
    cy.visit('https://ticketazo.com.ar/auth/registerUser')
    cy.get('[data-cy="input-dni"]').type('1025362536')
    cy.get('body').click()
    cy.contains('Utiliza un formato que coincida con el solicitado').should('be.visible')
    cy.get('[data-cy="input-dni"]').should('have.value', '01')
  })
})
