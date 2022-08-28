const TEST_PROTOCOL = 'http'
const URL = `${TEST_PROTOCOL}://uj-ebiznes-frontend.azurewebsites.net/products`

const categoriesSidebar = '[data-id=category-sidebar]'
const productsList = '[data-id=products-list]'
const basket = '[data-id=basket]'

describe('Products Page', () => {
    it('should successfully loads', () => {
        cy.visit(URL)
    })

    it('should render list of categories', () => {
        cy.visit(URL)
        expect(cy.get(categoriesSidebar))
    })

    it('should render list of products', () => {
        cy.visit(URL)
        expect(cy.get(productsList))
    })

    it('list of products should contain visible add to basket button', () => {
        cy.visit(URL)
        cy.get(productsList).get('tbody').get('tr').get('td').contains('button', 'Dodaj do koszyka').should('be.visible');
    })

    it('should add product to basket', () => {
        cy.visit(URL)
        cy.get(basket).contains('Koszyk pusty')
        cy.get(productsList).get('tbody').get('tr').get('td').contains('button', 'Dodaj do koszyka').click();
        cy.get(basket).contains('Przejdź do koszyka')
    })
})