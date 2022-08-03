    var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');
    pincel.fillStyle = 'lightgray';
    pincel.fillRect(0, 0, 600, 400);

    function desenhaCirculo(x, y, raio, cor) {
        /* criando o circulo com base no calculo de tamanho */
        pincel.fillStyle = cor;
        pincel.beginPath();
        pincel.arc(x, y, raio, 0, 2 * Math.PI);
        pincel.fill();
    }

    function desenhaFlor(x, y) {
          /* aqui esta dando forma a flor com as coordenadas de onde 
          as petalas ficaram, e no chamar da função especificando 
          onde na tela ela ficará */
        desenhaCirculo(x, y+20, 10, '#FF7396');
        desenhaCirculo(x, y, 10, '#FFFFDE');
        desenhaCirculo(x, y-20, 10, '#C499BA');
        desenhaCirculo(x-20, y, 10, '#F4E06D');
        desenhaCirculo(x+20, y, 10, '#D75281');
    }
/* Brincando com as Coordenadas pintando várias flores */
    desenhaFlor(50, 50);
    desenhaFlor(100, 100);
    desenhaFlor(150, 150);
    desenhaFlor(200, 200);
    desenhaFlor(250, 250);
    desenhaFlor(300, 300);
    desenhaFlor(350, 350);
    desenhaFlor(550, 50);
    desenhaFlor(500, 100);
    desenhaFlor(450, 150);
    desenhaFlor(400, 200);
    desenhaFlor(350, 250);
    desenhaFlor(300, 300);
    desenhaFlor(250, 350);
   

    /*

function desenhaFlor() {

    desenhaCirculo(x, 'y+20', 10, '#FF7396');
    desenhaCirculo(x, y, 10, '#FFFFDE');
    desenhaCirculo(x, y-20, 10, '#C499BA');
    desenhaCirculo(x-20, y, 10, '#F4E06D');
    desenhaCirculo(x+20, y, 10, '#D75281');

}

desenhaFlor(300,200); */