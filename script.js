

// Seu JavaScript vai aqui
var numeroAleatorio = Math.floor(Math.random() * 10) + 1;
var palpites = document.querySelector('.palpites');
var ultimoResultado = document.querySelector('.ultimoResultado');
var baixoOuAlto = document.querySelector('.baixoOuAlto');
var envioPalpite = document.querySelector('.envioPalpite');
var campoPalpite = document.querySelector('.campoPalpite');
var contagemPalpites = 1;
var botaoReinicio;
campoPalpite.focus();
function conferirPalpite() {
  var palpiteUsuario = Number(campoPalpite.value);
  if(contagemPalpites === 1) {
    palpites.textContent = 'Palpites anteriores: ';
  }
  palpites.textContent += palpiteUsuario + ' ';
  if(palpiteUsuario === numeroAleatorio) {
    ultimoResultado.textContent = 'Parabéns! Você acertou!';
    ultimoResultado.style.backgroundColor = 'green';
    baixoOuAlto.textContent = '';
    configFimDeJogo();
  } else if(contagemPalpites === 10) {
    ultimoResultado.textContent = '!!!FIM DE JOGO!!!';
    baixoOuAlto.textContent = '';
    configFimDeJogo();
  } else {
    ultimoResultado.textContent = 'Errado!';
    ultimoResultado.style.backgroundColor = 'red';
    if(palpiteUsuario < numeroAleatorio) {
      baixoOuAlto.textContent = 'Seu palpite foi muito baixo!';
    } else if(palpiteUsuario > numeroAleatorio) {
      baixoOuAlto.textContent = 'Seu palpite foi muito alto!';
    }
  }
  contagemPalpites++;
  campoPalpite.value = '';
  campoPalpite.focus();
}
envioPalpite.addEventListener('click', conferirPalpite);
function configFimDeJogo() {
  campoPalpite.disabled = true;
  envioPalpite.disabled = true;
  botaoReinicio = document.createElement('button');
  botaoReinicio.textContent = 'Iniciar novo jogo';
  document.body.appendChild(botaoReinicio);
  botaoReinicio.addEventListener('click', reiniciarJogo);
}
function reiniciarJogo() {
  contagemPalpites = 1;
  var reiniciarParas = document.querySelectorAll('.resultadoParas p');
  for(var i = 0 ; i < reiniciarParas.length ; i++) {
    reiniciarParas[i].textContent = '';
  }
  botaoReinicio.parentNode.removeChild(botaoReinicio);
  campoPalpite.disabled = false;
  envioPalpite.disabled = false;
  campoPalpite.value = '';
  campoPalpite.focus();
  ultimoResultado.style.backgroundColor = 'white';
  numeroAleatorio = Math.floor(Math.random() * 100) + 1;
}


// var capturando = "";
// function capturar () {
//     capturando = document.getElementById('valor').value;
//     document.getElementById('valorDigitado').innerHTML = capturando;
// }




// var tentativas = 3
// console.log('Antes da função ' + tentativas)
// function capturar () {
//   var tentativas = 3
//   var numero_secreto = parseInt(Math.floor(Math.random() * 10 + 1))
  
//   var chute = parseInt(document.getElementById('valor').value
// )
//   console.log('Depois da função ' + tentativas)
  
//   while (tentativas > 0){  
//     console.log('Depois do while ' + tentativas)
//     var chute = parseInt(document.getElementById('valor').value)

//     if (numero_secreto==chute) {
//       document.getElementById('valorDigitado').innerHTML = 'Acertou'
//       break
//     } else if (chute > numero_secreto) {
//       document.getElementById('valorDigitado').innerHTML = ('Errou. O número secreto é menor que o digitado. Tente novamente. Tentativa:' + tentativas + 'de 3')
//       document.getElementById('valor').innerHTML = ''
//       tentativas = tentativas - 1
//     } else if (chute < numero_secreto) {
//         document.getElementById('valorDigitado').innerHTML = ('Errou. O número secreto é maior que o digitado. Tente novamente. Tentativa:' + tentativas + 'de 3')
//         document.getElementById('valor').innerHTML = ''
//         tentativas = tentativas - 1
//     }

//     console.log('Fim do while ' + tentativas)
//   }
//   console.log('Antes do IF ' + tentativas)
//   if (chute != numero_secreto) {
//       document.getElementById('valorDigitado').innerHTML = ('Suas tentativas acabaram. O número secreto era: ' + numero_secreto)
//     }
// }
 /*var numero_secreto = parseInt(Math.random() * 10)
var chute = parseInt(prompt("Digite um numero entre 0 e 10"))
var tentativas = 3 */


/* while (tentativas > 0){
  var chute = parseInt(prompt("Digite um numero entre 0 e 10"))

  if (numero_secreto==chute) {
    console.log('Acertou')
    break
  } else if (chute > numero_secreto) {
    console.log('Errou. O número secreto é menor que o digitado. Tente novamente. Tentativa:' + tentativas + 'de 3')
    tentativas = tentativas - 1
  } else if (chute < numero_secreto) {
    console.log('Errou. O número secreto é maior que o digitado. Tente novamente. Tentativa:' + tentativas + 'de 3')
    tentativas = tentativas - 1
  } 
}

if (chute != numero_secreto) {
  console.log('Suas tentativas acabaram. O número secreto era: ' + numero_secreto)
}
*/
