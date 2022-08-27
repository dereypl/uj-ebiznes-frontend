const URL = 'https://uj-ebiznes-backend.azurewebsites.net/categories'

describe('GET categories', () => {
    it('should try fetch list of categories', () => {
        cy.request('GET', URL)
            .then((resp) => {
                expect(resp.status).to.eq(200);
            })

    })
    it('response should contain array of object with valid shape of category', () => {
        cy.request('GET', URL)
            .then((resp) => {
                const product = resp.body[0]
                expect(product).to.have.all.keys('id', 'name')
            })
    })
})


describe('GET categories/:id ', () => {
    it('should try fetch category with id 1', () => {
        cy.request('GET', URL + '/1')
            .then((resp) => {
                expect(resp.status).to.eq(200);
            })

    })
    it('response should contain object with valid shape of category', () => {
        cy.request('GET', URL + '/1')
            .then((resp) => {
                expect(resp.body).to.have.all.keys('id', 'name')
            })
    })
})


describe('POST categories', () => {
    it('create new category', () => {
        cy.request(
            'POST', URL, {
            "name": "Testowa kategoria",
            "id": 0,
        })
            .then((resp) => {
                expect(resp.status).to.eq(201)
            })
    })
})

