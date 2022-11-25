let p = true;
let q = true;
let r = true;
let s = true;
let t = true;
let u = true;
let expressao = '';

function cleanResult() {
    document.getElementById('resultado').innerHTML = '';
}

function insert(char) {
    let conteudo = document.getElementById('monitor').innerHTML;
    document.getElementById('monitor').innerHTML = conteudo + char;
    if(char=='\('){
        expressao += '(';
        cleanResult();
    } else if(char=='\)'){
        expressao += ')';
        cleanResult();
    } else if(char=='∧'){
        expressao += '&&';
        cleanResult();
    } else if(char=='∨'){
        expressao += '||'
        cleanResult();
    } else if(char=='~'){
        expressao += '!';
        cleanResult();
    } else if(char=='→'){
        expressao += '==';
        cleanResult();
    } else if(char=='↔'){
        expressao += '==';
        cleanResult();
    } else if(char=='P'){
        expressao += 'p';
        calcular();
    } else if(char=='Q'){
        expressao += 'q';
        calcular();
    } else if(char=='R'){
        expressao += 'r';
        calcular();
    } else if(char=='S'){
        expressao += 's';
        calcular();
    } else if(char=='T'){
        expressao += 't';
        calcular();
    } else if(char=='U'){
        expressao += 'u';
        calcular();
    }
}

function clean() {
    document.getElementById('monitor').innerHTML = '';
    expressao = '';
    cleanResult();
}

function back() {
    conteudo = document.getElementById('monitor').innerHTML;
    document.getElementById('monitor').innerHTML = conteudo.substring(0, conteudo.length -1);
    let exp = expressao;
    if (exp.substring(exp.length - 1) == '&' || exp.substring(exp.length - 1) == '|' || exp.substring(exp.length - 1) == '=') {
        expressao = exp.substring(0, exp.length -2);
    } else {
        expressao = exp.substring(0, exp.length -1);
    }
    cleanResult();
}

function calcular() {
    if (expressao === '') {
        clean();
    } else if (eval(expressao) == undefined) {
        document.getElementById('resultado').innerHTML = 'operação inválida';
    } else {
        document.getElementById('resultado').innerHTML = eval(expressao);
    }
}

function mudaEstado(letra) {
    if (letra == 'p') {
        p = !p
        if (document.getElementById(letra).innerHTML == 'V') {
            document.getElementById(letra).innerHTML = 'F';
            document.getElementById(letra).setAttribute("class", "botaof");
        } else {
            document.getElementById(letra).innerHTML = 'V';
            document.getElementById(letra).setAttribute("class", "botaot");
        }
    }
    if (letra == 'q') {
        q = !q
        if (document.getElementById(letra).innerHTML == 'V') {
            document.getElementById(letra).innerHTML = 'F';
            document.getElementById(letra).setAttribute("class", "botaof");
        } else {
            document.getElementById(letra).innerHTML = 'V';
            document.getElementById(letra).setAttribute("class", "botaot");
        }
    }
    if (letra == 'r') {
        r = !r
        if (document.getElementById(letra).innerHTML == 'V') {
            document.getElementById(letra).innerHTML = 'F';
            document.getElementById(letra).setAttribute("class", "botaof");
        } else {
            document.getElementById(letra).innerHTML = 'V';
            document.getElementById(letra).setAttribute("class", "botaot");
        }
    }
    if (letra == 's') {
        s = !s;
        if (document.getElementById(letra).innerHTML == 'V') {
            document.getElementById(letra).innerHTML = 'F';
            document.getElementById(letra).setAttribute("class", "botaof");
        } else {
            document.getElementById(letra).innerHTML = 'V';
            document.getElementById(letra).setAttribute("class", "botaot");
        }
    }
    if (letra == 't') {
        t = !t;
        if (document.getElementById(letra).innerHTML == 'V') {
            document.getElementById(letra).innerHTML = 'F';
            document.getElementById(letra).setAttribute("class", "botaof");
        } else {
            document.getElementById(letra).innerHTML = 'V';
            document.getElementById(letra).setAttribute("class", "botaot");
        }
    }
    if (letra == 'u') {
        u = !u
        if (document.getElementById(letra).innerHTML == 'V') {
            document.getElementById(letra).innerHTML = 'F';
            document.getElementById(letra).setAttribute("class", "botaof");
        } else {
            document.getElementById(letra).innerHTML = 'V';
            document.getElementById(letra).setAttribute("class", "botaot");
        }
    }
    calcular();
}