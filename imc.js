const btnCalcular = document.getElementById('calcular');

function imc() {
    const nome = document.getElementById('nome').value
    const peso = document.getElementById('peso').value
    const altura = document.getElementById('altura').value
    const resultado = document.querySelector('.resultado')


    if (nome !== '' && peso !=='' && altura !== '') {
        
        const valorIMC = (peso / (altura * altura)).toFixed(1)
        resultado.classList.remove('hidden');

        resultado.innerHTML = `
        <span>Olá ${nome}! 
        Seu IMC é de ${valorIMC}</span>
        `
        if (valorIMC < 18.5) {
            resultado.innerHTML += `
             <span>Você está abaixo do peso</span>
             `
         }else if (valorIMC <= 24.9 ) {
            resultado.innerHTML += `
             <span>Você está com o peso ideal!</span>
             `
         }else if (valorIMC > 25 ) {
            resultado.innerHTML += `
             <span>Você está acima do peso</span>
             `
         }
    } 

}

btnCalcular.addEventListener('click', imc)