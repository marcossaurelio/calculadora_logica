// Variáveis atribuídas de cada proposição.
let p = true;
let q = true;
let r = true;
let s = true;
let t = true;
let u = true;

let expressao = ''; // Variável que armazena em string a expressão lógica a ser calculada.

// Função chamada ao inserir um caratere na expressão.
function insert(char) {
    let conteudo = document.getElementById('monitor').innerHTML;
    document.getElementById('monitor').innerHTML = conteudo + char;
    switch (char) {
    case '\(':
        expressao += '(';
        break;
    case '\)':
        expressao += ')';
        break;
    case '∧':
        expressao += '&&';
        break;
    case '∨':
        expressao += ''||'';
        break;
    case '~':
        expressao +=  '!';
        break;
    case '→':
        expressao += '==';
        break;
    case '↔':
        expressao += '==';
        break;
    case 'P':
        expressao += 'p';
        break;
    case 'Q':
        expressao += 'q';
        break;
    case 'R':
        expressao += 'r';
        break;
    case 'S':
        expressao += 's';
        break;
    case 'T':
        expressao += 't';
        break;
    case 'U':
        expressao += 'u';
        break;
    }
    calcular(); // Sempre que inserir um novo caractere, o programa irá calcular o valor da expressão.
    if (document.getElementById('resultado').innerHTML == 'operação inválida') {
        document.getElementById('resultado').innerHTML = '';
    }
}

// Limpa a tela de resultado.
function cleanResult() {
    document.getElementById('resultado').innerHTML = '';
}

// Limpa a expressão e o resultado.
function clean() {
    document.getElementById('monitor').innerHTML = '';
    expressao = '';
    cleanResult();
}

// Backspace.
function back() {
    conteudo = document.getElementById('monitor').innerHTML;
    document.getElementById('monitor').innerHTML = conteudo.substring(0, conteudo.length -1);
    let exp = expressao;
    if (exp.substring(exp.length - 1) == '&' || exp.substring(exp.length - 1) == '|' || exp.substring(exp.length - 1) == '=') {
        expressao = exp.substring(0, exp.length -2);
    } else {
        expressao = exp.substring(0, exp.length -1);
    }
    cleanResult(); // Limpa a tela de resultado ao dar backspace.
}

// Calcula a expressão por meio do método eval.
// Caso dê erro, o programa informa ao usuário a mensagem de "operação inválida".
function calcular() {
    if (expressao === '') {
        clean();
    } else {
        try {
            if (eval(expressao) === true) {
                document.getElementById('resultado').innerHTML = 'Verdadeiro';
            } else if (eval(expressao) === false) {
                document.getElementById('resultado').innerHTML = 'Falso';
            }
        } catch(erro) {
            document.getElementById('resultado').innerHTML = 'operação inválida';
        }
    }
}

// Função que muda o estado de TRUE para FALSE e vice-versa para cada proposição.
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
    calcular(); // Sempre que mudar o estado, será calculada a expressão.
    if (document.getElementById('resultado').innerHTML == 'operação inválida') {
        document.getElementById('resultado').innerHTML = '';
    }   
}
