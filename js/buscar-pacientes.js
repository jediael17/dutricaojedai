var botaAdicionar = document.querySelector("#buscar-paciente");
botaAdicionar.addEventListener("click" , function(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");  // o cara que abre a conexão

    xhr.addEventListener("load", function(){
        var erroAjax = document.querySelector("#erro-ajax");
        if(xhr.status == 200){
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);              //te devolve um objeto em javascript

            pacientes.forEach(function(paciente){
                adicionaPacienteNaTabela(paciente);
            });
        
        }else{            
            erroAjax.classList.remove("invisivel");
        }
        
    });
    xhr.send();     //o cara que realmente envia a requisição 
});