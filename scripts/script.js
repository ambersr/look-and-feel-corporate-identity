// // Code voor openklappen hamburger menu in nav
// const menuButton = document.querySelector("#menuButton"); // Selecteert de knop met het id 'menuButton'

// const hetMenu = document.querySelector("#menu"); // Selecteert het menu-element met het id 'menu'

// menuButton.addEventListener("click", toggleMenu); // Als je het menu openklikt dan roept hij 'toggleMenu' aan

// function toggleMenu() { // Voegt of verwijdert de class 'open' van het menu-element 'hetMenu'
//     hetMenu.classList.toggle("open"); // Dit zorgt ervoor dat het menu zichtbaar wordt of verbergt bij elke klik
// }



// Selecteer de knop en het menu
const menuButton = document.querySelector("#menuButton");
const hetMenu = document.querySelector("#menu");
const menuLinks = hetMenu.querySelectorAll("ul li a"); // Alle links in het menu

// Event listener voor het klikken op de knop
menuButton.addEventListener("click", toggleMenu);

// Functie om het menu te openen/sluiten en de tabindex aan te passen
function toggleMenu() {
    // Toggle de 'open' class op het menu
    hetMenu.classList.toggle("open");

    // Controleer of het menu open is of gesloten
    if (hetMenu.classList.contains("open")) {
        // Maak de links focusbaar wanneer het menu open is
        menuLinks.forEach(link => {
            link.setAttribute("tabindex", "0");
        });
    } else {
        // Maak de links niet focustbaar wanneer het menu gesloten is
        menuLinks.forEach(link => {
            link.setAttribute("tabindex", "-1");
        });
    }
}

// Zorg ervoor dat de links bij het laden van de pagina niet focustbaar zijn als het menu gesloten is
document.addEventListener("DOMContentLoaded", () => {
    menuLinks.forEach(link => {
        link.setAttribute("tabindex", "-1");
    });
});
