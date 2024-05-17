describe('my project', () => {
    it('[1] visit website cypress', () => {
        cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html")

        cy.get ('[name="first_name"]').type("yousif")
        cy.get ('[name="last_name"]').type("hatem")
        cy.get ('[name="email"]').type("yousifhatem@gmail.com")
        cy.get ('.feedback-input') .eq (3).type("cypress")
        cy.get('[type="submit"]').click()
        
        
    });

});