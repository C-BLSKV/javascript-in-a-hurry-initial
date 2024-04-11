//Menu Section

document.getElementById("open-nav-menu").addEventListener('click', function() {
    document.querySelector("header nav.wrapper").classList.add("nav-open");
    let client = " César "
});

document.getElementById("close-nav-menu").addEventListener('click', function() {
    document.querySelector("header nav.wrapper").classList.remove("nav-open");
});


//Greating Section

function celsiusToFahr(temperature) {
    let fahr = (temperature * 9/5) + 32;
    return fahr;
}

const greetingText = "Good Morning";
const weatherConditions = "Sunny";
const userLocation = "Concon";
let temperature = 20;

// Función para actualizar el texto del clima
function updateWeatherText() {
    let celsiusText = `The weather is ${weatherConditions} in ${userLocation} and it's ${temperature} °C outside.`;
    let fahrText = `The weather is ${weatherConditions} in ${userLocation} and it's ${celsiusToFahr(temperature)} °F outside.`;

    // Dependiendo del estado, muestra el texto en Celsius o Fahrenheit
    let weatherText = isCelsius ? celsiusText : fahrText;
    document.querySelector("p#weather").innerHTML = weatherText;
}

// Variable para determinar si se muestra en Celsius o Fahrenheit
let isCelsius = true;

// Inicializa el contenido del clima
updateWeatherText();

document.querySelector("#greeting").innerHTML = greetingText;

// Agrega el evento change a los botones de radio
document.querySelectorAll('input[name="temperature"]').forEach((radio) => {
    radio.addEventListener('change', function() {
        if (this.id === "celsius") {
            isCelsius = true;
        } else if (this.id === "fahrenheit") {
            isCelsius = false;
        }

        // Actualiza el texto del clima cuando se cambia el botón de radio
        updateWeatherText();
    });
});

    // Actualiza el texto del clima cuando se hace clic en los botones
    updateWeatherText();

setInterval (function(){
let localTime = new Date();

document.querySelector("span[data-time=hours]").textContent = localTime.getHours().toString().padStart (2,"0");

document.querySelector("span[data-time=minutes]").textContent = localTime.getMinutes().toString().padStart (2,"0");

document.querySelector("span[data-time=seconds]").textContent = localTime.getSeconds().toString().padStart (2,"0");
}, 1000);

//Gallery Images

//img src="/assets/gallery/image1.jpg" alt="image 1"

const galleryImages = [
    {src : "./assets/gallery/image1.jpg",
      alt : "image 1"
    },
{src : "./assets/gallery/image2.jpg",
      alt : "image 2"
    },
{src : "./assets/gallery/image3.jpg",
  alt : "image 3" 
     },
];

for (let i = 0; i <galleryImages.length; i++) {
    
}

let mainImage = document.querySelector('#gallery > img');
let thumbnails = document.querySelector('#gallery .thumbnails');

mainImage.src = galleryImages [0].src
mainImage.alt = galleryImages [0].src

//<img src="./assets/gallery/image1.jpg" alt="Thumbnail Image 1"
//data-array-index="0" 
//data-selected="true">

galleryImages.forEach (function(image,index){

    let thumb = document.createElement ("img");
    thumb.src = image.src;
    thumb.alt = image.alt;
    thumb.dataset.arrayIndex = index;
    thumb.dataset.selected = true;
    thumbnails.appendChild(thumb);

});