function updateTime() {
  let budapestElement = document.querySelector("#budapest");
  if (budapestElement) {
    let budapestDateElement = budapestElement.querySelector(".date");
    let budapestTimeElement = budapestElement.querySelector(".time");
    let budapestTime = moment().tz("Europe/Budapest");

    budapestDateElement.innerHTML = budapestTime.format("MMMM	Do YYYY");
    budapestTimeElement.innerHTML = budapestTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let sanFranciscoElement = document.querySelector("#san-francisco");
  if (sanFranciscoElement) {
    sanFrancisoDateElement = sanFranciscoElement.querySelector(".date");
    sanFrancisoTimeElement = sanFranciscoElement.querySelector(".time");
    let sanFrancicsoTime = moment().tz("America/Los_Angeles");

    sanFrancisoDateElement.innerHTML = sanFrancicsoTime.format("MMMM Do YYYY");
    sanFrancisoTimeElement.innerHTML = sanFrancicsoTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
    <a href="/">Home page</a>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citySelectElement = document.querySelector("#city");

citySelectElement.addEventListener("change", updateCity);
