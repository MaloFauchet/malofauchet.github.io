/************************************************************
  Fonctions qui permetttent d'agrandir les infos acteurs
*************************************************************/

// Acteur 1
function afficherTexte1() {
  var boutonEnSavoirPlus = document.querySelector('.buttonAff1');
  var boutonRetrecir = document.querySelector('.cache1 + button');
  var elementRetrecir = document.querySelector('.cache1');

  boutonEnSavoirPlus.style.display = 'none';
  boutonRetrecir.style.display = 'block';
  elementRetrecir.style.display = 'block';
}

function reduireTexte1() {
  var boutonEnSavoirPlus = document.querySelector('.buttonAff1');
  var boutonRetrecir = document.querySelector('.cache1 + button');
  var elementRetrecir = document.querySelector('.cache1');

  boutonEnSavoirPlus.style.display = 'inline-block';
  boutonRetrecir.style.display = 'none';
  elementRetrecir.style.display = 'none';
}

// Acteur 2
function afficherTexte2() {
  var boutonEnSavoirPlus = document.querySelector('.buttonAff2');
  var boutonRetrecir = document.querySelector('.cache2 + button');
  var elementRetrecir = document.querySelector('.cache2');

  boutonEnSavoirPlus.style.display = 'none';
  boutonRetrecir.style.display = 'block';
  elementRetrecir.style.display = 'block';
}

function reduireTexte2() {
  var boutonEnSavoirPlus = document.querySelector('.buttonAff2');
  var boutonRetrecir = document.querySelector('.cache2 + button');
  var elementRetrecir = document.querySelector('.cache2');

  boutonEnSavoirPlus.style.display = 'inline-block';
  boutonRetrecir.style.display = 'none';
  elementRetrecir.style.display = 'none';
}

// Acteur 3
function afficherTexte3() {
  var boutonEnSavoirPlus = document.querySelector('.buttonAff3');
  var boutonRetrecir = document.querySelector('.cache3 + button');
  var elementRetrecir = document.querySelector('.cache3');

  boutonEnSavoirPlus.style.display = 'none';
  boutonRetrecir.style.display = 'block';
  elementRetrecir.style.display = 'block';
}

function reduireTexte3() {
  var boutonEnSavoirPlus = document.querySelector('.buttonAff3');
  var boutonRetrecir = document.querySelector('.cache3 + button');
  var elementRetrecir = document.querySelector('.cache3');

  boutonEnSavoirPlus.style.display = 'inline-block';
  boutonRetrecir.style.display = 'none';
  elementRetrecir.style.display = 'none';
}

// Acteur 4
function afficherTexte4() {
  var boutonEnSavoirPlus = document.querySelector('.buttonAff4');
  var boutonRetrecir = document.querySelector('.cache4 + button');
  var elementRetrecir = document.querySelector('.cache4');

  boutonEnSavoirPlus.style.display = 'none';
  boutonRetrecir.style.display = 'block';
  elementRetrecir.style.display = 'block';
}

function reduireTexte4() {
  var boutonEnSavoirPlus = document.querySelector('.buttonAff4');
  var boutonRetrecir = document.querySelector('.cache4 + button');
  var elementRetrecir = document.querySelector('.cache4');

  boutonEnSavoirPlus.style.display = 'inline-block';
  boutonRetrecir.style.display = 'none';
  elementRetrecir.style.display = 'none';
}

/**********************************************
  Fonctions qui gère l'agrandissement du nav
**********************************************/
// Variable initialiser à false
var estAgrandi = false;
var navbar = document.querySelector("nav");
// Variable des balises span
var textElement1 = document.getElementsByClassName("nav1")[0];
var textElement2 = document.getElementsByClassName("nav2")[0];
var textElement3 = document.getElementsByClassName("nav3")[0];
// Variable des balises hr
var lig0 = document.getElementsByClassName("lig0")[0];
var lig1 = document.getElementsByClassName("lig1")[0];
var lig2 = document.getElementsByClassName("lig2")[0];
// Variable des balises a
var lien1 = document.getElementsByClassName("lien1")[0];
var lien2 = document.getElementsByClassName("lien2")[0];
var lien3 = document.getElementsByClassName("lien3")[0];

function ajusterLargeurNavbarMacbook() {
  var navbar = document.querySelector('nav');
  // Variables des balises span
  var textElement1 = document.getElementsByClassName("nav1")[0];
  var textElement2 = document.getElementsByClassName("nav2")[0];
  var textElement3 = document.getElementsByClassName("nav3")[0];
  // Variables des balises hr
  var lig1 = document.getElementsByClassName("lig1")[0];
  var lig2 = document.getElementsByClassName("lig2")[0];
  // Variables des balises a
  var menuBurger = document.getElementsByClassName("menuBurger")[0];
  var lien1 = document.getElementsByClassName("lien1")[0];
  var lien2 = document.getElementsByClassName("lien2")[0];
  var lien3 = document.getElementsByClassName("lien3")[0];

  // Inverser la valeur de la variable
  estAgrandi = !estAgrandi;

  if (estAgrandi) {
    navbar.style.width = "289px";
    menuBurger.style.alignSelf = "flex-start";
    menuBurger.style.marginLeft = "1.5em";
    // Changement de sources de l'icone burger
    document.querySelector('button > img').src = 'images/icones/icone_croix.png';
    document.querySelector('button > img').style.width = '19px';
    document.querySelector('button > img').style.height = '19px';
    // Affichage des span
    textElement1.style.display = "inline";
    textElement2.style.display = "inline";
    textElement3.style.display = "inline";
    // Affichage des barres de séparation
    lig1.style.display = "inline";
    lig2.style.display = "inline";
    // Affichage des liens
    lien1.style.margin = "50px 0 0 0";
    lien2.style.margin = "0px";
    lien3.style.margin = "0px";

  } else {
    navbar.style.width = "70px";
    // Changement de sources de l'icone burger
    document.querySelector('button > img').src = 'images/icones/icone_burger.png';
    document.querySelector('button > img').style.width = '25px';
    // Affichage des span
    textElement1.style.display = "none";
    textElement2.style.display = "none";
    textElement3.style.display = "none";
    // Affichage des barres de séparation
    lig1.style.display = "none";
    lig2.style.display = "none";
    // Affichage des liens
    lien1.style.margin = "50px 0 25px 0";
    lien2.style.margin = "25px";
    lien3.style.margin = "25px";

  }
}