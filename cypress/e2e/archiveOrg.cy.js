/// <reference types="Cypress" />

import { loginPage } from "../page_objects/loginPage";
import { addOrgPage } from "../page_objects/addOrgPage";
import { archiveOrgPage } from "../page_objects/archiveOrgPage";

const credential = {
    validEmail: "sundjer@yahoo.com",
    validPassword: "sundjer123"
};

describe("archive organization", () =>{
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

    it("archive organization", () =>{
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

        cy.intercept({
            method: "GET",
            url: "https://cypress-api.vivifyscrum-stage.com/api/v2/organizations/my_users"
        }).as("addOrganization");

        cy.visit("/my-organizations");
        addOrgPage.addOrgPageHeading
            .scrollIntoView()
            .should("be.visible")
            .click()

        archiveOrgPage.archiveOrganization("neki test title") 
        
    })

})

