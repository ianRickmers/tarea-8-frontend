let main = document.getElementById("main");

class Character{
    constructor(id, name, species, image){
        this.id = id;
        this.name = name;
        this.species = species;
        this.image = image;
    }

    get getId(){
        return this.id;
    }

    get getName(){
        return this.name;
    }

    get getSpecies(){
        return this.species;
    }

    get getImage(){
        return this.image;
    }

    set setId(id){
        this.id = id;
    }

    set setName(name){
        this.name = name;
    }

    set setSpecies(species){
        this.species = species;
    }

    set setImage(image){
        this.image = image;
    }

    //Descripción: Función que crea las tarjetas de los personajes 
    //Entrada: Ninguna
    //Salida: Ninguna
    show(){
        main.innerHTML += 
        `<div class="card">
            <div class="card-inner">
                <div class="card-front">
                    <div class="card-body">
                        <img src="${this.getImage}" alt="${this.getName}" class="card-img">
                    </div>
                </div>
                <div class="card-back">
                    <div class="card-body">
                        <h1 class="card-title">${this.getName}</h1>
                        <p class="card-text">Species: ${this.getSpecies}</p>
                    </div>
                </div>
            </div>
        </div>`;
    }
}




//Descripción: Función que obtiene los datos de la API y devuelve un parámetro con los resultados
//Entrada: Ninguna
//Salida: Un arreglo con los resultados de la API
const characters = async () => {
    try {
        const URL = "https://rickandmortyapi.com/api/character";
        const response = await fetch(URL);
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.log(error);
    }
};


//Descripción: Función que crea los personajes y los muestra en pantalla
//Entrada: Ningunacrea las tarjetas de los personajes y además las funciones de voltear la tarjeta
//Salida: Ninguna
const characterCards = (async () => {
    const data = await characters();
    for (let i = 0; i < 20; i++) {
        const character = new Character(data[i].id, data[i].name, data[i].species, data[i].image);
        character.show();
    }
    const cards = document.querySelectorAll('.card');

    //Descripción: Función que agrega la clase flipping a la tarjeta y la clase flipped a la tarjeta que se le da click
    //Entrada: Ninguna
    //Salida: Ninguna
    cards.forEach(function (card) {
        card.addEventListener('click', function () {
            card.classList.add('flipping');
            card.classList.toggle('flipped');
        });
        card.addEventListener('transitionend', function () {
            card.classList.remove('flipping');
        });
    });
    
})();
    

