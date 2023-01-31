var pacientes = document.querySelectorAll(".paciente");
var form= document.querySelector("#form-adiciona");
var erro = "Valor inválido! Insira um valor real.";
var img;
var tdImg;

function calculaImc(peso, altura){
    var imc = peso / (altura * altura);
    return imc.toFixed(2);
}
for(i = 0; i < pacientes.length; i++){
    var peso=  pacientes[i].querySelector(".info-peso").textContent;
    var altura=  pacientes[i].querySelector(".info-altura").textContent;
    pacientes[i].querySelector(".info-imc").textContent = calculaImc(peso, altura);
}
function geral(event){
    event.preventDefault();
    var paciente= obtemPaciente(form);
    validaAltura(paciente);
    validaPeso(paciente);
    validaNome(paciente);
    validaGordura(paciente);
    validaPaciente(paciente);
}

document.getElementById("adicionar-paciente").addEventListener("click", geral);

function obtemPaciente(form){
    var paciente={
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}
function criaTr(paciente){
    var pacienteTr= document.createElement("tr");
    pacienteTr.classList.add("paciente");
    pacienteTr.appendChild(criaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(criaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(criaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(criaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(criaTd(paciente.imc, "info-imc"));

    criaImg();
    pacienteTr.appendChild(tdImg);
    
    return pacienteTr;
}
function criaTd(dado, classe){
    td= document.createElement("td");
    td.textContent= dado;
    td.classList.add(classe);

    return td;
}
function validaPeso(paciente){
    var pesoInvalido = document.getElementById("peso-invalido");
    if(paciente.peso <= 300 && paciente.peso > 0){
        pesoInvalido.style.display= "none";
        return true;
    }
    else{
        pesoInvalido.textContent= erro;
        pesoInvalido.style.display= "flex";
        return erro;
    }
}

function validaAltura(paciente){
    var alturaInvalida = document.getElementById("altura-invalida");
    if(paciente.altura <= 3.0 && paciente.altura > 0){
        alturaInvalida.style.display= "none";
        return true;
    }
    else{
        alturaInvalida.textContent= erro;
        alturaInvalida.style.display= "flex";
        return erro;
    }
}
function validaNome(paciente){
    var nomeInvalido = document.getElementById("nome-invalido");
    if(paciente.nome.length > 0 && paciente.nome.length < 100){
        nomeInvalido.style.display= "none";
        return true;
    }
    else{
        nomeInvalido.textContent= erro;
        nomeInvalido.style.display= "flex";
        return erro;
    }
}
function validaGordura(paciente){
    var gorduraInvalida = document.getElementById("gordura-invalida");
    if(paciente.gordura > 0 && paciente.gordura < 100){
        gorduraInvalida.style.display= "none";
        return true;
    }
    else{
        gorduraInvalida.textContent= erro;
        gorduraInvalida.style.display= "flex";
        return erro;
    }
}
function validaPaciente(paciente){
    var pacienteTr= criaTr(paciente);
    if(validaAltura(paciente) != erro){
        if(validaPeso(paciente) != erro){
            if(validaNome(paciente) != erro){
                if(validaGordura(paciente) != erro){
                    document.getElementById("tabela-pacientes").appendChild(pacienteTr);
                    form.reset();
                    return true;}
                }
        }
    else{
        return false;
    }
    }
}

function criaImg(){
    img = document.createElement("img");
    img.setAttribute("onClick", "removerElemento");
    img.setAttribute("class", "remover-paciente");
    img.setAttribute("src","img/x.png");
    tdImg = document.createElement("td")
    tdImg.classList.add("x")
    tdImg.appendChild(img);
}

