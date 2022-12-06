const 

  heading = document.getElementById("heading"),
  characters = document.getElementById("characters"),
  prev = document.getElementById("prev"),
  next = document.getElementById("next"),
  searchInput = document.getElementById("searchInput"),
  search = document.getElementById("search"),
  alive = document.getElementById("alive"),
  dead = document.getElementById("dead"),
  start = document.getElementById("start"),
  male = document.getElementById("male"),
  female= document.getElementById("female")

function getCharacters(url) {
  fetch(url)

	.then((res) => res.json())
	.then((data) => {
		console.log(data);


		characters.innerHTML = data.results
			.map( (item) => `
        <div class="card">
          <img src = '${item.image}' alt="Imagen de: '${item.name}'" "/>
          <div class="cardInfo">
              <h3>${item.name}</h3>
              <p><span>Status: </span>${item.status}</p>
              <p><span>Specie: </span>${item.species}</p>
              <p><span>Gender: </span>${item.gender}</p>
              <p><span>Location: </span>${item.location.name}</p>
              <p><span>Was seen in: </span>${item.episode.length} episodes</p>
          </div>
        </div>
      `
	).join("");});

}

getCharacters(`https://rickandmortyapi.com/api/character/`);

let counter = 1;

next.addEventListener("click", () => {
	getCharacters(`https://rickandmortyapi.com/api/character/?page=${++counter}&name=${searchInput.value}` )
});

prev.addEventListener("click", () => {
  getCharacters(`https://rickandmortyapi.com/api/character/?page=${--counter}&name=${searchInput.value}`)
});

search.addEventListener("click", () => {
	getCharacters(`https://rickandmortyapi.com/api/character/?name=${searchInput.value}`)
})

vivos.addEventListener("click", () => {
	getCharacters(`https://rickandmortyapi.com/api/character/?status=alive`)
})

dead.addEventListener("click", () => {
	getCharacters(`https://rickandmortyapi.com/api/character/?status=dead`)
})

male.addEventListener("click", () => {
  getCharacters(`https://rickandmortyapi.com/api/character/?gender=male`)
})

female.addEventListener("click", () => {
  getCharacters(`https://rickandmortyapi.com/api/character/?gender=female`)
})

start.addEventListener("click", () => {
  getCharacters(`https://rickandmortyapi.com/api/character`),
  searchInput.value = null;
})

