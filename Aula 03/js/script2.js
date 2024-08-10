function calcular(){
    let preco = document.getElementById("preco")
    let forma = document.getElementById("forma_pagamento")
    let valor_pagar = document.getElementById("valor_pagar")

    /*
     Se a forma de pgto for Pix o desconto sobre o 
     preço do produto seráde 10%. Caso seja dinheiro
     a forma de pgto, então o desconto será de 5%,
     caso seja o pgto em cartão, será acrescentado
     5% ao preço; caso não seja selecionada nenhuma 
     das opções será apresentada uma mensagem ao usuário

     */

     let resultado = 0.0   
     if(forma.value == "pix"){
        resultado = preco.value*0.9
    
     }
     else if(forma.value == "dinheiro"){
        resultado = preco.value * 0.95
    }
    else if(forma.value == "cartão"){
        resultado = preco.value * 1.05;
    }
    else{
        alert("por favor selecione uma forma de pagamento")
    }

    valor_pagar.value="R$ " + resultado    



}