var campoBusca = document.getElementById("busca");
campoBusca.addEventListener("input", atualizaBusca);

function atualizaBusca(){
    var pacientes = document.querySelectorAll(".paciente");
    if(campoBusca.value != 0){
        for(var i = 0; i < pacientes.length; i++){
            var nome= pacientes[i].querySelector(".info-nome").textContent;
            var exp = new RegExp(this.value, "i")
            if(exp.test(nome)){
                pacientes[i].classList.remove("invisivel");
            }
            else{
                pacientes[i].classList.add("invisivel");
            }   
        }
    }
    else{
        for(var i = 0; i < pacientes.length; i++){
            pacientes[i].classList.remove("invisivel");
        }
    }
}
