/* Desenhando no navegador com JavaScript
    Proposta de desenho de bandeira nacional */

    /* O canvas é basicamente uma área em que se pode desenhar,
     especifica-se o tamanho e a altura da tela para que se possa
      desenhar nela! Ele deve ser adicionado no HTML e referenciado no JS*/


var tela = document.querySelector('canvas'); 
/* Definindo a tela como variavel, e solicitando o canvas como tela */
var pincel = tela.getContext('2d'); 
/* adicionando um pincel para que ele pinte como 2d */



pincel.fillStyle = 'green'; 
/* FillStyle é uma propriedade, onde pode-se colocar o valor de cor para o retangulo, e deve ser colocado antes da função de preenchimento, para definição da cor*/
pincel.fillRect(0, 0, 600, 400);
 /* solicitando o preenchimento do retangulo atraves da função
  fill rect, os 2 primeiros parametros são das posições iniciais,
  começando pelo eixo X 0 e no Y 0, os próximos 2 parametros serão 
  o tamanho da tela que será pintada! */



pincel.fillStyle = 'green'; 
/* adicionando um retangulo dentro do principal */
pincel.fillRect(0,0, 200, 400);



pincel.fillStyle = 'green'; 
/* adicionando um retangulo dentro do principal */
pincel.fillRect(400,0, 200, 400);

 /* Adicionando um triangulo na tela */
pincel.fillStyle = 'yellow';
pincel.beginPath(); /* começando um novo caminho da pintura */
pincel.moveTo(300, 200);
pincel.lineTo(200, 400);
pincel.lineTo(400, 400);
pincel.fill();

/* Adicionando o circulo da tela */
pincel.fillStyle = 'blue';
pincel.beginPath();
pincel.arc(300, 200, 50, 0, 2 * 3.14); /* iniciando o tamanho e o espaço do circulo */
pincel.fill();