describe('pruebas de registro', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/')
    // Llenando el formulario de registro
    cy.get('[data-cy="inputNombre"]').type('Análisis');
    cy.get('[data-cy="inputApellido"]').type('Diseño');
    cy.get('[data-cy="inputCorreoElectronico"]').type('ayd1@usac.edu.gt');
    cy.get('[data-cy="pass"]').type('JosueAYD1');
    cy.get(':nth-child(6) > .w-full').select('Masculino'); // Select gender from dropdown
    cy.get('[data-cy="inputFechaNacimiento"]').type('1990-01-01'); // Sample date
    cy.get('[data-cy="inputDireccion"]').type('Ciudad universitaria zona 12, Ciudad de Guatemala');

    // Click "Registrarse" button
    cy.get('.bg-blue-600').click();
  })

  it('funciona la url', () => {
    cy.visit('http://localhost:5173/')
  })

  it('funciona el botón de registro', () => {
    cy.visit('http://localhost:5173/')
    cy.get('[data-cy=btnRegistrar]').click()
  })
})

