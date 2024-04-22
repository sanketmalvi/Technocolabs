// Foursquare API Info
const clientId = 'SG0T3ELXHUFPEDQUSNQ3QURMG3CWQ3HDC3YT30PXZFNL42S1';
const clientSecret = 'D1UZXMOXNMRN0QK0BDBTAWVNOOM2FMMANLRKIG5ZOUQFF4VK';
const url = 'https://foursquare.com/';

// OpenWeather Info
const openWeatherKey = 'a591b91cb4d3c9b9eeb7eb8483119346';
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';

// Page Elements
const $input = $('#city');
const $submit = $('#button');
const $destination = $('#destination');
const $container = $('.container');
const $venueDivs = [$("#venue1"), $("#venue2"), $("#venue3"), $("#venue4")];
const $weatherDiv = $("#weather1");
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Add AJAX functions here:
async function getVenues() {
  try {
    const city = $input.val();
    const urlToFetch = `${url}${city}&limit=10&client_id=${clientId}&client_secret=${clientSecret}&v=${formatDate(new Date())}`;
    const response = await fetch(urlToFetch);
    
    if (response.ok) {
      const jsonResponse = await response.json();
      const venues = jsonResponse.response.groups[0].items.map(item => item.venue);
      return venues;
    }
  } catch (error) {
    console.log(error);
  }
}

async function getForecast() {
  try {
    const urlToFetch = `${weatherUrl}?q=${$input.val()}&APPID=${openWeatherKey}`;
    const response = await fetch(urlToFetch);

    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    }
  } catch (error) {
    console.log(error);
  }
}


function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}${month}${day}`;
}

// Render functions
const renderVenues = (venues) => {
  $venueDivs.forEach(($venue, index) => {
    // Add your code here:

    let venueContent = '';
    $venue.append(venueContent);
  });
  $destination.append(`<h2>${venues[0].location.city}</h2>`);
}

const renderForecast = (day) => {
  // Add your code here:
  
	let weatherContent = '';
  $weatherDiv.append(weatherContent);
}

const executeSearch = () => {
  $venueDivs.forEach(venue => venue.empty());
  $weatherDiv.empty();
  $destination.empty();
  $container.css("visibility", "visible");
  getVenues()
  getForecast()
  return false;
}

$submit.click(executeSearch)