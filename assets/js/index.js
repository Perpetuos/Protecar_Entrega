function gerarImagem() {
    document.getElementById("buttonContainer").style.display = "none";
    var container = document.querySelector(".img_container");
    html2canvas(container).then(function (canvas) {
        document.getElementById("buttonContainer").style.display = "flex";
        var imgData = canvas.toDataURL("image/png");
        var link = document.createElement('a');
        link.href = imgData;
        link.download = "screenshot.png";
        link.click();
    });
}

function reescreverInformacoes() {
    var nome = prompt("Digite o nome:");
    var veiculo = prompt("Digite o veículo:");
    var placa = prompt("Digite a placa:");
    var oficina = prompt("Digite a oficina:");
    var prazo = prompt("Digite o prazo:");

    document.getElementById("nome").innerHTML = nome;
    document.getElementById("veiculo").innerHTML = veiculo;
    document.getElementById("placa").innerHTML = placa;
    document.getElementById("oficina").innerHTML = oficina;
    document.getElementById("prazo").innerHTML = prazo;
}