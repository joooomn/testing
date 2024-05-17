

describe('finalproject', () => {
    it('[1] user 1 first product', () => {
        cy.visit("https://www.saucedemo.com/")

        cy.get ('[name="user-name"]').type("standard_user")
        cy.get('[name="password"]').type("secret_sauce")
        cy.get('[name="login-button"]').click()
        cy.get('[data-test="inventory-item-sauce-labs-backpack-img"]',) .click();
        cy.get('[data-test="add-to-cart"]').click();
        cy.get('.shopping_cart_badge').should('have.text', '1');   
        cy.get('[data-test="social-twitter"]').click()
  });
    
   
  it('[2] user one second product', () => {
    cy.visit("https://www.saucedemo.com/")

    cy.get ('[name="user-name"]').type("standard_user")
    cy.get('[name="password"]').type("secret_sauce")
    cy.get('[name="login-button"]').click()
 
   cy.get('[data-test="inventory-item-sauce-labs-bike-light-img"]').click();
   cy.get('[data-test="add-to-cart"]').click();
   cy.get('.shopping_cart_badge').should('have.text', '1');
   cy.get('[data-test="shopping-cart-link"]').click();
   cy.get('[data-test="checkout"]').click();

});


it('[3] user one third product', () => {
    cy.visit("https://www.saucedemo.com/")

    cy.get ('[name="user-name"]').type("standard_user")
    cy.get('[name="password"]').type("secret_sauce")
    cy.get('[name="login-button"]').click()
   
    cy.get('[data-test="inventory-item-sauce-labs-bolt-t-shirt-img"]').click()
    cy.get('[data-test="add-to-cart"]').click()
    cy.get('[data-test="back-to-products"]').click()


});
it('[4] user one fourth product', () => {
    cy.visit("https://www.saucedemo.com/")

    cy.get ('[name="user-name"]').type("standard_user")
    cy.get('[name="password"]').type("secret_sauce")
    cy.get('[name="login-button"]').click()

    cy.get('[data-test="inventory-item-sauce-labs-fleece-jacket-img"]').click()
    cy.get('[data-test="add-to-cart"]').click()
    cy.get('[data-test="back-to-products"]').click()



});

  
//     it('[5] user two', () => {
//         cy.visit("https://www.saucedemo.com/")

//         cy.get ('[name="user-name"]').type("locked_out_user")
//         cy.get('[name="password"]').type("secret_sauce")
//         cy.get('[name="login-button"]').click()

//     });

//     it.only('[4] user three product one', () => {
//         cy.visit("https://www.saucedemo.com/")

//         cy.get ('[name="user-name"]').type("problem_user")
//         cy.get('[name="password"]').type("secret_sauce")
//         cy.get('[name="login-button"]').click()
//         cy.get('[data-test="inventory-item-sauce-labs-backpack-img"]').click();
//         cy.get('[data-test="add-to-cart"]').click();
//         cy.get('[data-test="back-to-products"]').click();

//     });

//     it('[5] user three product 2 ', () => {
//         cy.visit("https://www.saucedemo.com/")

//         cy.get ('[name="user-name"]').type("problem_user")
//         cy.get('[name="password"]').type("secret_sauce")
//         cy.get('[name="login-button"]').click()
//         cy.get('[data-test="item-4-title-link"] > [data-test="inventory-item-name"]').click();
//         cy.get('[data-test="add-to-cart"]').click();
//         cy.get('[data-test="back-to-products"]').click();

//     });

//     it('[5] user three product 2 ', () => {
//         cy.visit("https://www.saucedemo.com/")

//         cy.get ('[name="user-name"]').type("problem_user")
//         cy.get('[name="password"]').type("secret_sauce")
//         cy.get('[name="login-button"]').click()
//         cy.get('[data-test="inventory-item-sauce-labs-bike-light-img"]').click();
//         cy.get('[data-test="add-to-cart"]').click();
//         cy.get('[data-test="back-to-products"]').click();

//     });
    
//     it('[6] user three product 3 ', () => {
//         cy.visit("https://www.saucedemo.com/")

//         cy.get ('[name="user-name"]').type("problem_user")
//         cy.get('[name="password"]').type("secret_sauce")
//         cy.get('[name="login-button"]').click()
//         cy.get('[data-test="inventory-item-sauce-labs-bolt-t-shirt-img"]').click();
//         cy.get('[data-test="add-to-cart"]').click();
//         cy.get('[data-test="back-to-products"]').click();

//     });

//     it('[7] user three product 4 ', () => {
//         cy.visit("https://www.saucedemo.com/")

//         cy.get ('[name="user-name"]').type("problem_user")
//         cy.get('[name="password"]').type("secret_sauce")
//         cy.get('[name="login-button"]').click()
//         cy.get('[data-test="inventory-item-sauce-labs-fleece-jacket-img"]').click();
//         cy.get('[data-test="add-to-cart"]').click();
//         cy.get('[data-test="back-to-products"]').click();

//     });

//     it('[8] user three product 5 ', () => {
//         cy.visit("https://www.saucedemo.com/")

//         cy.get ('[name="user-name"]').type("problem_user")
//         cy.get('[name="password"]').type("secret_sauce")
//         cy.get('[name="login-button"]').click()
//         cy.get('[data-test="inventory-item-sauce-labs-onesie-img"]').click();
//         cy.get('[data-test="add-to-cart"]').click();
//         cy.get('[data-test="back-to-products"]').click();

//     });

//     it('[9] user three product 5 ', () => {
//         cy.visit("https://www.saucedemo.com/")

//         cy.get ('[name="user-name"]').type("problem_user")
//         cy.get('[name="password"]').type("secret_sauce")
//         cy.get('[name="login-button"]').click()
//         cy.get('[data-test="inventory-item-test.allthethings()-t-shirt-(red)-img"]').click();
//         cy.get('[data-test="add-to-cart"]').click();
//         cy.get('[data-test="back-to-products"]').click();

//     });

//     it('[10] login 4', () => {
//         cy.visit("https://www.saucedemo.com/")

//         cy.get ('[name="user-name"]').type("performance_glitch_user")
//         cy.get('[name="password"]').type("secret_sauce")
//         cy.get('[name="login-button"]').click()

//     });

//     it('[11] login 5', () => {
//         cy.visit("https://www.saucedemo.com/")

//         cy.get ('[name="user-name"]').type("error_user")
//         cy.get('[name="password"]').type("secret_sauce")
//         cy.get('[name="login-button"]').click()

//     });

//     it('[12] login 6', () => {
//         cy.visit("https://www.saucedemo.com/")

//         cy.get ('[name="user-name"]').type("visual_user")
//         cy.get('[name="password"]').type("secret_sauce")
//         cy.get('[name="login-button"]').click()

//     });


     
//     it('[13] login 7', () => {
//     cy.visit("https://www.saucedemo.com/")

//     cy.get ('[name="user-name"]').type("yousif")
//     cy.get('[name="password"]').type("secret_sauce")
//     cy.get('[name="login-button"]').click()

//     });
    
//     it('[14] login 8', () => {
//     cy.visit("https://www.saucedemo.com/")

//     cy.get ('[name="user-name"]').type("error_user")
//     cy.get('[name="password"]').type("yousif2020")
//     cy.get('[name="login-button"]').click()

//     });
    
//     it('[15] login 9', () => {
//     cy.visit("https://www.saucedemo.com/")

//     cy.get ('[name="user-name"]').type("visual_user")
//     cy.get('[name="password"]').type("secret_sauce")
//     cy.get('[name="login-button"]').click()

//     });

//     it('[16] login 10', () => {
//     cy.visit("https://www.saucedemo.com/")

//     cy.get ('[name="user-name"]').type("george")
//     cy.get('[name="password"]').type("secret_sauce")
//     cy.get('[name="login-button"]').click()

//     });



 });

