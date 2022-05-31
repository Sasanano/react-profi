describe('Adding new event', () => {
    it("Ability to add new event", () => {
    cy.visit("http://localhost:3000/login");
    cy.get("form");
    cy.get('input[id="username"]').type("admin").should('have.value', 'admin');
    cy.get("form");
    cy.get('input[id="password"]').type("123");
    cy.get('button').click()
    cy.get('button[class="ant-btn"]').click()
    cy.get('input[id="description"]').type("Some event");
    cy.get('input[id="date"]').click()
    cy.get('a[class="ant-picker-today-btn"]').click()
    cy.get('input[id="date"]').click()
    cy.get('button[class="ant-picker-header-next-btn"]').click()
    cy.get('div[class="ant-picker-cell-inner"]').last().click()
    cy.get('input[id="guest"]').click().type('{pageDown}', {force: true}).type('{enter}', {force: true}).blur()
    cy.get('button[type="submit"]').click({force: true})
  })
})