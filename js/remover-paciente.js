var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
   
    //var alvoEvento = event.target;
    //var paiDoAlvo = alvoEvento.parentNode;
    //paiDoAlvo.remove();
    //o mesmo significado linha 14  //seTiemout serve para pedir para o java esperar para realizar uma ação no caso 5 seg que 500
    event.target.parentNode.classList.add("fadeOut");
    
    setTimeout(function(){
        event.target.parentNode.remove();
    },500);
    
});

/*
pacientes.forEach(function(paciente){
    paciente.addEventListener("dblclick", function(){
        this.remove();
    });
});
*/