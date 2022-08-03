/* Desenhando 3 quadrados na tela do canvas */

// Criando a tela e o pincel 
var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');

// Criando o primeiro quadrado e a cor do pincel
pincel.fillStyle = 'pink';
pincel.fillRect(0, 0, 50, 50);

//criando a cor da borda e utilizando no primeiro quadrado
pincel.fillStroke = 'black';
pincel.strokeRect(0, 0, 50, 50);

//criando um segundo quadrado e definindo a borda
pincel.fillRect(50, 0, 50, 50);
pincel.strokeRect(50, 0, 50, 50);

//criando o terceiro quadrado e definindo a borda
pincel.fillRect(100, 0, 50, 50);
pincel.strokeRect(100, 0, 50, 50);


/* FUNÇÃO PARA DESENHAR O QUADRADO NO CANVAS 
function desenhaQuadrado() {
    var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');
    
    
    pincel.fillStyle = 'pink';
    pincel.fillRect(0, 0, 50, 50);
    pincel.fillStroke = 'black';
    pincel.strokeRect(0, 0, 50, 50);
};

desenhaQuadrado();
desenhaQuadrado();
desenhaQuadrado(); */