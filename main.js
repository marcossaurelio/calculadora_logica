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
        var p = !p;
        if (document.getElementById(letra).innerHTML == 'V') {
            document.getElementById(letra).innerHTML = 'F';
            document.getElementById(letra).setAttribute("class", "botaof");
        } else {
            document.getElementById(letra).innerHTML = 'V';
            document.getElementById(letra).setAttribute("class", "botaot");
        }
    }
    if (letra == 'q') {
        var q = !q;
        if (document.getElementById(letra).innerHTML == 'V') {
            document.getElementById(letra).innerHTML = 'F';
            document.getElementById(letra).setAttribute("class", "botaof");
        } else {
            document.getElementById(letra).innerHTML = 'V';
            document.getElementById(letra).setAttribute("class", "botaot");
        }
    }
    if (letra == 'r') {
        var r = !r;
        if (document.getElementById(letra).innerHTML == 'V') {
            document.getElementById(letra).innerHTML = 'F';
            document.getElementById(letra).setAttribute("class", "botaof");
        } else {
            document.getElementById(letra).innerHTML = 'V';
            document.getElementById(letra).setAttribute("class", "botaot");
        }
    }
    if (letra == 's') {
        var s = !s;
        if (document.getElementById(letra).innerHTML == 'V') {
            document.getElementById(letra).innerHTML = 'F';
            document.getElementById(letra).setAttribute("class", "botaof");
        } else {
            document.getElementById(letra).innerHTML = 'V';
            document.getElementById(letra).setAttribute("class", "botaot");
        }
    }
    if (letra == 't') {
        var t = !t;
        if (document.getElementById(letra).innerHTML == 'V') {
            document.getElementById(letra).innerHTML = 'F';
            document.getElementById(letra).setAttribute("class", "botaof");
        } else {
            document.getElementById(letra).innerHTML = 'V';
            document.getElementById(letra).setAttribute("class", "botaot");
        }
    }
    if (letra == 'u') {
        var u = !u;
        if (document.getElementById(letra).innerHTML == 'V') {
            document.getElementById(letra).innerHTML = 'F';
            document.getElementById(letra).setAttribute("class", "botaof");
        } else {
            document.getElementById(letra).innerHTML = 'V';
            document.getElementById(letra).setAttribute("class", "botaot");
        }
    }
}