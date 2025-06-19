describe('pruebas de registro', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/')

    cy.get('[data-cy=inputNombreCompleto').type('testuser')
    cy.get('[data-cy=inputTelefono').type('1234567890')
    cy.get('[data-cy=inputEdad').type('30')
    cy.get('[data-cy=inputDPI').type('1234567890123')
    cy.get('[data-cy=inputCorreoElectronico').type('hola@mail.com')
    cy.get('select').select('Femenino')

    cy.get('[data-cy=inputCV').selectFile('C:\\Users\\findl\\Downloads\\CVPrueba.pdf')
  })

  it('funciona la url', () => {
    cy.visit('http://localhost:5173/')
  })

  it('funciona el botón de registro', () => {
    cy.visit('http://localhost:5173/')
    cy.get('[data-cy=btnRegistrar]').click()
  })
})

