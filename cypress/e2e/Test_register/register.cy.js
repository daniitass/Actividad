// cypress/e2e/register.cy.js
describe('Registro de usuario en Ticketazo', () => {
  const baseUrl = "https://ticketazo.com.ar/auth/registerUser";

  beforeEach(() => {
    cy.visit(baseUrl);
  });

  //  Caso positivo 1: Registro exitoso con datos válidos
  it.skip('Debería registrar un usuario con datos válidos', () => {
    cy.get('[data-cy="input-nombres"]').type('Juan');
    cy.get('[data-cy="input-apellido"]').type('Pérez');
    cy.get('[data-cy="input-telefono"]').type('1152635263');
    cy.get('[data-cy="input-dni"]').type('36258952');
    cy.get('[data-cy="select-provincia"]').type('Buenos Aires{enter}');
    cy.get('[data-cy="select-localidad"]').type('Chacabuco{enter}');
    cy.get('[data-cy="input-fecha-nacimiento"]').type('14-01-1997');
    cy.get('[data-cy="input-email"]').type(`juan${Date.now()}@test.com`); // email único
    cy.get('[data-cy="input-confirmar-email"]').type(`juan${Date.now()}@test.com`);
    cy.get('[data-cy="input-password"]').type('Password123!');
    cy.get('[data-cy="input-repetir-password"]').type('Password123!');
    cy.get('button[type="submit"]').click();

    // Aserción: esperar redirección o mensaje de éxito
    cy.contains('Registro exitoso').should('exist');
  });

    //  Caso  2: Registro sin fecha de nacimiento
  it.skip('Debe pedir que se complete el campo', () => {
    cy.get('[data-cy="input-nombres"]').type('Juan')
    cy.get('[data-cy="input-apellido"]').type('Pérez')
    cy.get('[data-cy="input-telefono"]').type('1152635263')
    cy.get('[data-cy="input-dni"]').type('36258952')
    cy.get('[data-cy="select-provincia"]').type('Buenos Aires{enter}')
    cy.get('[data-cy="select-localidad"]').type('Chacabuco{enter}')
   // cy.get('[data-cy="input-fecha-nacimiento"]').type('14-01-1997')
    cy.get('[data-cy="input-email"]').type(`juan${Date.now()}@test.com`) // email único
    cy.get('[data-cy="input-confirmar-email"]').type(`juan${Date.now()}@test.com`)
    cy.get('[data-cy="input-password"]').type('Password123!')
    cy.get('[data-cy="input-repetir-password"]').type('Password123!')
    cy.get('button[type="submit"]').click()
   
  });
   //  Caso  3: Registro con un dni más extenso
  it('Debe rechazar y decir q el DNI es incorrrecto', () => {
    cy.get('[data-cy="input-nombres"]').type('Juan')
    cy.get('[data-cy="input-apellido"]').type('Pérez')
    cy.get('[data-cy="input-telefono"]').type('1152635263')
    cy.get('[data-cy="input-dni"]').type('3625100008952')
    cy.get('[data-cy="select-provincia"]').type('Buenos Aires{enter}')
    cy.get('[data-cy="select-localidad"]').type('Chacabuco{enter}')
    cy.get('[data-cy="input-fecha-nacimiento"]').type('14-01-1997')
    cy.get('[data-cy="input-email"]').type(`juan${Date.now()}@test.com`) // email único
    cy.get('[data-cy="input-confirmar-email"]').type(`juan${Date.now()}@test.com`)
    cy.get('[data-cy="input-password"]').type('Password123!')
    cy.get('[data-cy="input-repetir-password"]').type('Password123!')
    cy.get('button[type="submit"]').click()
   
  });


});
