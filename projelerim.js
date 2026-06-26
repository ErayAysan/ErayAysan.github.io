document.addEventListener("DOMContentLoaded", function() {
    const acikButon = document.getElementById("acik1");
    const koyuButon = document.getElementById("koyu1");

    function temaUygula(temaTuru) {
        const tablo = document.querySelector(".table");
        const menuLinkleri = document.querySelectorAll(".nav-link");
        const menuIkonlari = document.querySelectorAll(".nav-link i");
        const kilitIkonlari = document.querySelectorAll(".fa-lock");
        const footer = document.getElementById("site-footer");

        if (temaTuru === "koyu") {
            document.body.style.backgroundColor = "#212529";
            document.body.style.color = "white";

            if (tablo) {
                tablo.classList.remove("table-dark");
                tablo.classList.add("gri-tablo");
            }

            menuLinkleri.forEach(link => {
                link.classList.remove("text-dark");
                link.classList.add("text-white");
            });

            menuIkonlari.forEach(ikon => {
                ikon.style.color = "white";
            });

            kilitIkonlari.forEach(ikon => {
                ikon.style.color = "black";
            });

            if (footer) {
                footer.classList.remove("bg-light");
                footer.classList.add("bg-dark");
                footer.style.color = "white";
                const footerLink = footer.querySelector("a");
                if (footerLink) {
                    footerLink.classList.remove("text-dark");
                    footerLink.classList.add("text-white");
                }
            }
        } else {
            document.body.style.backgroundColor = "white";
            document.body.style.color = "black";

            if (tablo) {
                tablo.classList.remove("gri-tablo");
                tablo.classList.add("table-dark");
            }

            menuLinkleri.forEach(link => {
                link.classList.remove("text-white");
                link.classList.add("text-dark");
            });

            menuIkonlari.forEach(ikon => {
                ikon.style.color = "black";
            });

            kilitIkonlari.forEach(ikon => {
                ikon.style.color = "white";
            });

            if (footer) {
                footer.classList.remove("bg-dark");
                footer.classList.add("bg-light");
                footer.style.color = "black";
                const footerLink = footer.querySelector("a");
                if (footerLink) {
                    footerLink.classList.remove("text-white");
                    footerLink.classList.add("text-dark");
                }
            }
        }
    }

    const kaydedilenTema = localStorage.getItem("secilenTema");
    
    if (kaydedilenTema === "koyu") {
        temaUygula("koyu");
    } else {
        temaUygula("acik");
    }

    if (koyuButon) {
        koyuButon.addEventListener("click", function(e) {
            e.preventDefault();
            temaUygula("koyu");
            localStorage.setItem("secilenTema", "koyu");
        });
    }

    if (acikButon) {
        acikButon.addEventListener("click", function(e) {
            e.preventDefault();
            temaUygula("acik");
            localStorage.setItem("secilenTema", "acik");
        });
    }
});