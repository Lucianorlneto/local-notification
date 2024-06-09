describe("Clicking Notification Button", () => {
  Cypress.env("REACT_APP_ENV", "local");
  Cypress.env("REACT_APP_API_URL", "https://my.api.mockaroo.com");

  it("access first notification", () => {
    cy.visit("/");

    cy.wait(500);

    cy.get('[data-cy="notifications-button"]').should("exist");
    cy.get('[data-cy="notifications-button"]').click();

    cy.wait(300);

    cy.get('[data-cy="notification-card-0"]').should("exist");
    cy.get('[data-cy="notification-card-0"]').click();

    cy.get('[data-cy="notification-not-found"]').should("not.exist");
    cy.get('[data-cy="notification-title"]').should("exist");
    cy.get('[data-cy="notification-description"]').should("exist");
  });

  it("access unkown notification", () => {
    cy.visit("/");
    cy.visit("/notification/a");

    cy.get('[data-cy="notification-title"]').should("not.exist");
    cy.get('[data-cy="notification-description"]').should("not.exist");
    cy.get('[data-cy="notification-not-found"]').should("exist");
  });

  it("access unkown notification", () => {
    cy.visit("/");
    cy.visit("/notification/a");

    cy.get('[data-cy="notification-title"]').should("not.exist");
    cy.get('[data-cy="notification-description"]').should("not.exist");
    cy.get('[data-cy="notification-not-found"]').should("exist");
  });

  it("mark all as read", () => {
    cy.visit("/");

    cy.wait(500);

    cy.get('[data-cy="notifications-button"]').should("exist");
    cy.get('[data-cy="notifications-button"]').click();

    cy.wait(300);

    cy.get('[data-cy="notification-card-0"]').should("exist");

    cy.get('[data-cy="notification-drawer-read-all-button"]').should("exist");
    cy.get('[data-cy="notification-drawer-read-all-button"]').click();

    cy.get('[data-cy="notification-card-0"]').should("not.exist");
  });
});
