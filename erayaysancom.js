document.addEventListener("DOMContentLoaded", function() {
    const koyuButon = document.getElementById("koyu1");
    const acikButon = document.getElementById("acik1");
    
    const tablo = document.querySelector(".table");
    const menuLinkleri = document.querySelectorAll(".nav-link");
    const cerceveler = document.querySelectorAll(".cerceve1");
    const tabloBasligi = document.querySelector("caption");
    const tabloCerceve = document.querySelector(".tablocerceve1");

    function temaUygula(temaTuru) {
        if (temaTuru === "koyu") {
            document.body.style.backgroundColor = "#212529";
            document.body.style.color = "white";

            if (tablo) {
                tablo.classList.add("table-dark");
            }
            if (tabloCerceve) {
                tabloCerceve.style.borderColor = "white";
            }
            if (tabloBasligi) {
                tabloBasligi.style.color = "white";
            }

            menuLinkleri.forEach(function(link) {
                link.classList.remove("text-dark");
                link.classList.add("text-white");
            });

            cerceveler.forEach(function(cerceve) {
                cerceve.style.borderColor = "white";
            });
        } else {
            document.body.style.backgroundColor = "white";
            document.body.style.color = "black";

            if (tablo) {
                tablo.classList.remove("table-dark");
            }
            if (tabloCerceve) {
                tabloCerceve.style.borderColor = "";
            }
            if (tabloBasligi) {
                tabloBasligi.style.color = "black";
            }

            menuLinkleri.forEach(function(link) {
                link.classList.remove("text-white");
                link.classList.add("text-dark");
            });

            cerceveler.forEach(function(cerceve) {
                cerceve.style.borderColor = "";
            });
        }
    }

    const kaydedilenTema = localStorage.getItem("secilenTema");
    if (kaydedilenTema === "koyu") {
        temaUygula("koyu");
    } else {
        temaUygula("acik");
    }

    koyuButon.addEventListener("click", function(e) {
        e.preventDefault();
        temaUygula("koyu");
        localStorage.setItem("secilenTema", "koyu");
    });

    acikButon.addEventListener("click", function(e) {
        e.preventDefault();
        temaUygula("acik");
        localStorage.setItem("secilenTema", "acik");
    });

    const iletisimFormu = document.querySelector("form");
    if (iletisimFormu) {
        iletisimFormu.addEventListener("submit", function(e) {
            e.preventDefault();
            fetch(iletisimFormu.action, {
                method: "POST",
                body: new FormData(iletisimFormu)
            })
            .then(response => {
                if(response.ok) {
                    alert("Mesajınız başarıyla gönderildi!");
                    iletisimFormu.reset();
                } else {
                    alert("Bir hata oluştu, lütfen daha sonra tekrar deneyin.");
                }
            })
            .catch(error => {
                alert("Bağlantı hatası yaşandı, internetinizi kontrol edin.");
            });
        });
    }
});
