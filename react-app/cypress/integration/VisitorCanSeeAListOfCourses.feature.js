describe("Visitor can see a list of courses", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  it("gets the complete list of courses", () => {
    cy.get("[data-cy='list-header']").should("contain", "Course List");
    cy.get("[data-cy='course-1']").should("contain", "Work The Web");
    cy.get("[data-cy='course-2']").should(
      "contain",
      "Test automation using Cypress"
    );
    cy.get("[data-cy='course-3'").should("contain", "Introduction to Vue3");
    cy.location("pathname").should("eq", "/index");
  });
});
