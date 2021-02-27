describe('Text box with max characters', ()=>{

    beforeEach(() => {

        cy.visit('http://localhost:3000/example-3');

    });

    it('displays the appropiate remaining characters count', ()=>{

        cy.get('[data-cy=first-name-chars-left-count]')
            .as('CharsLeftSpan');

        cy.get('[data-cy=input-first-name]')
            .as('CharInput');

        cy.get('@CharsLeftSpan')
            .invoke('text')
            .should('equal', '15');

        cy.get('@CharInput')
            .type('hello');

        cy.get('@CharsLeftSpan')
            .invoke('text')
            .should('equal', '10');

        cy.get('@CharInput')
            .type(' my friend');

        cy.get('@CharsLeftSpan')
            .invoke('text')
            .should('equal', '0');

    });

    it('prevents the user from typing more characters once max is exceeded', ()=> {

        cy.get('[data-cy=input-first-name]')
            .as('CharInput');

        cy.get('@CharInput')
            .type('abcdefghijklmnñopqrstuvwxyz');

        cy.get('@CharInput')
            .should('have.attr', 'value', 'abcdefghijklmnñ');

    });
});