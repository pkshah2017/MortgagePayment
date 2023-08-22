/// <reference types="cypress" />

export const PRINCIPAL_INPUT_NAME = "principal";
export const INTREST_RATE_INPUT_NAME = "intrest-rate";
export const LOAN_LENGTH_INPUT_NAME = "loan-length";
export const LOAN_PAYMENT_CHART_ID = "loan-payment-chart";
export const LOAN_PAYMENT_TABLE_ID = "loan-payment-table";

context("Mortgage Payment Main App Tests", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it("loads base page", () => {
        // https://on.cypress.io/hash
        cy.get("#input-card").should("be.visible");
    });

    it("loads display cards after input", () => {
        // https://on.cypress.io/hash
        cy.get(`#${PRINCIPAL_INPUT_NAME}`)
            .type("50000")
            .should("have.value", "50000");
        cy.get(`#${INTREST_RATE_INPUT_NAME}`)
            .type("0.05")
            .should("have.value", "0.05");
        cy.get(`#${LOAN_LENGTH_INPUT_NAME}`)
            .type("30")
            .should("have.value", "30");

        cy.get("#input-card").submit();

        cy.get(`#${LOAN_PAYMENT_CHART_ID}`).should("be.visible");
        cy.get(`#${LOAN_PAYMENT_TABLE_ID}`).should("be.visible");
    });
});
