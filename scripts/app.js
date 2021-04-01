const FormInput = document.querySelector('form');

const details = document.querySelector('.details');

const time = document.querySelector('.time');
const icon = document.querySelector('.icon img')


// Call API function, 传递用户输入城市，返回 {city, Weather} Object
const callAccuWeatherApi = async (cityInput) => {

    // Call getCity() -- get City Object
    const CityDetails = await getCity(cityInput);
    // Call getWeather() -- get Weather Object
    const WeatherDetails = await getWeather(CityDetails.Key);

    // console.log(typeof CityDetails);  -- 是object
    // console.log(CityDetails); -- 是 City Object

    const WeatherInfo = {
        CityDetails: CityDetails, 
        WeatherDetails: WeatherDetails
    };

    // return WeatherInfo Object;
    return WeatherInfo;
};


// Update UI, 更新网页上的天气信息
const updateUI = (WeatherInfo) => {

    const CityObject = WeatherInfo.CityDetails;
    const WeatherObject = WeatherInfo.WeatherDetails;

    details.innerHTML = `
        <h5>${CityObject.EnglishName}</h5>
        <div>${WeatherObject.WeatherText}</div>
        <div>
            <span>${WeatherObject.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>
    `;

    // update image
    let timeSrc = null;
    timeSrc = (WeatherObject.IsDayTime) ? 'img/day.svg' : 'img/night.svg';
    time.setAttribute('src', timeSrc);

    // update icon
    iconSrc = `img/icons/${WeatherObject.WeatherIcon}.svg`;
    icon.setAttribute('src',iconSrc);
};


// add 'submit' event listener on form 
FormInput.addEventListener('submit', e => {
    // prevent refreshing 
    e.preventDefault();

    // get value of user input
    const cityInput = FormInput.city.value.trim();

    // Call async function, 用.then()来resolve promise (async函数最终返回promise)
    callAccuWeatherApi(cityInput)
    .then((data) => updateUI(data));
});








// WeatherInfo Object:
// {CityDetails: {…}, WeatherDetails: {…}}

// CityDetails: {Version: 1, Key: "56186", Type: "City", Rank: 25, LocalizedName: "Montreal", …}
// WeatherDetails: {LocalObservationDateTime: "2021-03-30T23:53:00-04:00", EpochTime: 1617162780, WeatherText: "Cloudy", WeatherIcon: 7, HasPrecipitation: false, …}
// __proto__: Object