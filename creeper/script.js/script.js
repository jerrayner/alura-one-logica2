/* Desenhando no navegador com JavaScript
    Proposta: Será que você consegue criar essa imagem e desenhar 
    a cabeça do Creeper? */

var tela = document.querySelector('canvas'); 
var pincel = tela.getContext('2d'); 
      
pincel.fillStyle = 'purple'; 
pincel.fillRect(200, 50, 350, 300);
      
      
pincel.fillStyle = 'black'; 
pincel.fillRect(250,110, 90, 90);
pincel.fillRect(410,110, 90, 90);
      
pincel.fillRect(340, 200, 70, 100);

pincel.fillRect(300, 240, 40, 110);
pincel.fillRect(410, 240, 40, 110); 