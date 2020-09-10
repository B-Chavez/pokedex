var pokemonImageContainer = document.querySelector(".pokeImgContainer");
var createPokemonImage = document.createElement("img");

var bulbasaur = document.querySelector(".bulbasaur");
var charmander = document.querySelector(".charmander");
var squirtle = document.querySelector(".squirtle");
var ivysaur = document.querySelector(".ivysaur");
var venusaur = document.querySelector(".venusaur");
var charmeleon = document.querySelector(".charmeleon");
var charizard = document.querySelector(".charizard");
var wartortle = document.querySelector(".wartortle");
var blastoise = document.querySelector(".blastoise");

bulbasaur.addEventListener('click', function(){changeImage("bulbasaur")})
charmander.addEventListener('click', function(){changeImage("charmander")})
squirtle.addEventListener('click', function(){changeImage("squirtle")})
ivysaur.addEventListener('click', function(){changeImage("ivysaur")})
venusaur.addEventListener('click', function(){changeImage("venusaur")})
charmeleon.addEventListener('click', function(){changeImage("charmeleon")})
charizard.addEventListener('click', function(){changeImage("charizard")})
wartortle.addEventListener('click', function(){changeImage("wartortle")})
blastoise.addEventListener('click', function(){changeImage("blastoise")})

function changeImage(pokemon){

    
    if(pokemonImageContainer.querySelector(".pokemon")){
        pokemonImageContainer.removeChild(document.querySelector(".pokemon"))
    }
    
    if(pokemon === "bulbasaur"){
        makePokemonImage(pokemon)
    } else if(pokemon === "ivysaur"){
        makePokemonImage(pokemon)
    } else if(pokemon === "venusaur"){
        makePokemonImage(pokemon)
    } else if(pokemon === "charmander"){
        makePokemonImage(pokemon)
    } else if(pokemon === "charmeleon"){
        makePokemonImage(pokemon)
    } else if(pokemon === "charizard"){
        makePokemonImage(pokemon)
    } else if(pokemon === "squirtle"){
        makePokemonImage(pokemon)
    } else if(pokemon === "wartortle"){
        makePokemonImage(pokemon)
    } else if(pokemon === "blastoise"){
        makePokemonImage(pokemon)
    }
}


var greenButton = document.querySelector(".greenbutton")
greenButton.addEventListener('click',function (){clearScreen()})

function clearScreen(){
    if(document.querySelector(".pokemon")){
        pokemonImageContainer.removeChild(document.querySelector(".pokemon"))
        document.querySelector(".pokemonImgName").textContent = ""
    }
}

function makePokemonImage(pokemon){
        createPokemonImage.setAttribute("src", "./images/"+ pokemon+ ".png")
        createPokemonImage.setAttribute("class", "pokemon")
        pokemonImageContainer.appendChild(createPokemonImage)
        document.querySelector(".pokemonImgName").textContent = pokemon
}