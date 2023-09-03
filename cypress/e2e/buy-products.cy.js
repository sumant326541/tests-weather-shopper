/// <reference types ="Cypress"/>
var i = 0;
for (i = 0; i < 40; i++) {
  describe('Shop for moisturizers or suncreens based on temprature', () => {
    beforeEach(() => {
      cy.visit('http://weathershopper.pythonanywhere.com/');
    });

    it('Should Shop for moisturizers if the weather is below 19 and Shop for suncreens if the weather is above 34 degrees', () => {
      cy.get('#temperature').then(($temp) => {
        const temperature = parseFloat($temp.text().trim());
        if (temperature > 34) {
          cy.log('temprature is ' + temperature + ', Hence, buy sunscreens')
          // Click the "Buy sunscreens" button
          cy.contains('Buy sunscreens').click();
          // Verify if landed to Sunscreens page
          cy.get('h2').should('contain', 'Sunscreens');
          //Add least expensive sunscreen that is SPF-50 and SPF-50
          cy.addProductToCart('p:contains(SPF-50)')
          cy.addProductToCart('p:contains(SPF-30)')
          //Go to cart
          cy.get('#cart').click()
          //Verify SPF-50 and SPF-50 suncreen added to cart
          cy.verifyProductInCart('SPF-50', 'SPF-30')


        } else if (temperature < 19) {
          cy.log('temprature is ' + temperature + ', Hence buy moisturizers')
          // Click the "Buy moisturizers" button
          cy.contains('Buy moisturizers').click();
          // Verify if landed to Moisturizers page
          cy.get('h2').should('contain', 'Moisturizers');
          //Add least expensive moisturizers that is Aloe and Almond
          cy.addProductToCart('p:contains(Aloe)')
          cy.addProductToCart('p:contains(Almond)')
          //Go to cart
          cy.get('#cart').click()
          //Verify Aloe and Almond moisturizers added to cart
          cy.verifyProductInCart('Aloe', 'Almond')
        }

        //Complete payment using card
        cy.completePayment()
        //Verify if payment was successful or failed
        if (cy.get('h2').should('have.text', 'PAYMENT SUCCESS')) {
          cy.get('.text-justify').should('have.text', 'Your payment was successful. You should receive a follow-up call from our sales team.')
        } else {
          cy.get('h2').should('have.text', 'PAYMENT FAILED')
          cy.get('.text-justify').should('have.text', 'Oh, oh! Your payment did not go through. Please bang your head against a wall, curse the software gods and then try again.')
        }

      })

    })

  })
}