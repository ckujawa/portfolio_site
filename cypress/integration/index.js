describe('Index Test', () => {
  it('Visits the Index Page', () => {
    cy.visit('http://localhost:8000')
    cy.contains('Websites that Work for You!')
  })
})
