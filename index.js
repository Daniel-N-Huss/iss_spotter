const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss');
const { fetchISSPass } = require('./iss');
const { nextISSTimesForMyLocation } = require('./iss');


nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work! ", error);
  }

  const data = passTimes;

  data.forEach(element => {
    let pass = element.risetime;
    let time = new Date(pass * 1000);

    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    let month = months[time.getMonth()];
    let year = time.getFullYear();
    let date = time.getDate();
    let hour = time.getHours();
    let mins = '0' + time.getMinutes();
    let second = '0' + time.getSeconds();
    let formattedTime = date + ' ' + month + ' ' + year + ' ' + hour + ':' + mins.substr(-2);

    console.log(` ** \n Upcoming ISS flyover on ${formattedTime} \n **`);
  });
});


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
//   if (error) {
//     console.log("It didn't work! ", error);
//     return;
//    }
//    console.log(`It worked! Returned coordinated: ${data.latitude} & ${data.longitude}`);
// });

//fetchISSPass({latitude: 49.25000, longitude: -123.13330}, (error, data) => {
//  if (error) {
//    console.log('It did not work! ', error);
//  } else {
//    console.log("It worked! ", data);
//  }
//});