describe("Clicking Notification Button", () => {
  it("success", () => {
    cy.visit("/");
    cy.intercept(
      "GET",
      "https://my.api.mockaroo.com/api/anomaly-service/10/unread?key=64d94490"
    ).as("getNotifications");
    cy.wait("@getNotifications");
    cy.get('[data-cy="notifications-button"]').click();
  });
});
