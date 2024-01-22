
    document.getElementById("open-nav-menu").addEventListener('click', function() {
        document.querySelector("header nav .wrapper").classList.add("nav-open");
    });
    
    document.getElementById("close-nav-menu").addEventListener('click', function() {
        document.querySelector("header nav .wrapper").classList.remove("nav-open");
    });
    