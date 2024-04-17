//Global Section
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

//Menu Section
function menuHandler () {
    document.getElementById("open-nav-menu").addEventListener('click', function() {
        document.querySelector("header div.wrapper").classList.add("nav-open");
        let client = "César"
    });
    
    document.getElementById("close-nav-menu").addEventListener('click', function() {
        document.querySelector("header div.wrapper").classList.remove("nav-open");
    });
}

//Greating Section
function celsiusToFahr(temperature) {
    let fahr = (temperature * 9/5) + 32;
    return fahr;
}

function  greetingHandler () {
    let currentHour = new Date().getHours();
    let greetingText
    
    if (currentHour < 12 ) {
        greetingText = "Good Morning!";
    }  else if (currentHour < 19 ) {
        greetingText = "Good Afternoon!";
    } else if (currentHour < 24) {
        greetingText = "Good Evening!";
    } else {
        greetingText = "Welcome!";
    }

       // weather Section
       const weatherConditions = "Sunny";
       const userLocation = "Concon";
       let temperature = 20;
   
       function updateWeatherText() {
           let celsiusText = `The weather is ${weatherConditions} in ${userLocation} and it's ${temperature} °C outside.`;
            let fahrText = `The weather is ${weatherConditions} in ${userLocation} and it's ${celsiusToFahr(temperature)} °F outside.`;
   
       // Status Celcius o Fahr
           let weatherText = isCelsius ? celsiusText : fahrText;
           document.querySelector("p#weather").innerHTML = weatherText;
       }
   
   // Let sistem temperature section
   let isCelsius = true;
   
   // Start Weather Section
   updateWeatherText();
   
   document.querySelector("#greeting").innerHTML = greetingText;
   
   //switch temperature section
   document.querySelectorAll('input[name="temperature"]').forEach((radio) => {
       radio.addEventListener('change', function() {
           if (this.id === "celsius") {
               isCelsius = true;
           } else if (this.id === "fahrenheit") {
               isCelsius = false;
           }
   
           // Change bottom weather secction
           updateWeatherText();
       });
   });
   
       // upgrate bottom text weather section
       updateWeatherText();
}

//Local Time Section
function clockHandler () {
    setInterval (function(){
        let localTime = new Date();
        
        document.querySelector("span[data-time=hours]").textContent = localTime.getHours().toString().padStart (2,"0");
        
        document.querySelector("span[data-time=minutes]").textContent = localTime.getMinutes().toString().padStart (2,"0");
        
        document.querySelector("span[data-time=seconds]").textContent = localTime.getSeconds().toString().padStart (2,"0");
        }, 1000);
}

//Gallery Images
function galleryHandler () {
    for (let i = 0; i <galleryImages.length; i++) {
    
    }
    
    let mainImage = document.querySelector('#gallery > img');
    let thumbnails = document.querySelector('#gallery .thumbnails');
    
    mainImage.src = galleryImages [0].src
    mainImage.alt = galleryImages [0].alt
    
    //<img src="./assets/gallery/image1.jpg" alt="Thumbnail Image 1"
    //data-array-index="0" 
    //data-selected="true">
    
    galleryImages.forEach (function(image,index){
    
        let thumb = document.createElement ("img");
        thumb.src = image.src;
        thumb.alt = image.alt;
        thumb.dataset.arrayIndex = index;
        thumb.dataset.selected = index === 0 ? 'true' : 'false';
    
        thumb.addEventListener('click', function(e) {
            let selectedIndex = (e.target.dataset.arrayIndex);
            let selectedImage = galleryImages [selectedIndex]
    
            mainImage.src =selectedImage.src
            mainImage.alt = selectedImage.alt
    
            thumbnails.querySelectorAll("img").forEach(function(img) {
                img.dataset.selected = false;
            });
    
            e.target.dataset.selected = 'true';
    
        });
        
    
        thumbnails.appendChild(thumb);
    
    });
}


//Page Load
    menuHandler ();
    greetingHandler ();
    clockHandler ();
    galleryHandler ();