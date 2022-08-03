function desenhaTexto(texto, x , y) {
    var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');

    pincel.font='20px Arial';
    pincel.fillStyle='black';
    pincel.fillText(texto, x, y);    
}

desenhaTexto("Qual é a fração?", 50, 30);


function desenhaQuadrado(x, y, tamanho, cor) {
    var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');

    pincel.fillStyle=cor;
    pincel.fillRect(x,y, tamanho, tamanho);
    pincel.strokeStyle='black';
    pincel.strokeRect(x,y, tamanho, tamanho);
}

desenhaQuadrado(50, 50, 100, 'pink');
desenhaQuadrado(150, 50, 100, 'pink');
desenhaQuadrado(250, 50, 100, 'pink');
desenhaQuadrado(350, 50, 100, 'white');