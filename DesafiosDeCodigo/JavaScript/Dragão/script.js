let input = gets([3, 8001, 100, 200]);

let qtdEntradas = parseInt(input);
let nivelEnergia;

for(let i = 0; i < qtdEntradas; i++){
    input = gets();
    nivelEnergia = parseInt(input);
    
    if(nivelEnergia > 8000){
        print   ("Mais de 8000");
    }else{
        print("Inseto");
    }
}
