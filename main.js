let eValido 
let campoA = 0;
let campoB = 0;


function submeter(){
    limpar();
    campoA = document.getElementById("campoA").value;
    campoB = document.getElementById("campoB").value;
    
    comparar(campoA, campoB);

    if (eValido == true){
        document.getElementById("status").innerHTML = "Formulário submetido!";
        document.getElementById("status").classList.add("submetido");
    }else{
        document.getElementById("status").innerHTML = "Formulátio não submetido! O Valor A não é menor que o B";
        document.getElementById("status").classList.add("naoSubmetido");
    }
}

function comparar(ValorA, ValorB){
    eValido = (ValorB > ValorA) ? true : false; 
    return eValido;
}

function limpar(){
    document.getElementById("status").classList.remove("submetido");
    document.getElementById("status").classList.remove("naoSubmetido");
}