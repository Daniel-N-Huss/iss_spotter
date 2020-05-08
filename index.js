const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss');





//49.25000 & -123.13330
//45.44.90.151

// holdover test code

// fetchMyIP((error, ip) => {
// if (error) {
// console.log("It didn't work!", error);
// return;
// }

// console.log('It worked! Returned IP: ', ip);
// });


// fetchCoordsByIP('45.44.90.151', (error, data) => {
// if (error) {
// console.log("It didn't work! ", error);
// return;
// }
// console.log(`It worked! Returned coordinated: ${data.latitude} & ${data.longitude}`);
// });
