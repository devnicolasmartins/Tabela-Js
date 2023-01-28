var paciente = document.querySelectorAll(".paciente");
function remover(paciente){
    this.remove(paciente);
}
paciente.addEventListener("dblclick", remover);