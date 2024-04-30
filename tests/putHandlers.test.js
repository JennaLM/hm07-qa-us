// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
  "productsList": [
    {
      "id": 7,
      "quantity": 1
    }
  ],
  "name": "string"
}


test("Status code should be 200", async () => {
	let actualStatusCode;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/2`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
	actualStatusCode = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatusCode).toBe(200)
});


test("Status code should be 200", async () => {
	let responseOk;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/2`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
	responseOk = response.ok;
	} catch (error) {
		console.error(error);
	}
	expect(responseOk).toBe(true)
});
