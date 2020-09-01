document.getElementById('ClickQuiz').addEventListener('click', start)

function start(){
     document.getElementById('quiz').innerHTML += `<h2>Quiz de Matématica</h2><p id="pergunta">1.Abscissa é o nome de uma....</p>
    <input type="button" id="resp1" value="Coordenada do eixo y de um plano cartesiano"> <br>
    <input type="button" id="resp2" value="Ponta de um triângulo"> <br>
    <input type="button" id="resp3" value="Coorndenada do eixo x de um plano cartesiano">`
    
    document.getElementById('resp3').onclick = function(){
        alert('Você acertou!!')
       
    }
    document.getElementById('resp1').onclick = function(){
        alert('Você errou :(')
    }
    document.getElementById('resp2').onclick = function(){
        alert('Você errou :(')
    }
   
    setTimeout(() => {
        alert('Seu tempo acabou !!')
        alert('Tente Novamente!')   
    }, 10000);
    

}

    

