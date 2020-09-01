let carrega = setInterval(() => {
        let div = document.getElementById('principal').style.display ='none'
}, 3000)

setTimeout(() => {
    clearInterval(carrega) 
    document.getElementById('principal2').innerHTML = `<h1>Bem-vindo</h1><p>Site em andamento!</p>`
}, 3500)


       
   
