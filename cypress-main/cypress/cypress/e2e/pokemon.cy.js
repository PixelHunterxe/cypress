 it('Покупка тренера', function () {   
         cy.visit('https://pokemonbattle.ru/'); 
         cy.get('.style_1_popup_white_in').should('be.visible');
         cy.get('#k_email').type('ss8289184@gmail.com');           
         cy.get('#k_password').type('Sveta18');                
         cy.get('button[type="submit"]').click().should('be.visible');                
         cy.get('.header_card_trainer').should('be.visible').click();
         cy.get('.k_mobile > :nth-child(5) > #dropdown > img').should('be.visible').click();
         cy.get('.available > button:not([disabled])').first().should('be.visible').click();
         cy.get('.card_number').should('be.visible').type('4620869113632996');                     
         cy.get('.card_csv').type('125');                            
         cy.get('.card_date').type('1226');                          
         cy.get('.card_name').type('NAME');                           
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment:not([disabled])').should('be.visible').click();
         cy.get('.threeds_number').should('be.visible').type('56456');                            
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment:not([disabled])').should('be.visible').click(); 
         cy.get('.payment_status_top_title').should('be.visible').contains('Покупка прошла успешно');
     });

     