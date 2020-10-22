document.addEventListener("DOMContentLoaded", function(event) {

    //Un commentaire
    console.log("Ça fonctionne!!!");

    var hamburger = document.querySelector('.hamburger-simple');

    hamburger.addEventListener("click", openMenu);

    function openMenu(evt){

        console.log("click");
    }
});