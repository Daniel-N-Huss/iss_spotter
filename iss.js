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

module.exports = {
  fetchMyIP,
  fetchCoordsByIP
};