describe('Test Crawler basic behaviors ', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('Check the nav page correct appear', () => {
    cy.get('nav')
      .find('img')
      .should('have.attr', 'alt')
      .should('include', 'logo_axur');

    cy.get('nav')
      .find('img')
      .should('have.attr', 'aria-label')
      .should('include', 'Logotipo do app crawler');

    cy.get('nav').find('span').contains('Web Crawlers');

    cy.get('nav')
      .find('button')
      .should('have.attr', 'aria-label')
      .should('include', 'Language to english');
  });

  it('Check the nav language page correct behavior', () => {
    const buttonBr = '[aria-label="Idioma para português"]';
    const buttonUS = '[aria-label="Language to english"]';

    cy.get(buttonBr).click();
    cy.get('main').find('h2').contains('Listagem de crawlers');

    cy.get(buttonUS).click();
    cy.get('main').find('h2').contains('Crawlers list');
  });

  it('Check corretly behavior to add new crawl', () => {
    cy.get('main').contains('Is empty here!');
    cy.wait(1000);

    cy.get('button').contains('New search').click();
    cy.get('main').contains('Create new search');
    cy.get('input[name="input-keyword"]').type('teste');
    cy.get('button').contains('Create search').click();

    cy.get('main').contains('teste');
    cy.get('main').contains('In progress');
  });

  it('Check detail crawl', () => {
    cy.get('main').contains('teste').click();

    cy.get('main').contains('Detail search');

    cy.get('main').contains('teste');

    cy.get('[aria-label="Botão voltar"]').click();
  });
});
