class AddOrgPage{

    get addOrgLink(){
       return cy.get("/my-organizations");
    }

    get addOrgPageHeading(){
        return cy.get("h2").eq(2);
    }

    get organizationInput(){
        return this.createOrgModal.find("input")
    }

    get cancelBtn(){
        return this.createOrgModal.find("button").eq(1)
    }

    get nextBtn(){
        return this.createOrgModal.find("button").last()
    }

   get createOrgModal() {
        return cy.get(".vs-c-modal");
   }

   createOrganization(title) {
    this.organizationInput.type(title)
    this.nextBtn.click()
    this.nextBtn.click()
   }
}

export const addOrgPage= new AddOrgPage();