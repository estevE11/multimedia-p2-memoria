var ampladaCarta, alcadaCarta;
var separacioH=20, separacioV=20;
var nFiles=2, nColumnes=2;

var jocCartes = [
    'carta5', 'carta5',
    'carta15', 'carta15',
];

var c0, c1;

$(function(){
    var f, c, carta;
 
    console.log(jocCartes);
    jocCartes = suffleCards(jocCartes);
    console.log(jocCartes);

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

    $(".carta").click(function () {
        $(this).toggleClass("carta-girada");
        var card = $(this).find('.davant');
        if (!c0) {
            c0 = card;
        } else {
            if (c0.attr('class') == card.attr('class')) {
                setTimeout(function() {
                    c0.hide();
                    card.hide();
                    c0 = null;
                }, 1000);
            } else {
                setTimeout(function() {
                    c0.removeClass("carta-girada");
                    card.removeClass("carta-girada");
                    c0 = null;
                }, 1000);
            }
        }
    });

});


function suffleCards(cards) { 
    let res = [];
    
    let len = cards.length;

    for (let i = 0; i < len; i++) { 
        let random_card_index = Math.floor(Math.random()*cards.length);
        res.push(cards[random_card_index]);
        cards.splice(random_card_index, 1);
        console.log(cards);
    }

    return res;
}