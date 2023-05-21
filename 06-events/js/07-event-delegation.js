/* Delegação de Evento */

function getTarget (e) {
    if (!e) {
        e = window.event;
    }

    return e.target || e.srcElement;
}

function itemDone (e) {
    // Remove item
    var target, elParent, elGrandparent;

    target = getTarget(e); // Obtém o link do item clicado
    elParent = target.parentNode; // Obtem o item
    elGrandparent = target.parentNode.parentNode; // Obtém a lista
    elGrandparent.removeChild(elParent); // Remove o item da lista

    // Impede o fluxo padrão do link
    if (e.preventDefault) { // Se preventDefault existir
        e.preventDefault();
    } else {
        e.returnValue = false; // Para a versão antiga do IE
    }
}

// Event Listener
var el = document.getElementById('shoppingList'); // Obtém a lista de compras

if (el.addEventListener) {
    el.addEventListener('click', function (e) {
        itemDone(e);
    }, false);
} else {
    el.attachEvent('onclick', function (e) {
        itemDone(e);
    });
}