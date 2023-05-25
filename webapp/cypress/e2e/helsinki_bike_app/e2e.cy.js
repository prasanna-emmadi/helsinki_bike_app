/// <reference types="cypress" />
const URL = "http://localhost:3000";
describe("helsinki bike app", () => {
  beforeEach(() => {
    cy.visit(URL);
  });

  it("displays two links in home page", () => {});
});
