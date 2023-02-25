class ArchiveOrgPage{

    get archiveOrgLink(){
        return cy.get("/my_users");
    }

    get archiveOrgPageHeading(){
        return cy.get("h2").eq(2);
    }

    get archiveOrgIcon(){
        return cy.get(".vs-c-icon-archive");
    }

    get confirmBtn(){
        return cy.get(".el-button.el-button--success").eq(1);
    }

    archiveOrganization(title) {
        this.archiveOrgPageHeading.type(title)
        this.archiveOrgIcon.click()
        this.confirmBtn.click()
    }
}

export const archiveOrgPage = new ArchiveOrgPage();