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
  sanFrancisoDateElement = sanFranciscoElement.querySelector(".date");
  sanFrancisoTimeElement = sanFranciscoElement.querySelector(".time");
  let sanFrancicsoTime = moment().tz("America/Los_Angeles");

  sanFrancisoDateElement.innerHTML = sanFrancicsoTime.format("MMMM DD, YYYY");
  sanFrancisoTimeElement.innerHTML = sanFrancicsoTime.format("HH:mm:ss");
}

updateTime();
setInterval(updateTime, 1000);
