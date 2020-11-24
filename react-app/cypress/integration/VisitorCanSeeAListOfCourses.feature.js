describe("Visitor can see a list of courses", () => {
  it("gets the complete list of courses", () => {
    cy.visit("/");
    cy.get("[data-cy='list-header'").should("contain", "Course List");
    cy.get("[data-cy='course-first'").should("contain", "Work the web");
    cy.get("[data-cy='course-second'").should(
      "contain",
      "Test automation using Cypress"
    );
    cy.get("[data-cy='course-third'").should("contain", "Introduction to Vue3");
    cy.location("pathname").should("eq", "/index");
  });
});
