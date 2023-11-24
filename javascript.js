let typeAffichage = document.getElementById("type");
let diametreAffichage = document.getElementById("diametre");
let distTerreAffichage = document.getElementById("distance_terre");
let masseAffichage = document.getElementById("masse");
let graviteAffichage = document.getElementById("gravite");
let tempMinAffichage = document.getElementById("temp_min");
let tempMaxAffichage = document.getElementById("temp_max");
let compoAffichage = document.getElementById("composition");

let allButtons = document.querySelectorAll("button");
//console.log(allButtons)

/*
let buttonSun = document.getElementById("soleil");
let buttonMercure = document.getElementById("mercure");
let buttonVenus = document.getElementById("venus");
let buttonTerre = document.getElementById("terre");
let buttonMars = document.getElementById("mars");
let buttonJupiter = document.getElementById("jupiter");
let buttonSaturne = document.getElementById("saturne");
let buttonUranus = document.getElementById("uranus");
let buttonNeptune = document.getElementById("neptune");
*/

const buttonPress = (allButtons) => {
    let pressButtonId;
    let apiIndexArray;

    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].addEventListener("click", () => {
            pressButtonId = allButtons[i].id
            //console.log(pressButtonId)
        })
    }

    switch(pressButtonId) {
        case "soleil":
            console.log(1)
            break
        case "mercure":
            
    }
}

buttonPress(allButtons)


/*
buttonSun.addEventListener("click", () => {
   // apiCall();
});
*/


const apiCall = () => {

    fetch("https://www.datastro.eu/api/explore/v2.1/catalog/datasets/donnees-systeme-solaire-solar-system-data/records?limit=44") 
        .then(data => {
            if (data.ok) {
                return data.json();
            } else {
                throw new Error ("Erreur serveur", {cause: data})
            }       
        })
        .then(reponse => {
            console.log(reponse.results[3].type_d_astre_type_of_planet);
            typeAffichage.innerHTML = reponse.results[3].type_d_astre_type_of_planet;
        })
}





/*let Name = document.getElementById("name");


const Planet = async () => {

let requestInfo = "https://www.datastro.eu/api/explore/v2.1/catalog/datasets/donnees-systeme-solaire-solar-system-data/records?limit=20&refine=ordre_order%3A%220%22&refine=planete_planet%3A%22Sun%20%2F%20Soleil%22";
    
let data = await fetch(requestInfo);
console.log(data);

let reponse = await data.json()
console.log(reponse)

Name.innerHTML = reponse.results[0].planete_planet
};

//Planet() 



const userFetch1 = () => {

fetch("https://www.datastro.eu/api/explore/v2.1/catalog/datasets/donnees-systeme-solaire-solar-system-data/records?limit=44") 
    .then(data => {
        if (data.ok) {
            return data.json();
        } else {
            throw new Error ("Erreur serveur", {cause: data})
        }       
    })
    .then(reponse => {
        console.log(reponse)
    })

}

userFetch1()*/
