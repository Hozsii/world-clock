function updateTime() {
  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDateElement = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".time");
    let parisTime = moment().tz("Europe/Paris");

    parisDateElement.innerHTML = parisTime.format("MMMM DD, YYYY");
    parisTimeElement.innerHTML = parisTime.format("HH:mm:ss ");
  }

  let sanFranciscoElement = document.querySelector("#san-francisco");
  if (sanFranciscoElement) {
    sanFrancisoDateElement = sanFranciscoElement.querySelector(".date");
    sanFrancisoTimeElement = sanFranciscoElement.querySelector(".time");
    let sanFrancicsoTime = moment().tz("America/Los_Angeles");

    sanFrancisoDateElement.innerHTML = sanFrancicsoTime.format("MMMM DD, YYYY");
    sanFrancisoTimeElement.innerHTML = sanFrancicsoTime.format("HH:mm:ss");
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("HH:mm:ss")} 
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citySelectElement = document.querySelector("#city");

citySelectElement.addEventListener("change", updateCity);
