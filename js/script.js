//Função para menu hamburguer
document.querySelector(".hamburguer").addEventListener("click",() =>
document.querySelector(".container").classList.toggle("show-menu")

);
/* //Função para calcular orçamento na Sessão
    //monitorar clicks para atualização de preços
    document.querySelector("#qtde").addEventListener("change", atualizarPreco)
    document.querySelector("#js").addEventListener("change", atualizarPreco)
    document.querySelector("#layout-sim").addEventListener("change", atualizarPreco)
    document.querySelector("#layout-nao").addEventListener("change", atualizarPreco) */

/* //Vai monitorara a mudança da barra de prazo e mudar exibindo quantas semanas será preciso
document.querySelector("#prazo").addEventListener("change", function () {
    const prazo = document.querySelector("#prazo").value
    document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} semanas`
    atualizarPreco()
})

function atualizarPreco(){
    const qtde = document.querySelector("#qtde").value

       //vai checar se o marcador de "necessário Script" está marcado ou não e se tiver vai adcionar mais 10% ao valor
    const temJS = document.querySelector("#js").checked

        //Vai checar se será incluso ou não o layout
    const incluiLayout = document.querySelector("#layout-sim").checked

        //Adicionar preço para taxa de urgencia
    const prazo = document.querySelector("#prazo").value

        //quantidade de página vezes 100 = preço
    let preco = qtde * 100;

        //adicionando 10% ao valor da pg
        if (temJS) preco *= 1.1

        //incluindo preço do layout
    if(incluiLayout) preco += 500

        //taxa de urgencia
        let taxaUrgencia = 1 - prazo*0.1;
        preco *= 1 + taxaUrgencia
    document.querySelector("#preco").innerHTML = `R$ ${preco.toFixed(2)}` */
/* } */
