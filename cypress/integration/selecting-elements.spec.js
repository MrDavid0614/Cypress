describe('Text box with max characters', ()=>{

    it('displays the appropiate remaining characters count', ()=>{

        cy.visit('http://localhost:3000/example-3');

        cy.get('[data-cy=first-name-chars-left-count]')
            .invoke('text')
            .should('equal', '15');

        cy.get('[data-cy=input-first-name]')
            .type('hello');

        cy.get('[data-cy=first-name-chars-left-count]')
            .invoke('text')
            .should('equal', '10');

        cy.get('[data-cy=input-first-name]')
            .type(' my friend');

        cy.get('[data-cy=first-name-chars-left-count]')
            .invoke('text')
            .should('equal', '0');

    });

    it('prevents the user from typing more characters once max is exceeded', ()=> {
        cy.visit('http://localhost:3000/example-3');

        cy.get('[data-cy=input-first-name]')
            .type('abcdefghijklmnñopqrstuvwxyz');

        cy.get('[data-cy=input-first-name]')
            .should('have.attr', 'value', 'abcdefghijklmnñ');

    })
})