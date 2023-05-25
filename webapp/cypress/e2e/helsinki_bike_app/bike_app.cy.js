/// <reference types="cypress" />
const URL = "http://localhost:3000";
describe("helsinki bike app", () => {
  beforeEach(() => {
    cy.visit(URL);
  });

  it("displays two links in home page", () => {
    cy.get('[data-testid="home"]').should("exist");
    cy.get('[data-testid="journeys"]').should("exist");
    cy.get('[data-testid="bicyclestations"]').should("exist");
  });
  it("go to journeys page", () => {
    cy.get('[data-testid="journeys"]').click();
    cy.get('[data-testid="journeys-page"]').should("exist");
  });
  it("go to bicyclestations page", () => {
    cy.get('[data-testid="bicyclestations"]').click();
    cy.get('[data-testid="bicyclestations-page"]').should("exist");
  });
});
