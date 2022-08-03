/* Função definindo parametros de
 coordenadas do quadrado na tela e suas respectivas cores. */

function desenhaQuadrado(x,y, cor) {
    var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');
    
    
    pincel.fillStyle = cor;
    pincel.fillRect(x, y, 50, 50);
    pincel.fillStroke = 'black';
    pincel.strokeRect(x, y, 50, 50);
};

desenhaQuadrado(0, 0, 'blue');
desenhaQuadrado(50, 50, 'pink');
desenhaQuadrado(10, 100, 'purple'); 