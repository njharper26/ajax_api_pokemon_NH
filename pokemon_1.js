$(document).ready(function(){
    
    console.log("JQuery is running");

    for (var i = 1; i < 152; i += 1){
        $('.container').append("<img src=http://pokeapi.co/media/img/" + i + ".png/>");
    }  
});