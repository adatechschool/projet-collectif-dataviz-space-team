
const buttonPress = pressButtonId => {
  let numberIndex;

  switch (pressButtonId) {
    case "soleil":
      numberIndex = 3;
      break;
    case "mercure":
      numberIndex = 0;
      break;
    case "venus":
      numberIndex = 5;
      break;
    case "terre":
      numberIndex = 2;
      break;
    case "mars":
      numberIndex = 7;
      break;
    case "jupiter":
      numberIndex = 6;
      break;
    case "saturne":
      numberIndex = 8;
      break;
    case "uranus":
      numberIndex = 4;
      break;
    case "neptune":
      numberIndex = 1;
      break;
    default:
      console.log("Cette id est non gérée");
  }

  return numberIndex;
};

const apiCall = async apiIndexArray => {
  let planetInfoArray = [];

  if (apiIndexArray !== null) {
    try {
      const data = await fetch("https://www.datastro.eu/api/explore/v2.1/catalog/datasets/donnees-systeme-solaire-solar-system-data/records?limit=44");
      if (data.ok) {
        const reponse = await data.json();

        const checkValue = [3, 0, 2];

        if (checkValue.includes(apiIndexArray)) {
          planetInfoArray.push((reponse.results[apiIndexArray].planete_planet.split(" / "))[1]);
        } else if (apiIndexArray === 8) {
          planetInfoArray.push((reponse.results[apiIndexArray].planete_planet.split(" / "))[1] + "e");
        } else {
          planetInfoArray.push(reponse.results[apiIndexArray].planete_planet);
        }

        planetInfoArray.push((reponse.results[apiIndexArray].type_d_astre_type_of_planet.split(" / "))[1]);
        planetInfoArray.push(reponse.results[apiIndexArray].diametre_diameter_km);
        planetInfoArray.push(reponse.results[apiIndexArray].distance_moyenne_average_distance_x10_6_km);
        planetInfoArray.push(reponse.results[apiIndexArray].masse_mass_x10_24_kg);
        planetInfoArray.push(reponse.results[apiIndexArray].gravite_gravity_m_s2);
        planetInfoArray.push(reponse.results[apiIndexArray].periode_de_rotation_rotation_period_h);
        planetInfoArray.push(reponse.results[apiIndexArray].temperature_min_lowest_temperature_degc);
        planetInfoArray.push(reponse.results[apiIndexArray].temperature_max_highest_temperature_degc);
        planetInfoArray.push(reponse.results[apiIndexArray].atmospheric_composition.join(" "));
      } else {
        throw new Error("Erreur serveur", { cause: data });
      }
    } catch (error) {
      console.error("Erreur lors de la requête API :", error);
    }
  }

  return planetInfoArray;
};

const scrapping = arrayApi => {
  //arrayApi.splice(4, 0, "Scrapping");
  return arrayApi
};

const displayInfo = (array) => {

  const infoElements = document.querySelectorAll(".info")

  for (let i = 0; i <array.length; i++) {
    const element = infoElements[i];

    if (element) {
      element.textContent = array[i]
    }
  }
    
}

const start = () => {
  const boutons = document.querySelectorAll(".button");

  for (const bouton of boutons) {
    bouton.addEventListener('click', async (event) => {
      const planetValue = event.currentTarget.dataset.planet;
      window.location.href = `single_planet.html?planet=${planetValue}`;
    });
  }

  document.addEventListener('DOMContentLoaded', async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const planetValue = urlParams.get("planet");

    if (planetValue) {
      const resultButtonPress = buttonPress(planetValue);
      const resultArrayApi = await apiCall(resultButtonPress);
      const fullArrayInfo = scrapping(resultArrayApi);
      displayInfo(fullArrayInfo);
    }
  });
};

start();

