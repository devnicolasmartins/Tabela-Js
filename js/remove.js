document.querySelector("#tabela-pacientes").addEventListener("click", removerElemento);
function removerElemento(event){
    event.target.closest("tr").classList.add("fadeOut");
    setTimeout(function(){
        event.target.closest("tr").remove();        
    }, 1000);
};