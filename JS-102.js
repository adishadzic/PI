let poruka;
function kalkulatorOcjene(bodovi) {
    if(bodovi<50){ poruka = "Dobili ste 1, zagrijte malo stolicu..."; return 1}
    if(bodovi>=50 && bodovi<65){ poruka = "Nije loše, ali može i bolje!"; return 2;}
    if(bodovi>=65 && bodovi<75){ poruka = "Dobili ste 3!"; return 3;}
    if(bodovi>=75 && bodovi<90){ poruka = "Vrlo dobro, dobili ste 4!"; return 4;}
    if(bodovi>=90 && bodovi<100){ poruka = "Čestitamo! Dobili ste 5!"; return 5;}
}

let bodovi = prompt ("Unesi broj bodova");
let ocjena = kalkulatorOcjene(bodovi);

console.log(poruka);