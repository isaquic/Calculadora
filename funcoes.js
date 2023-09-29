import entradaDados from 'readline-sync'

console.log("\n Calculadora \n")

console.log("Escolha a operação:\n")
console.log("1 - Somar\n");
console.log("2 - Subtrair\n");
console.log("3 - Multiplicar\n");
console.log("4 - Dividir\n")
const opcao = entradaDados.question("Qual operacao você deseja ? ");
let numero1 = parseFloat(entradaDados.question('\nDigite o primeiro valor:\n'));
let numero2 = parseFloat(entradaDados.question('\nDigite o segundo valor:\n'))


function somar (){
    let resultado = numero1 + numero2;
    console.log(`O Resultado da operacao é: ${resultado}`)
}

function subtrair (){
    let resultado = numero1 - numero2;
    console.log(`O Resultado da operacao é: ${resultado}` )
}

function multiplicar (){
    let resultado = numero1 * numero2;
    console.log(`O Resultado da operacao é: ${resultado}`)
}

function dividir (){
    if (numero2 === 0) {
        console.log("Erro: Divisão por zero!");
    } else {
        let resultado = numero1 / numero2;
        console.log(`O Resultado da operacao é: ${resultado.toFixed(3)}`);
    }
}

switch (opcao) {

    
    case "1": 
        somar();
        break;
    case "2": 
        subtrair();
        break;
    case "3": 
        multiplicar();
        break;
    case "4":
        dividir();
        break;
    default:
        console.log("Opção inválida");
        
        
    
}

