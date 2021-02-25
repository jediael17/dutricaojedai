//var titulo = document.querySelector(".titulo");
//titulo.textContent = 'Controle'

//'querySelector' e para buscar o documento html no caso com id ou class ou pela tag, e so retorna um unico elemento.
//'querySelectorAll' traz mais de uma coisa 
var pacientes = document.querySelectorAll('.paciente');

for(var i = 0; i < pacientes.length; i++){
    
    var paciente = pacientes[i];
    
    var tdPeso = paciente.querySelector('.info-peso');
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector('.info-altura');
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector('.info-imc');

    var pesoEhValido = validaPeso(peso);
    var alturaEhValido = validaAltura(altura);

    if(!pesoEhValido){
        pesoEhValido = false;
        tdPeso.textContent = "Peso Inválido!";
        paciente.classList.add('paciente-invalido');  //introduziu uma class na tabela 
    }

    if(!alturaEhValido){
        alturaEhValido = false;
        tdAltura.textContent = "Altura Inválida!";
        paciente.classList.add('paciente-invalido');
    }

    if(alturaEhValido && pesoEhValido){
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc; 
    }
}

function validaPeso(peso){
    if(peso >= 0 && peso < 1000){
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura){
    if(altura >= 0 && altura <= 3.50){
        return true;
    }else{
        return false;
    }
}

function calculaImc(peso, altura){
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2); //imc.tofixed(2); escolhe quantas casas decimais você quer.
}

