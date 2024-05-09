// eslint-disable-next-line no-undef
let config = require('../config');

let requestBody = {
"productsList": [
    {
      "id": 3,
      "quantity": 1
    }
  ]
}


test('Status code should be 201', async () => {
 let actualStatusCode;
    try {
		let response = await fetch(`${config.API_URL}/api/v1/orders`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
	actualStatusCode = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatusCode).toBe(201);
});

let requestBody = {
	"productsList": [
		{
		  "id": 4,
		  "quantity": 1
		}
	  ]
	}
	
	
	test('Status code should be 201', async () => {
	 let actualStatusCode;
		try {
			let response = await fetch(`${config.API_URL}/api/v1/orders`, {
				method: 'POST',
				headers: {
				'Content-Type': 'application/json'
				},
				body: JSON.stringify(requestBody)
			});
		actualStatusCode = response.status;
		} catch (error) {
			console.error(error);
		}
		expect(actualStatusCode).toBe(201);
	});
	
