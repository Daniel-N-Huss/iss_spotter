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
