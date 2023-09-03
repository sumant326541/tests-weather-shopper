Cypress.Commands.add('addProductToCart', (product) => {
    // Filter and collect the prices of products  
    cy.get(product).siblings('p').then(($prices) => {
      const productPrices = [];
      // Iterate through the products and collect prices
      $prices.each((index, element) => {
        const priceText = Cypress.$(element).text().trim().replace('Price:', '').replace('Rs.', '').trim();
        const price = parseFloat(priceText);
        productPrices.push(price);
      })
  
      const minimumPrice = Math.min(...productPrices)
  
      // Find the index of the least expensive product
      const minPriceIndex = productPrices.indexOf(minimumPrice)
      // Click the "Add" button of the least expensive product
      cy.get(product).eq(minPriceIndex).siblings('button').click()
  
    })
  
  })
  
  //Verify correct product added in cart
  Cypress.Commands.add('verifyProductInCart', (prod1, prod2) => {
    cy.get('.table tr td:nth-child(1)').eq(0).should('contain', prod1);
    cy.get('.table tr td:nth-child(1)').eq(1).should('contain', prod2);
  })
  
  //complete payment with card
  Cypress.Commands.add('completePayment', () => {
    cy.contains('Pay with Card').click()
    cy.get('iframe').then($iframe => {
      const $body = $iframe.contents().find('body')
      cy.wrap($body).find('#email').type('test@gmail.com');
      cy.wait(2000)
      cy.wrap($body).find('.cardNumberInput').type('4242424242424242');
      cy.wait(2000)
      cy.wrap($body).find('#cc-exp').type('02');
      cy.wrap($body).find('#cc-exp').type('28');
      cy.wrap($body).find('.cardCVCInput').type('314');
      cy.wrap($body).find('.zipCodeInput').type('13581');
      cy.wrap($body).find('.iconTick').click();
    })
  
  })