let myStr = "dit is een variabele van het datatype string"; //dit is een variabele van het datatype string, waarom?  ______________ vul je antwoord in op de lijn
let myInt = 3; //dit is een variabele van het datatype _integer_ waarom? Een geheel getal, in de context van computerprogrammering, omdat het een gegevenstype is dat wordt gebruikt om reële getallen weer te geven die geen fractionele waarden hebben vul je antwoorden in op de lijn

//Waarom staat er let voor de variabelen? Variabelen gedefinieerd met let kunnen niet opnieuw worden gebruikt vul je antwoord in op de lijn

function getName(naam){ //In op welke regel in de HTML file wordt deze functie aangeroepen p regel 19 vul je antwoord in op de lijn

    // vul in wat naam is: naam is de Parameter vul je antwoord in op de lijn, je hebt de eerste letter al gekregen
    // vul in: naam heeft de waarde onclick de waarde noemen we een Atribute vul je antwoord in op de lijn, je hebt de eerste letter al gekregen

    alert(naam); //dit toont een alert op het scherm met de tekst sup lucien deze tekst staan op regel 19 van de HTML vul je antwoord in op de lijn
}

function hideMe(){ //mag je de naam van de functie veranderen? Nee want anders linked het niet meer het het html element vul je antwoord in op de lijn
    document.getElementById("hide").style.display = "none"; 
    document.getElementById("show").style.display = "block"; 
    // wat gebeurd er in deze functie? het switched tussen 2 afbeeldingen als je er op klikt en waar wordt deze in je HTML aangeroepen? 25 vul je antwoorden in op de lijn
}

function show(){ //als ik de naam van deze functie verander, waar verander ik deze dan in de HTML die moet je veranderen in de "" van onclick vul je antwoord in op de lijn
    document.getElementById("hide").style.display = "block"; // wat doet getElementById? het zorgd er voor dat je alleen een ID kan gebruiken vul je antwoord in op de lijn
    document.getElementById("show").style.display = "none";     
    // wat gebeurd er in deze functie? het laat een afbeelding zien die verborgen is vul je antwoord in op de lijn
}

function rekenen(getal){ //In op welke regel in de HTML file wordt deze functie aangeroepen op regel 34_ en wanneer wordt deze aangeroepen _als je op de button klikt
    let antwoord = myInt + getal; //waar komt de waarde van myInt vandaan van regel 2 met de waarde 3 en waar komt de waarde van getal vandaan? die komt van regel 34 in je html bestand vul je antwoord in op de lijn

    document.querySelector(".som").innerHTML = antwoord;  // wat doet querySelector? querySelector linkt met het element op regel 32 in je HTML bestand  Wat is antwoord hier? vul je antwoorden in op de lijn
    
    //wat gebeurt er in deze functie? hierdoor kan je allen het antwoord zien vul je antwoord in op de lijn

    //verander de waarde van myInt (zorg dat je een getal gebruikt) en refresh de pagina, wat gebeurd er? het telt de getallen bij elkaar op vul je antwoord in op de lijn
    //probeer ook eens de + in een - te veranderen of in een * als waarde van de variabele antwoord (regel 28), zie je wat er gebeurt?
}

function setColor(element, kleur, size){ //In op welke regel in de HTML file wordt deze functie aangeroepen op regel 46 vul je antwoord in op de lijn

    element.style.color = kleur; //waar komt de waarde van element vandaan this en waar komt de waarde van kleur vandaan? orange vul je antwoord in op de lijn
    element.style.fontSize = size; //waar komt de waarde van szie vandaan? uit de css file vul je antwoord in op de lijn

    //wat gebeurt er in deze functie? het veranderd de kleur grote en element vul je antwoord in op de lijn
}

getName(myStr);
// wat gebeurd er hierboven er is een alert en wanneer gebeurt dat als je de pagina refreshed of opstart(tip ververs je pagina eens in je brouwser? vul je antwoord in op de lijn.
// verander de waarde van myStr en kijk wat er dan gebeurt (ververs je browser en test het uit) wat gebeurd er? als je de pagina opstart komt er een alert met de tekst die ingevuld is vul je antwoord in op de lijn.