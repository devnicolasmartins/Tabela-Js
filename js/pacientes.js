var addPaciente = document.getElementById("consultar-pacientes");
addPaciente.addEventListener("click", consulta)

function consulta(){
    var vazio = document.getElementById("vazio");
    var busca = new XMLHttpRequest()
    busca.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    busca.addEventListener("load", function(){
        if(busca.status = 200){
            vazio.style.display = "none";
            var pacientes = JSON.parse(busca.responseText);
            pacientes.forEach(function (paciente){
                validaPaciente(paciente)
            })
        }
        else if(busca.status == 404){
            vazio.style.display = "flex";
        }
    });
    
    busca.send();
}