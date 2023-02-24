/// <reference types="Cypress" />

import { loginPage } from "../page_objects/loginPage";
import { addOrgPage } from "../page_objects/addOrgPage";

const credential = {
    validEmail: "sundjer@yahoo.com",
    validPassword: "sundjer123"
};

describe("add organization", () => {
    beforeEach("visit app and click the login link", () => {
        cy.intercept({
            method: "POST",
            url: "https://cypress-api.vivifyscrum-stage.com/api/v2/login",
        }).as("successfullogin");

        cy.visit("/");
        loginPage.login(credential.validEmail, credential.validPassword);
        cy.wait("@successfullogin").then((interception) => {
            console.log("INTERCEPTION", interception);
            expect(interception.response.statusCode).eq(200);
        });
    });

    it("add organization", () => {
        cy.intercept({
            method: "POST",
            url: "https://cypress-api.vivifyscrum-stage.com/api/v2/organizations"
        }).as("addOrganization");

        cy.visit("/my-organizations");
        addOrgPage.addOrgPageHeading
            .scrollIntoView()
            .should("be.visible")
            .click()

        addOrgPage.createOrganization("neki test title")
    })



})
