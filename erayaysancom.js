document.addEventListener("DOMContentLoaded", function() {
    const koyuButon = document.getElementById("koyu1");
    const acikButon = document.getElementById("acik1");
    
    const tablo = document.querySelector(".table");
    const menuLinkleri = document.querySelectorAll(".nav-link");
    const cerceveler = document.querySelectorAll(".cerceve1");

    koyuButon.addEventListener("click", function(e) {
        e.preventDefault();
        
        document.body.style.backgroundColor = "#212529";
        document.body.style.color = "white";

        if (tablo) {
            tablo.classList.add("table-dark");
            tablo.style.borderColor = "gray"; 
        }

        menuLinkleri.forEach(function(link) {
            link.classList.remove("text-dark");
            link.classList.add("text-white");
        });

        cerceveler.forEach(function(cerceve) {
            cerceve.style.borderColor = "gray";
        });
    });

    acikButon.addEventListener("click", function(e) {
        e.preventDefault();
        
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";

        if (tablo) {
            tablo.classList.remove("table-dark");
            tablo.style.borderColor = ""; 
        }

        menuLinkleri.forEach(function(link) {
            link.classList.remove("text-white");
            link.classList.add("text-dark");
        });

        cerceveler.forEach(function(cerceve) {
            cerceve.style.borderColor = "";
        });
    });
});