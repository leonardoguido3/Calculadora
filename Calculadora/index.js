function insert(num)
{
    let numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
    

}

function clean()
{
    document.getElementById('resultado').innerHTML = "";
}

function backspace()
{
    let resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

function calcularTudo()
{
    let resultado = document.getElementById('resultado').innerHTML;
    if(resultado)
    {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
    else
    {
        document.getElementById('resultado').innerHTML = 'Error';
    }
}


console.log("Minha primeira calculadora!");
console.log("Leonardo Guido");

let meuContato = "31 9.9767-5896";
let informacaoAdicional = ' WhatsApp';

console.log(` Meu número é: ${meuContato + informacaoAdicional}`);