var prompt = require("prompt");
var request = require("request");
Number.prototype.toRadians = function() {
    return this * Math.PI / 180;
};

var urlISS = "http://api.open-notify.org/iss-now.json";

var distance = function(lat1, lat2, lon1, lon2, city) {
    var R = 6371e3; // metres
    var φ1 = lat1.toRadians();
    var φ2 = lat2.toRadians();
    var Δφ = (lat2 - lat1).toRadians();
    var Δλ = (lon2 - lon1).toRadians();

    var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
        Math.cos(φ1) * Math.cos(φ2) *
        Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    var d = R * c;

    console.log("The distance from " + city + " to the ISS is " + (d = R * c).toFixed(2));

};




function getCity() {

    prompt.get('city', function(err, answer) {

        if (err) {
            console.log("There was an error");
        }
        else {
            var url = "https://maps.googleapis.com/maps/api/geocode/json?address=" + answer.city;

            request(url, function(err, response) {
                if (err) {
                    console.log("There was an error");
                }
                else {
                    var data = JSON.parse(response.body).results[0].geometry.location;
                    
                    var lat1 = Number(data.lat.toFixed(2));
                    var lon1 = Number(data.lng.toFixed(2));

    

                    request(urlISS, function(err, response) {
                        if (err) {
                            console.log("there was an error");
                        }
                        else {
                            var data = JSON.parse(response.body).iss_position;
                            var lat2 = Number(data.latitude.toFixed(2));
                            var lon2 = Number(data.longitude.toFixed(2));
                            distance(lat1, lat2, lon1, lon2, answer.city);
                        }
                    });

                }
            });
        }
    });
}




getCity();
