const request = require('request');

const fetchMyIP = function(callback) {

  request('https://api.ipify.org?format=json', function(error, response, body) {
    if (error) {
      callback(error, null);
      return;
    }

    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response ${body}`;
      callback(Error(msg), null);
      return;
    }
    const ipData = JSON.parse(body);
    callback(null, ipData.ip);
  });
};


const fetchCoordsByIP = function(ipString, callback) {
  request(`https://ipvigilante.com/${ipString}`, function(error, response, body) {
    if (error) {
      callback(error, null);
      return;
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IPCoords. Response ${body}`;
      callback(Error(msg), null);
      return;
    }
    const returnData = JSON.parse(body);
    let latLon = {};
    latLon.latitude = returnData.data.latitude;
    latLon.longitude = returnData.data.longitude;
    callback(null, latLon);
  });
};


const fetchISSPass = function(coords, callback) {

  request(`http://api.open-notify.org/iss-pass.json?lat=${coords.latitude}&lon=${coords.longitude}`, function(error, response, body) {
    if (error) {
      callback(error, null);
      return;
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching ISS Pass Data. Response ${body}`;
      callback(Error(msg), null);
      return;
    }
    const data = JSON.parse(body);
    const riseTimes = data.response;
    callback(null, riseTimes);
  });
};



module.exports = {
  fetchMyIP,
  fetchCoordsByIP,
  fetchISSPass
};