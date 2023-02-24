class LoginPage{

    get loginLink(){
        return cy.get("a[href='/login']");
    }

    get loginPageHeading(){
        return cy.get("h1");
    }

    get emailInput(){
        return cy.get(".el-input__inner").first();
    }

    get passwordInput(){
        return cy.get(".el-input__inner").eq(-2);
    }

    get loginBtn(){
        return cy.get("button").eq(0);
    }
     
    login(email,password){
        this.emailInput.type(email);
        this.passwordInput.type(password);
        this.loginBtn.click();
    }

}

export const loginPage = new LoginPage();