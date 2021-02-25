//add no html pelo js
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault(); //previne o comportamento padrao da pagina no caso do formulario

    var form = document.querySelector("#form-adiciona");
    //Extraindo informações do paciente do form
    var paciente = obtemPacienteFormulario(form);

    //creando elementos no html
    //var pacienteTr = montaTr(paciente);  
    
    var erros = validaPaciente(paciente);

    if(erros.length > 0){
        exibeMesagensDeErro(erros);
        return;
    }

    adicionaPacienteNaTabela(paciente);
    //adiciona paciente na tabela
    //var tabela = document.querySelector("#tabela-pacientes");

    //tabela.appendChild(pacienteTr);

    form.reset();

    var mesagensErro = document.querySelector("#mesagens-erro");
    mesagensErro.innerHTML =  "";
});

function adicionaPacienteNaTabela(paciente){
    var pacienteTr = montaTr(paciente);  
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function exibeMesagensDeErro(erros){
    var ul = document.querySelector("#mesagens-erro");
    ul.innerHTML = "";
    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);                 //coloca dentro
    });
}

function obtemPacienteFormulario(form){
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }  
    return paciente;
}

//creando elementos no html
function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    //deixando o codigo mais simples na linha 43 ao 47
 /*   var nomeTd = montaTd(paciente.nome, "info-nome");
    var pesoTd = montaTd(paciente.peso, "info-peso");
    var alturaTd = montaTd(paciente.altura, "info-altura");
    var gorduraTd = montaTd(paciente.gordura, "info-gordura");
    var imcTd = montaTd(paciente.imc, "info-imc");      */

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente){

    var erros = [];

    if(paciente.nome.length == 0){
        erros.push("O nome não pode ser em branco");
    }
    if(!validaPeso(paciente.peso)){
        erros.push ('Peso é inválido');
    }
    if(!validaAltura(paciente.altura)){
        erros.push ("Altura é inválida");
    }
    if(paciente.gordura.length == 0){
        erros.push("A gordura não pode ser em branco");
    }
    if(paciente.peso.length == 0){
        erros.push("O peso não pode ficar em branco");
    }
    if(paciente.altura.length == 0){
        erros.push("O altura não pode ficar em branco");
    }
    return erros;
}