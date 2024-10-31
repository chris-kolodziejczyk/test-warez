/// <reference types="cypress" />

describe('breweries list', () => {
	beforeEach(() => {});

	context('breweries list context', () => {
		it('Log breweries list', () => {
			cy.fixture('example').then((obj) => {
				cy.request({
					url: obj.apiEndpoint,
					method: 'GET',
					headers: {},
					body: {},
					redirect: true,
				}).then((res) => {
					if (expect(res.body['0']).to.be.equal(200)) {
						console.log(res);
					}
				});
			});
		});
	});
});
