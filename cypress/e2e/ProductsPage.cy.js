const URL = 'http://uj-ebiznes-frontend.azurewebsites.net/products'

describe('Products Page', () => {
    it('successfully loads', () => {
        cy.visit(URL)
    })
})