const weatherKey = '5c9e7c782a891dbdfe95be3a167d40d0';

const london = {
  lat: 51.5073219,
  lon: -0.1276474
}

const nameCity = document.getElementById('nameCity');
const description = document.getElementById('description');
const coordinatesLatitude = document.getElementById('latitude');
const coordinatesLongitude = document.getElementById('longitude');
const temp = document.getElementById('temp');
const icon = document.getElementById('icon');

const getWeather = async (latitude = london.lat, longitude = london.lon) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${weatherKey}`
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
const getCoordinateCity = async (nameCity = 'Caracas') => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${nameCity}&appid=${weatherKey}`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data)
  return data;
}

getCoordinateCity('Cartagena')
  .then(response => {
    getWeather(response.coord.lat, response.coord.lon);
    nameCity.innerText = response.name;
    description.innerText = response.weather[0].description;
    coordinatesLatitude.innerText = response.coord.lat;
    coordinatesLongitude.innerText = response.coord.lon;
    temp.innerText = response.main.temp;

    let iconWeather = response.weather[0].icon;
    icon.setAttribute('src', `https://openweathermap.org/img/wn/${iconWeather}@2x.png`);
  });