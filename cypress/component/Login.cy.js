import Login from "../../src/components/views/public/Login";

const googleButton = '[data-id=google-button]'
const loginHeader = '[data-id=login-header]'


describe('<Login>', () => {
    it('mounts', () => {
        cy.mount(<Login/>)
    })

    it('contains header', () => {
        cy.mount(<Login/>)
        cy.get(loginHeader).contains('Logowanie');
    })

    it('contains google login button', () => {
        cy.mount(<Login/>)
        cy.get(googleButton).children().contains('Sign in with Google');
    })
})