it("should load the page", () => {
    cy.visit("/");
    cy.findAllByText(/koszyk pusty/i).should("have.length", 1);
});

