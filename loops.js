console.log('\n Trabalhando com LOOPS:');
const listaDeDestinos = new Array(
    "Salvador",
    "São Paulo",
    "Rio de Janeiro",
    "Campinas"
);

const idadeComprador = 19;
const estaAcompanhada = true;
let temPassagemComprada = false;
const destino = "Salvador"

console.log("\n Destinos possiveis:");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 25 || estaAcompanhada == true;

let contador = 0;
destinoExiste = false;
while(contador<3) {

    if (listaDeDestinos[contador] == destino){
        destinoExiste = true;
        break;
    }
        contador += 1;
    }

console.log("Destino existe: ", destinoExiste);

if(podeComprar && destinoExiste){ 
    console.log("Boa Viagem");
}else{
    console.log("Desculpe tivemos um erro!");
}
    