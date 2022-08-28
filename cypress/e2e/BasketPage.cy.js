const URL = 'http://uj-ebiznes-frontend.azurewebsites.net/products'

const productsList = '[data-id=products-list]'
const basketTable = '[data-id=basket-table]'
const basket = '[data-id=basket]'
const goBackButton = '[data-id=go-back-button]'
const handlePaymentButton = '[data-id=handle-payment-button]'

describe('Basket Page', () => {
    it('should successfully loads', () => {
        cy.visit(URL)
        cy.get(productsList).get('tbody').get('tr').get('td').contains('button', 'Dodaj do koszyka').click();
        cy.get(basket).click()
    })

    it('should contain at least one item having remove button', () => {
        cy.visit(URL)
        cy.get(productsList).get('tbody').get('tr').get('td').contains('button', 'Dodaj do koszyka').click();
        cy.get(basket).click()
        cy.get(basketTable).get('tbody').get('tr').get('td').contains('button', 'Usuń produkt').should('be.visible');
    })

    it('should render navigation buttons', () => {
        cy.visit(URL)
        cy.get(productsList).get('tbody').get('tr').get('td').contains('button', 'Dodaj do koszyka').click();
        cy.get(basket).click()
        cy.get(goBackButton).should('be.visible');
        cy.get(handlePaymentButton).should('be.visible');
    })
})