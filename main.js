var bulbasaur = document.querySelector(".bulbasaur");
var pokemonImageContainer = document.querySelector(".pokeImgContainer");
var charmander = document.querySelector(".charmander");
var squirtle = document.querySelector(".squirtle");

bulbasaur.addEventListener('click', function (){changeImage("bulbasaur")})
charmander.addEventListener('click', function (){changeImage("charmander")})
squirtle.addEventListener('click', function (){changeImage("squirtle")})

function changeImage(pokemon){
    var createPokemonImage = document.createElement("img")
    
    if(pokemonImageContainer.querySelector(".pokemon")){
        pokemonImageContainer.removeChild(document.querySelector(".pokemon"))
    }
    
    if(pokemon === "bulbasaur"){
        createPokemonImage.setAttribute("src", "./Bulbasaur.png")
        createPokemonImage.setAttribute("class", "pokemon")
        pokemonImageContainer.appendChild(createPokemonImage)
        return;
    } else if(pokemon === "charmander"){
        createPokemonImage.setAttribute("src", "./Charmander.png")
        createPokemonImage.setAttribute("class", "pokemon")
        pokemonImageContainer.appendChild(createPokemonImage)
        return;
    } else if(pokemon === "squirtle"){
        createPokemonImage.setAttribute("src", "./Squirtle.png")
        createPokemonImage.setAttribute("class", "pokemon")
        pokemonImageContainer.appendChild(createPokemonImage)
    }
    return;
}