describe('Автотесты', function () {

  beforeEach('Начало теста', function () {
        cy.visit('https://login.qa.studio');
           });


    it('Верный логин и верный пароль', function () {
         cy.visit('/');
         cy.get('#mail').type('german@dolnikov.ru')
         cy.get('#pass').type('iLoveqastudio1')
         cy.get('#loginButton').click();
         cy.get('#messageHeader').contains('Авторизация прошла успешно');
         cy.get('#messageHeader').should('be.visible');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })
 }) 

   it('Логика восстановления пароля', function () {
         cy.visit('/');
         cy.get('#forgotEmailButton').click();
         cy.get('#forgotForm > .header').contains('Восстановите пароль');
         cy.get('#exitRestoreButton > .exitIcon').should('be.visible');
         cy.get('#mailForgot').type('german@dolnikov.ru')
         cy.get('#restoreEmailButton').click();
         cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); 
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
         })

    it('Правильный логин и неверный пароль', function () {
         cy.visit('/');
         cy.get('#mail').type('german@dolnikov.ru')
         cy.get('#pass').type('iLoveqastudio')
         cy.get('#loginButton').click();
         cy.get('#messageHeader').contains('Такого логина или пароля нет');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
         })

    it('Неправильный логин и верный пароль', function () {
         cy.visit('/');
         cy.get('#mail').type('german@dolniko.ru')
         cy.get('#pass').type('iLoveqastudio1')
         cy.get('#loginButton').click();
         cy.get('#messageHeader').contains('Такого логина или пароля нет');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
         })

    it('неправильный логин + правильный пароль', function () {
         cy.visit('/');
         cy.get('#mail').type('germandolnikov.ru')
         cy.get('#pass').type('iLoveqastudio1')
         cy.get('#loginButton').click();
         cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
         })

    it('проверка на приведение к строчным буквам в логине', function () {
         cy.visit('/');
         cy.get('#mail').type('GerMan@Dolnikov.ru')
         cy.get('#pass').type('iLoveqastudio1')
         cy.get('#loginButton').click();
         cy.get('#messageHeader').contains('Авторизация прошла успешно');
         cy.get('#messageHeader').should('be.visible');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
         })
