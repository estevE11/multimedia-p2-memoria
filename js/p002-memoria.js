var ampladaCarta, alcadaCarta;
var separacioH=20, separacioV=20;
var nFiles=2, nColumnes=2;

var jocCartes = [
    'carta5', 'carta5',
    'carta15', 'carta15',

];


$(function(){
    var f, c, carta;
 

    ampladaCarta=$(".carta").width(); 
    alcadaCarta=$(".carta").height();
    // mida del tauler
    $("#tauler").css({
        "width" : "220px",
        "height": "300px"
    });
    // inicialitzem totes les cartes: posició
    for(f=1; f<=nFiles; f++)
        for(c=1; c<=nColumnes; c++){
            carta=$("#f"+f+"c"+c);
            carta.css({
                "left" :  ((c-1)*(ampladaCarta+separacioH)+separacioH)+"px",
                "top"  :  ((f-1)*(alcadaCarta+separacioV) +separacioV)+"px"
            });
            carta.find(".davant").addClass(jocCartes.pop());
           
        }

    $(".carta").click(function(){
        $(this).toggleClass("carta-girada");
    });

});