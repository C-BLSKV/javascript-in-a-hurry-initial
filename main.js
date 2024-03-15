//Menu Section

    document.getElementById("open-nav-menu").addEventListener('click', function() {
        document.querySelector("header nav .wrapper").classList.add("nav-open");
        let client = " César "
    });
    
    document.getElementById("close-nav-menu").addEventListener('click', function() {
        document.querySelector("header nav .wrapper").classList.remove("nav-open");
    });
    
//Greating Section
const GreatingText = "Good Morning";
const weatherConditions = "Sunny";
const userLocation = "Concon";
let temperature = "22";
let weatherText = `The weather is ${weatherConditions} in ${userLocation} and it\'s ${temperature.toString}°C outside.`

// aplicación de var:

    var client = " César ";
    console.log ("hello"  + client +   "Welcome to Casso");

// aplicación de let:

function exampleFunction() {
    let localVar = "I am a local variable";
  
    if (true) {
      let innerVar = "I am also a local variable"; // Otra variable local con let
      console.log(innerVar); // Se puede acceder a innerVar dentro de este bloque
    }
  
    console.log(localVar); // Se puede acceder a localVar dentro de la función
    // console.log(innerVar); // Esto generaría un error, innerVar no es accesible aquí
  }
  
  exampleFunction();
  
  //aplicación de const:

  const costumer = " César"; // Declaración de una constante con const
  let balance = 3000;
  console.log ("Hi!" + costumer + ". Your balance in your count is USD " + balance);
  
  balance = balance + 1000;

  console.log ("Hi!" + costumer + ". Your new balance in your count is USD " + balance);
