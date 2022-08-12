////////////////////*** API  ***////////////////////

let array = [];
  for (let i = 0; i < 101; i++) {
    array.push(i);
}

const URL = `https://rickandmortyapi.com/api/character/${array}`

fetch(URL)
  .then((response) => response.json())  
  .then((data) => chars(data))

const chars = (data) => {    
  
  let characters = data; 
  let body = ``
  characters.forEach(({ image, name, species, status, gender, origin, location}) => {
    body += `
        <div class="cardsrm">            
            <img src="${image}" alt="${name}">
            <h3>Name: ${name}</h3>
            <h3>Specie: ${species}<h3>
            <h3>Status: ${status}<h3>
            <h3>Gender: ${gender}<h3>
            <h3>Origen: ${origin.name}<h3>
            <h3>Location: ${location.name}<h3>               
        </div>
    `
  })
  document.getElementById("fetch-cards").innerHTML = body
}
