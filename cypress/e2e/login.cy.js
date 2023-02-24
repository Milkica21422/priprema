/// <reference types="Cypress" />

import { loginPage } from "../page_objects/loginPage"

const credential ={
    validEmail: "sundjer@yahoo.com",
    validPassword: "sundjer123"
};

describe("login test", () =>{
    beforeEach("visit app and click the login link", () => {
        cy.visit("/");
       
        cy.url().should("include", "/login");
        loginPage.loginPageHeading
          .should("be.visible")
          .and("have.text", "Log in with your existing account");
        });  

    it("login with valid credentials", () =>{
        cy.intercept({
            method: "POST",
            url: "https://cypress-api.vivifyscrum-stage.com/api/v2/login",
          }).as("successfullogin");

       loginPage.login(credential.validEmail, credential.validPassword);
       cy.wait("@successfullogin").then((interception) => {
        console.log("INTERCEPTION", interception);
        expect(interception.response.statusCode).eq(200);  
      });

      cy.url().should("not.include", "/login");
    });
});