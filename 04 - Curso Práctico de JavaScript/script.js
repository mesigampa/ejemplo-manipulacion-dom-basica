const h1 = document.querySelector('h1')
const input1 = document.querySelector('#calculo1')
const input2 = document.querySelector('#calculo2')
const btnCalcular = document.querySelector('#btnCalcular')
const p = document.querySelector('#result')
const form = document.querySelector('#formulario')

form.addEventListener('submit', sumarInputValues)

function sumarInputValues(event){
    event.preventDefault()
    const resultado = Number(input1.value)+Number(input2.value)
    p.innerHTML = "Resultado: " + resultado
}