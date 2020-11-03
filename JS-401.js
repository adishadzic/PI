let lista = [
    {
    ime: "Adis",
    prezime: "Hadzic",
    upisan: false
    },

    {
    ime: "Marica",
    prezime: "Marić",
    upisan: true
    },

    {
    ime: "Gabrijela",
    prezime: "Gabić",
    upisan: false
    },

    {
    ime: "Jake",
    prezime: "Peralta",
    upisan: true
    },

    {
    ime: "Michael",
    prezime: "Scott",
    upisan: false
    },

    {
    ime: "Raymond",
    prezime: "Holt",
    upisan: true
    },

    {
    ime: "Rosa",
    prezime: "Diaz",
    upisan: false
    },

    {
    ime: "Amy",
    prezime: "Santiago",
    upisan: true
    },

    {
    ime: "Charles",
    prezime: "Boyle",
    upisan: true
    },

    {
    ime: "Jim",
    prezime: "Halpert",
    upisan: true
    }
   ];

function provjeri(lista, pojam){
    for (let i=0; i<10; i++){
        if((lista[i].ime || lista[i].prezime)==pojam){
            if(Boolean(lista[i].upisan)){
                return true;
            }
        }
    }
}

console.log(provjeri(lista, "Jim"));