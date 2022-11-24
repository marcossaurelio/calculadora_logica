var p = true;
var q = true;
var r = true;
var s = true;
var t = true;
var u = true;
var expressao = '';

function insert(char) {
    var conteudo = document.getElementById('monitor').innerHTML;
    document.getElementById('monitor').innerHTML = conteudo + char;
    if(char=='&#40;'){
        expressao += char;
    } else if(char=='&#41;'){
        expressao += char;
    } else if(char=='∧'){
        expressao += '&&';
    } else if(char=='∨'){
        expressao += '||'
    } else if(char=='∼'){
        expressao += '!';
    } else if(char=='→'){
        expressao += '===';
    } else if(char=='↔'){
        expressao += '===';
    } else if(char=='P'){
        expressao += 'p';
    } else if(char=='Q'){
        expressao += 'q';
    } else if(char=='R'){
        expressao += 'r';
    } else if(char=='S'){
        expressao += 's';
    } else if(char=='T'){
        expressao += 't';
    } else if(char=='U'){
        expressao += 'u';
    }
}

function clean() {
    document.getElementById('monitor').innerHTML = '';
    expressao = '';
    document.getElementById('resultado').innerHTML = '';
}

function back() {
    var conteudo = document.getElementById('monitor').innerHTML;
    document.getElementById('monitor').innerHTML = conteudo.substring(0, conteudo.length -1);
    expressao = expressao.substring(0, expressao.length -1);
}

function calcular() {
    if (eval(expressao) === 'undefined' || eval(expressao) === 'null'){
        document.getElementById('resultado').innerHTML = 'Operação inválida';
    } else {
        document.getElementById('resultado').innerHTML = eval(expressao);
    }
}

function mudaEstado(letra) {
    if (letra == 'p') {
        if (document.getElementById(letra).innerHTML == 'V') {
            var p = false
            document.getElementById(letra).innerHTML = 'F';
            document.getElementById(letra).setAttribute("class", "botaof");
        } else {
            var p = true
            document.getElementById(letra).innerHTML = 'V';
            document.getElementById(letra).setAttribute("class", "botaot");
        }
    }
    if (letra == 'q') {
        if (document.getElementById(letra).innerHTML == 'V') {
            var q = false
            document.getElementById(letra).innerHTML = 'F';
            document.getElementById(letra).setAttribute("class", "botaof");
        } else {
            var q = true
            document.getElementById(letra).innerHTML = 'V';
            document.getElementById(letra).setAttribute("class", "botaot");
        }
    }
    if (letra == 'r') {
        if (document.getElementById(letra).innerHTML == 'V') {
            var r = false
            document.getElementById(letra).innerHTML = 'F';
            document.getElementById(letra).setAttribute("class", "botaof");
        } else {
            var r = true
            document.getElementById(letra).innerHTML = 'V';
            document.getElementById(letra).setAttribute("class", "botaot");
        }
    }
    if (letra == 's') {
        if (document.getElementById(letra).innerHTML == 'V') {
            var s = false
            document.getElementById(letra).innerHTML = 'F';
            document.getElementById(letra).setAttribute("class", "botaof");
        } else {
            var s = true
            document.getElementById(letra).innerHTML = 'V';
            document.getElementById(letra).setAttribute("class", "botaot");
        }
    }
    if (letra == 't') {
        if (document.getElementById(letra).innerHTML == 'V') {
            var t = false
            document.getElementById(letra).innerHTML = 'F';
            document.getElementById(letra).setAttribute("class", "botaof");
        } else {
            var t = true
            document.getElementById(letra).innerHTML = 'V';
            document.getElementById(letra).setAttribute("class", "botaot");
        }
    }
    if (letra == 'u') {
        if (document.getElementById(letra).innerHTML == 'V') {
            var u = false
            document.getElementById(letra).innerHTML = 'F';
            document.getElementById(letra).setAttribute("class", "botaof");
        } else {
            var u = true
            document.getElementById(letra).innerHTML = 'V';
            document.getElementById(letra).setAttribute("class", "botaot");
        }
    }
}