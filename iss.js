/* Getting some data

Create a file called iss.js. In it, write a simple node program that will output the 
latitude and longitude of the International Space Station.

Practice your google-fu by searching for “iss api” and figuring out the correct URL to 
use. Hint: there are many options and they are all good :)

Notice that the values provided by the API are very precise. Round off the values to two 
decimal digits for a nicer display. Hint: toFixed */

// var url = 'https://maps.googleapis.com/maps/api/geocode/json?address=montreal';

// request(url, function(err, response) {
//     if (err) {
//         console.log('there was an error');
//     }
//     else {
//         console.log(typeof response.body);
//     }
// });
var request = require('request');


var url = "http://api.open-notify.org/iss-now.json"

request(url, function(err, response) {
    if (err) {
        console.log("there was an error");
    }
    else {
        var data = JSON.parse(response.body).iss_position;
        data.latitude = Number(data.latitude.toFixed(2));
        data.longitude = Number(data.longitude.toFixed(2));
        console.log(data);
    }
});