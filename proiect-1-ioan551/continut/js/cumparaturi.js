
var nr = 0; 
class Produs {
    constructor(nume, cantitate) {
        this.nume = nume;
        this.cantitate = cantitate; 
        nr++; 
    }
}

function func() {
    let produs = new Produs(document.querySelector('input[name="nume"]').value, document.querySelector('input[name="cantitate"]').value);
    localStorage.setItem(nr,nr + " " +  produs.nume + " " + produs.cantitate);
    show(); 
}

function show() {
    var i = 0
    for (i = 1; i <= localStorage.length; i++) {
        document.getElementById("lista").innerHTML = localStorage.getItem(i); 
    }
}
