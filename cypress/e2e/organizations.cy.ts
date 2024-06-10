describe("Testing Organizations Selection", () => {
  Cypress.env("REACT_APP_ENV", "dev");

  it("click second organization", () => {
    cy.visit("/");

    cy.wait(500);

    cy.get('[data-cy="organization-card-2"]').should("exist");
    cy.get('[data-cy="organization-card-2"]').click();
    cy.get('[data-cy="organization-card-2-selected"]').should("exist");
  });

  it("click third organization", () => {
    cy.visit("/");

    cy.wait(500);

    cy.get('[data-cy="organization-card-3"]').should("exist");
    cy.get('[data-cy="organization-card-3"]').click();
    cy.get('[data-cy="organization-card-3-selected"]').should("exist");
  });
});
