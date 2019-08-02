const request = require('request');

const forecast = (lat, long, callback) => {
    const url = 'https://api.darksky.net/forecast/[YOUR KEY]' + lat + ',' + long;

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined);
        } else if (body.error) {
            callback('Unable to find location', undefined);
        } else {
            callback(undefined, body.daily.data[0].summary + " It is currently " + body.currently.temperature + " degrees out. There is a " + body.currently.precipProbability + "% chance of rain. The highest temperature is expected to be " + body.daily.data[0].temperatureHigh + " degrees today. " + body.daily.summary);
        }
    })
}

module.exports = forecast;
