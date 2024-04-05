var inputvalue = document.querySelector('#cityinput');
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput'); // Added '#' before 'cityoutput'
var description = document.querySelector('#description'); // Changed 'descrip' to 'description'
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');
var apik = "e2aa56f0c8e111ea0c71ab0ef46ecfcb";

function convertion(val) {
    return (val - 273).toFixed(3);
}

btn.addEventListener('click', function() {  
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&appid='+apik)
    .then(res => res.json())
    .then(data => {
        var nameval = data['name'];
        var descrip = data['weather'][0]['description']; // Corrected accessing 'description'
        var temperature = data['main']['temp'];
        var windspeed = data['wind']['speed'];

        city.innerHTML = `Weather of <span>${nameval}</span>`; // Added backticks and closed <span> tag
        temp.innerHTML = `Temperature: <span>${convertion(temperature)} C</span>`;
        description.innerHTML = `Sky Conditions: <span>${descrip}</span>`;
        wind.innerHTML = `Wind Speed: <span>${windspeed} km/h</span>`;
    })
    .catch(err => alert('You entered the wrong city name'));
});
