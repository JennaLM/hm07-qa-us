// eslint-disable-next-line no-undef
const config = require('../config');

test("Response code should be 200" , async () => {
let actualStatusCode;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/2`, {
			method: 'DELETE',
		});
	actualStatusCode = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatusCode).toBe(200)
});

test('Response code should be ok' , async () => {
	let responseOk;
		try {
			const response = await fetch(`${config.API_URL}/api/v1/kits/2`, {
				method: 'DELETE',
			});
		 responseOk = response.ok;
		} catch (error) {
			console.error(error);
		}
		expect(responseOk).toBe(true)
	});