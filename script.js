function porownajTablice() {

    var tablica1Input = document.getElementById("tablica1").value;
    var tablica2Input = document.getElementById("tablica2").value;


    var tablica1 = tablica1Input.split(",").map(Number); 
    var tablica2 = tablica2Input.split(",").map(Number);

  
    for (var i = 0; i < tablica2.length; i++) {
        var index = tablica1.indexOf(tablica2[i]);
        while (index !== -1) {
           
            tablica1.splice(index, 1);
   
            index = tablica1.indexOf(tablica2[i]);
        }
    }


    var wynikDiv = document.getElementById("wynik");
    
    if (tablica1.length > 0) {
        wynikDiv.innerHTML = "<p>Wynik porównania: " + tablica1.join(", ") + "</p>";
    } else {
        wynikDiv.innerHTML = "<p>Brak wspólnych elementów.</p>";
    }
}
