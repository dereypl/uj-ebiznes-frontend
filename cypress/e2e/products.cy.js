const URL = 'https://uj-ebiznes-backend.azurewebsites.net/products'

describe('GET all products', () => {
    it('should try fetch list of products', () => {
        cy.request('GET', URL)
            .then((resp) => {
                expect(resp.status).to.eq(200);
            })

    })
    it('response should contain array of object with valid shape of products', () => {
        cy.request('GET', URL)
            .then((resp) => {
                const product = resp.body[0]
                expect(product).to.have.all.keys('id', 'name', 'price', 'categoryId')
            })
    })
})


describe('GET details of product with id 1 ', () => {
    it('should try fetch product with id 1', () => {
        cy.request('GET', URL +'/1')
            .then((resp) => {
                expect(resp.status).to.eq(200);
            })

    })
    it('response should contain object with valid shape of product', () => {
        cy.request('GET', URL + '/1')
            .then((resp) => {
                expect(resp.body).to.have.all.keys('id', 'name', 'price', 'categoryId')
            })
    })
})
