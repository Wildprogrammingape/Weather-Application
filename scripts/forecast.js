// Get City Api 

// weather app project id in accurate weather Api
const key = 'Ur7ZnxN2RuFGxJl7ZCrbHeDk1jtojHcK';

// get city information  (async function),这里最终return的就是City Object，只是调用async 函数时候需要.then()将其作为Promise来获取数据
const getCity = async (city) => {

    // AccuWeather Api的 City 地址为URL = base url + query
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query); // return promise, wait until promise resolve
    const data = await response.json();         // return promise

    return data[0];                             // return the first match object
    // console.log(data[0]);
};

// get weather information
const getWeather = async (cityId) => {
    // URL = base + query
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${cityId}?apikey=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
    // console.log(data[0]);
};


// getCity('montreal')
// .then((data) => console.log(data))
// .catch((error) => console.log('ERROR'));

// getWeather('56186');



// 所有async函数都return promise,所以需要.then()去获取object数据
// 下面是手动输入城市，最终优化为user input，在app.js中实现

// getCity('montreal')                   // getCity() 返回City的 promise
// .then((data) => getWeather(data.Key)) // getWeather(data.Key) 返回Weather的 promise, 这里data是 City Object
// .then((data) => console.log(data))    // 这里data是 Weather Object
// .catch((err) => console.log(err));








// City Object:
// {Version: 1, Key: "56186", Type: "City", Rank: 25, LocalizedName: "Montreal", …}

// AdministrativeArea: {ID: "QC", LocalizedName: "Quebec", EnglishName: "Quebec", Level: 1, LocalizedType: "Province", …}
// Country: {ID: "CA", LocalizedName: "Canada", EnglishName: "Canada"}
// DataSets: (7) ["AirQualityCurrentConditions", "AirQualityForecasts", "Alerts", "ForecastConfidence", "FutureRadar", "MinuteCast", "Radar"]
// EnglishName: "Montreal"
// GeoPosition: {Latitude: 45.506, Longitude: -73.574, Elevation: {…}}
// IsAlias: false
// Key: "56186"
// LocalizedName: "Montreal"
// PrimaryPostalCode: "H3A"
// Rank: 25
// Region: {ID: "NAM", LocalizedName: "North America", EnglishName: "North America"}
// SupplementalAdminAreas: [{…}]
// TimeZone: {Code: "EDT", Name: "America/Montreal", GmtOffset: -4, IsDaylightSaving: true, NextOffsetChange: "2021-11-07T06:00:00Z"}
// Type: "City"
// Version: 1
// __proto__: Object

// Weather Object:
// {LocalObservationDateTime: "2021-03-30T22:57:00-04:00", EpochTime: 1617159420, WeatherText: "Cloudy", WeatherIcon: 7, HasPrecipitation: false, …}

// EpochTime: 1617159420
// HasPrecipitation: false
// IsDayTime: false
// Link: "http://www.accuweather.com/en/ca/montreal/h3a/current-weather/56186?lang=en-us"
// LocalObservationDateTime: "2021-03-30T22:57:00-04:00"
// MobileLink: "http://m.accuweather.com/en/ca/montreal/h3a/current-weather/56186?lang=en-us"
// PrecipitationType: null
// Temperature: {Metric: {…}, Imperial: {…}}
// WeatherIcon: 7
// WeatherText: "Cloudy"
// __proto__: Object








//response Object，我们需要的数据在response的__proto__的.json() method里:
// Response {type: "cors", url: "http://dataservice.accuweather.com/locations/v1/ci…pikey=Ur7ZnxN2RuFGxJl7ZCrbHeDk1jtojHcK&q=montreal", redirected: false, status: 200, ok: true, …}

// body: (...)
// bodyUsed: true
// headers: Headers {}
// ok: true
// redirected: false
// status: 200
// statusText: "OK"
// type: "cors"
// url: "http://dataservice.accuweather.com/locations/v1/cities/search?apikey=Ur7ZnxN2RuFGxJl7ZCrbHeDk1jtojHcK&q=montreal"
// __proto__: Response