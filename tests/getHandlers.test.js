// eslint-disable-next-line no-undef
const config = require('../config');

test("Should return 200 status code….", async () => {
    let actualStatusCode;
    try {
        const response = await fetch(`${config.API_URL}/api/v1/kits/1`);
    actualStatusCode = response.status;
    } catch (error) {
        console.error(error);
    }
    expect(actualStatusCode).toBe(200);
});

test("Should return 200 status code….", async () => {
    let actualStatusCode;
    try {
        const response = await fetch(`${config.API_URL}/api/v1/kits/2`);
    actualStatusCode = response.status;
    } catch (error) {
        console.error(error);
    }
    expect(actualStatusCode).toBe(200);
});
