var ampladaCarta, alcadaCarta;
var separacioH=20, separacioV=20;
var nFiles = 2, nColumnes = 2;

var clicks = 0;
var clickEnabled = true;

var cards = [
    'carta1',
    'carta1',
    'carta14',
    'carta14',
    'carta2',
    'carta2',
    'carta3',
    'carta3',
    'carta4',
    'carta4',
    'carta5',
    'carta5',
    'carta15',
    'carta15',
    'carta16',
    'carta16',
];

var jocCartes = [
    'carta5', 'carta5',
    'carta15', 'carta15',
];

var c0, c1;

$(function () {
    var f, c, carta;

    // mida del tauler
    $("#tauler").css({
        "width": "220px",
        "height": "300px"
    });

    if (nFiles == 2) {
        cards = cards.splice(0, 4);
    } else {
        $('#tauler').css('width', '420px');
        $('#tauler').css('height', '580px');
    }
    jocCartes = cards;
    
    jocCartes = suffleArray(jocCartes);

    ampladaCarta = $(".carta").width();
    alcadaCarta = $(".carta").height();
    // inicialitzem totes les cartes: posició
    for (f = 1; f <= nFiles; f++) {
        for (c = 1; c <= nColumnes; c++) {
            let top = ((f - 1) * (alcadaCarta + separacioV) + separacioV);
            let left = ((c - 1) * (ampladaCarta + separacioH) + separacioH);
            carta = $('<div class="carta" id="' + 'f' + f + 'c' + c + '"' + ' style="top:' + top + '; left: ' + left + '"> <div class="cara darrera"></div><div class="cara davant"></div></div>');
            $('#tauler').append(carta);
        }
    }
    for (f = 1; f <= nFiles; f++) {
        for (c = 1; c <= nColumnes; c++) {
            carta = $("#f" + f + "c" + c);
            carta.find(".davant").addClass(jocCartes.pop());
        }
    }

    $(".carta").click(function () {
        if (!clickEnabled) return;
        if(c0)
            if ($(this).attr('id') == c0.parent().attr('id')) return;
        clicks++;
        $(this).toggleClass("carta-girada");
        var card = $(this).find('.davant');
        if (!c0) {
            c0 = card;
        } else {
            clickEnabled = false;
            if (c0.attr('class') == card.attr('class')) {
                setTimeout(function() {
                    c0.fadeOut('fast', function () { 
                        $(this).parent().remove();
                    });
                    card.fadeOut('fast', function () {
                        $(this).parent().remove();
                    });
                    c0 = null;
                    clickEnabled = true;
                }, 500);
            } else {
                setTimeout(function() {
                    c0.parent().removeClass("carta-girada");
                    card.parent().removeClass("carta-girada");
                    c0 = null;
                    clickEnabled = true;
                }, 1000);
            }
        }
    });

});


/**
 * Barrejar aleatoriament un array
 * 
 * @param {Array} arr
 * @returns Array
 */
function suffleArray(arr) { 
    let res = [];
    
    let len = arr.length;

    for (let i = 0; i < len; i++) { 
        let random_card_index = Math.floor(Math.random()*arr.length);
        res.push(arr[random_card_index]);
        arr.splice(random_card_index, 1);
        console.log('----');
        console.log(arr);
        console.log(res);
    }

    return res;
}