// Começando curso no dia 24.09.22 ás 00:10 Sobre JavaScript.

/* -- COMEÇO DO COMENTÁRIO

// DECLARANDO AS VARIÁVEIS

let idade = 16; // Variável idade é igual á 16
let altura = 1.50; // Variável altura é igual á 150
var filhos = 3; // Variável filhos é igual á 3
var casa = 1; // Variável casa é igual á 1

// APRESENTANDO-AS NO CONSOLE

console.log("A idade é de " + idade + " anos.") // Console.log faz com que o comando seja apresentado no console
console.log("Sua altura é de " + altura + " metros."); // Apresente o valor de altura(150) no console!!

// DIFERENÇAS DAS VARIÁVEIS

// let

let IngressoAdulto = 20; // Usando o let podemos atualizar seus valores
console.log("Valor do Ingresso Adulto custa" + IngressoAdulto + " Reais."); // Apresentando valor

IngressoAdulto = 40; // Novo valor do IngressoAdulto
console.log("Novo valor do Ingresso Adulto custa " + IngressoAdulto + " Reais."); // Apresentando novo valor

// const

let IngressoIdoso = 10;  // Usando o const NÃO podemos alterar os valores..
console.log("Valor do Ingresso Idoso é " + IngressoIdoso + " Reais."); 

IngressoIdoso = 15; // "Novo valor do IngressoIdoso"
console.log("Novo valor do Ingresso Idoso é " + IngressoIdoso + " Reais."); // Agora na hora de apresentar ao console ocorrera um erro!!

// TIPOS PRIMITIVOS - 1 - [Referências] 2 - [Valores]

let nome = "Carlos."; // String literal
let idade1 = 32; // Number literal
let seteSaisDeFiló = false; // Boolean - True or False
let sobrenome = undefined; // Undefined - Não definido - Padrão
let corSelecionada = null; // Valor 0 - Nada - Vazio - Redefinir valor

console.log("Nome do seu amigo é " + nome);
console.log("E ele tem " + idade1 + " Anos.");
console.log("A barata diz que tem sete saisa de filó.. E ela esta" + seteSaisDeFiló + ".");
console.log("Sobre nome dele é esse " + sobrenome + ".");
console.log("Sua cor selecionada foi " + corSelecionada + ".");

// Indo mimir as 00:58 do dia 24.09.2022
// Voltando para aula as 09:03 do dia 24.09.22

// TIPAGEM DINÂMICA - No console podemos ver cada tipo de variável usando o typeof (nome da variável).

console.log("Antes");
console.log("Sobrenome é " + typeof sobrenome);

console.log("Depois..")
sobrenome = "Marques";
console.log("Sobrenome é " + typeof sobrenome);


// OBJETOS - Objects


// Variáveis 

let nome = 'Clara';
let idade = 24;
let Bolsonaro22 = false;
let sobrenome = undefined;



let pessoa = { // Usando o objects nós podemos declarar varias variáveis 
    nome: 'Clara', // Separamos as variáveis com vírgulas..
    idade: 24,
    Bolsonaro22: false, 
    sobrenome: 'Santo'
 }; 

 console.log(pessoa) // Exibindo as variáveis de pessoa

// Arrays

let familia = [24, 'Trinta e dois', 91, 12]; // Valores são definidos em ordem começando pelo 0... Exem [24, 46, 75] O valor de 24 esta no 0. E o valor de 75 esta na 2 posição
console.log("Comdando length nos mostra o tamnhanho do Array. Exem.: " + familia.length + ".");
console.log("Apresentando os valores do array: " + familia + ".");  // Apresenta no console o array familia 

console.log("O valor correspondente da posição dois é o " + familia[2] + ".");  // Apresentando valor na segunda posição = 91...


// Functions - Funções Data: 01.10.2022;

// Verbo + Substantivo

let corSite = "azul"; // Variável com o valor pré-definido

function resetaCor(){ // Função resetaCor 
    corSite = "Yellow"; // Variável corSite passa a ser Yellow
} // Finalização da Função

console.log("Valor inicial é " + corSite); // Valor pré-definido da cor

resetaCor(); // Resetador da cor
console.log("resetando o valor...")

console.log("O valor atual é " + corSite); // Valor resetado da cor


// Agora vamos usar variáveis
console.clear();
console.log("Resetando o cor console com variáveis");
console.log("");

let corConsole = "preto"; // Variável corConsole é ígual a preto

function resetConsole(cor, tonalidade){ // A funcão resetConsole está guardada em uma variável chamado cor
    corConsole = cor + tonalidade; // Faz com que o valor do corConsole seja ígual a cor 
}; // Finalização da Função

console.log("Valor inicial " + corConsole); 

resetConsole("Rosa"); // Resetando o valor corConsole
console.log("Valor redefinido " + corConsole);

// Também podemos fazer uma adição

resetConsole("Rosa ", "claro");
console.log("Colocando a tonalidade " + corConsole)


// Realiza uma tarefa, não devolva nada

function Nome(){ // Função Nome
    console.log('Carls');
};

Nome(); // Chamando a função Nome para meu console


function MultPorDois(valor){
    // Faz cálculo e o retorna
    return valor * 2;
}

console.log("Valor é de " + MultPorDois(5));

let resultado = MultPorDois(5)

console.log("Exibindo o resultado " + resultado)

// OPERADORES

// Operadores Arítiméticos(matemáticos)
// Operadores Atribuição
// Operadores de Comparação
// Operadores Lógicos
// Operadores Bitwise

// OPERADORES ARÍTIMÉTICOS

// Podemos usar os seguintes operações | + | - | * | / | ** |

console.log("Operadores Arítiméticos");
console.log('');
console.log('Valores do salário - 1.250R$')

let salario = 1250; //  Variável salario 

console.log("Adicionando", salario + salario + 'R$');
console.log("Subtraindo", salario - salario + 'R$');
console.log("Multiplicando", salario * salario + 'R$');
console.log("Dividindo", salario / salario + 'R$');
console.log(5 ** 5);


// Ainda no Arítimético 

// ++ & --

// Mais | ++ |

let idade = 18; // Variável idade = 18

console.log(idade++); // Mais é como se fosse um adicionador +1
console.log(idade) // Apresentando valor +1 = 19

// Outra forma
console.clear();

idade = 18; // Retornando valor de idaide para 18

console.log(++idade); // Fará com que o valor de 19 seja apresentando antes do 18
console.log(idade); // Apresentando valor +1 = 19

// Menos | -- |

let borracha = 18; // Variável borracha = 4

console.log(borracha--); // Mais é como se fosse um adicionador -1
console.log(borracha) // Apresentando valor -1 = 3

// Outra forma
console.clear(); // ATTENTION RETIRE O console.clear(); PARA VER O CÓDIGO ACIMA!!!

borracha = 4; // Retornando valor de borracha para 4

console.log(--borracha); // Fará com que o valor de 3 seja apresentando antes do 18
console.log(borracha); // Apresentando valor -1 = 3


// OPERADORES DE ATRIBUIÇÃO

let valorSaiaDeFilo = 12;
// Somando    -- valorSaiaDeFilo = valorSaiaDeFilo + valorSaiaDeFilo
// Subtraindo -- valorSaiaDeFilo = valorSaiaDeFilo - valorSaiaDeFilo


valorSaiaDeFilo += valorSaiaDeFilo; // Podemos usar esse comando para fazer a conta de somar o mesmo número dele. Exem.: Variável dog = 2;    Usariamos o dog += dog, para somar.. Seu resultado seria 4.
console.log(valorSaiaDeFilo) // Apresentado valores somados

valorSaiaDeFilo -= valorSaiaDeFilo; // Faz a mesma operação só que subtraindo

console.log(valorSaiaDeFilo); // Apresentando valores subtraidos


// OPERADORES DE IGUALDADE - 2 Tipos e suas Diferenças!!

// Igualdade estrita - 1 Tipo

console.log( 1 === 1); // Comparando o valor da variável e seu tipo = TRUE
console.log( '1' === 1); // Comparando o valor de uma string com uma numeral = FALSE

// Agora você pode se perguntar.. Pq o primeiro deu true e o segundo exemplo deu false?
// A questão é a seguinte a primeira são dois números do tipo int
// E a segunda é um valor string(palavra '1') e outro é um número do tipo int
// Conclusão o primeiro exem é Verdadeiro e o Segundo é Falso, pq são tipos diferentes.

// Igualdade solta - 2 Tipo - !Não recomendado!

console.clear(); // ATTENTION RETIRE O console.clear(); PARA VER O CÓDIGO ACIMA!!!

console.log( 1 == 1 );  // Compara os dois valores
console.log( '1' == 1 ); // Compara SOMENTE o valor dentro da variável!!

// Agora do pq ele está dizendo que os valores são true
// De uma forma prática de dizer.. Quando preciso ele converte o tipo das variáveis!


// OPERADOR TERNÁRIO

// Nós temos um cliente.. Se esse cliente tiver mais que 100 pontos, ele é Premium.. Senão tiver 100 pontos, ele será um cliente comum!!

let pontosCliente = 100; // Valor de pontos do Cliente é 100.
let tipoCliente = pontosCliente > 100 ? 'Premium' : 'Comum';  // tipo = pontos for maior que 100 declare-o como premium, senão declare-o como comum!
// Nessa variável acima podemos ver que tipo é ígual a pontos maior que 100 simbolo que interrogação para representar a pergunta e depois vemos duas strings separadas por dois pontos, a primeira string é a verdadeira(premium) e a segunda é a falsa(comum)
// A variável tipo representa os pontos que devem ser atingidos para ser premium ou os pontos que temos para clientes comuns
console.log(tipoCliente)

let resultado = 101;
let situacao = resultado >  100 ? 'Premium' : 'Comum';
console.log(situacao)


// OPERADORES LÓGICOS


// Operador e (&&) // e representado pelo && liga os valores e depois retorna seu resultado
// Ele ira retornar TRUE se os dois operandos forem verdadeiros

console.log(false && false); // Retornará um valor falso
console.log(false && true); // Retornará um valor falso
console.log(true && true); // Retornará um valor verdadeiro

// MÃO NA MASSA!!!

let maiorDeIdade = true; // Maior de idade ígual a verdadeiro
let possuiCarteiraDeTrabalho = true; // Carteira de Trabalho ígual a verdadeiro 
let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho; // Variável podeAplicar só pode ser aplica se maiorDeIdade for verdade e(&&) possuiCarteiraDeTrabalho for verdadeiro também!!

console.log(podeAplicar) // Mostrando no Console a Variável podeAplicar.


// Operador ou ( || )  // ou representado pelas || faz a função do ou, verdadeiro ou falso, falso || verdadeiro
// Ele retonará true se um dos operandos forem verdadeiros

console.log(false || false); // Retornará um valor falso
console.log(false || true); // Retornará um valor verdadeiro
console.log(true || true); // Retornará um valor verdadeiro

// Ele não necessariamente precis que as duas condições sejam verdadeiras.. Assim com apenas um true(verdadeiro) o resultado do retorno sera de verdadeiro


// Operador NOT (!) // Not representado pelo !(Exclamação) - Negação
let saldoNoBanco = true;
let cartaoLiberado = true;
let validade = saldoNoBanco && cartaoLiberado; 

let cartaoNegado = !validade; // Se variável cartãoNegado for ígual a diferente de validade.
console.log(cartaoNegado)

if (cartaoNegado === false) { // Se cartãoNegado for false - retorne 'Seu cartão foi aprovado!'
    console.clear();
    console.log('Seu cartão foi aprovado!');
}
else { // Senão cartãoNegado for true - retorne 'Seu cartão foi recusado!'
    console.clear();
    console.log('Seu cartão foi recusado!');
}


// !! Comparações não boleanos !!

// Falsy 

// Undefined
// Null
// 0
// false
// ''
// NaN - Not a number

// Truthy 

let corPersonalizada = 'Verde'; 
let corPadrao = 'Preto';
let corPerfil = corPersonalizada || corPadrao;

console.log(corPerfil)


// TROCANDO VALORES DAS VARIÁVEIS - Mini-Projeto1

// VALOR INICIAL
let a = 'Vermelho'; // Variável a é ígual a Vermelho
let b = 'Amarelo'; // Variável b é ígual a Amarelo

console.log('Valor inicial de A = ', a);
console.log('Valor inicial de B = ', b);

// INVERTENDO
console.log('Invertendo Valores..')
let c = a; // Variável c = a 
a = b; // Variável a = b
b = c; // Variável b = c

// NOVOS VALORES
console.log('Novo valor de A = ', a); // Apresente valor da variável a (Amarelo).
console.log('Novo valor de B = ', b); // Apresente valor da variável b (Vermelho).


// CONDICIONAIS - If..Else e Switch..Case

// If..Else

// Se a hora estiver entre 06:00 até 12:00 = Bom dia!
// Se a hora estiver entre 12:00 até 18:00 = Bom tarde!
// Caso contrário = Boa noite!

let hora = 10; // Alteramdo esse valor podemos exibir.. Bom dia, Boa tarde, Boa noite.

if (hora >= 6 && hora < 12) { // Se hora for maior
    console.log('Bom dia!');
}

else if (hora >= 12 && hora < 18) { // Senão-se
    console.log('Boa tarde!!')
}

else if (hora < 0) {
    console.log('Asse aroh oãn etsixe!!');
}

else { // Senão
    console.log('Noa Boite!!')
}


// SWITCH/CASE

let permissao; // Variável permissão pode ser usado como: comum, gerente, diretor
permissao = gerente; // Alterando esse valor podemos receber uma diferente mensagem no console!! Obs.: Serão aceitos somentes valores strings(comum, gerente, diretor).

switch (permissao) { // Switch permissão - Ele analisara os valores da variável permissão!!
    case 'comum': // Caso permissão for = 'comum' faça..
        console.log('Usuário Comum'); // Apresente Usuário Comum
        break; // Break serve para parar o case
    case 'gerente': // Caso permissão for = 'gerente' faça..
        console.log('Usuário Gerente'); // Apresente Usuário Gerente
        break; // Pare
    case 'diretor': // Caso permissão for = 'diretor' faça..
        console.log('Usuário Diretor'); // Apresente Usuário Diretor
        break; // Pare

    default: // Default = Padrão. Resumidamente ele é usado quando todos os cases acima forem falsos!!
        console.log('Usuário Desconhecido!'); // Apresente Usuário Desconhecido!
}


// FINALIZANDO POR HOJE.. DATA: 01.10.2022 - 20:21


// INICIANDO.. DATA: 04.10.22 - 13:20

// Loops ou Laços de repetição!
// Vamos lá.. Hoje iremos criar um exercício.. Eu quero que seja exibido no console a seguinte mensagem ('Olá Mundo!!') 3 vezes!!

// Veremos maneiras de exibir essa mensagem 3 vezes

// Maneira NÃO recomenda!!

// console.log('Olá Mundo!!');
// console.log('Olá Mundo!!');
// console.log('Olá Mundo!!');

// Agora veremos as 5 maneiras de fazer esse execício!! (5 Loops/Laços de repetição).

// 1 - For
// 2 - While 
// 3 - Do..while
// 4 - For..in
// 5 - For..of

// Vamos apresentar os Loops.


// FOR
// For(let = condição1 = 0;condica01 <5) // De maneira explicativa.. Para o For(Loop) a variável condição1 = 0 e essa mesma variável for menor que 5, ele irá repetir!!

// Exem(Mensagem).:  

console.log('Apresente a mensagem')
for(let i = 1; i <= 3; ++i) // Faça ( se i = 1 e i <= 3, adicione i++) se verdadeiro, continue com a mensagem!!
{
    console.log('Olá Mundo!!',i); // Apresentando a mensagem, usando a variável i
} // Finalização do Loop

// Exem(Ímpar).:

console.log('Mostre todos os números ímpares entre (5) e (1)')
for(let n = 5; n >= 1; n--) // Faça ( se n = 1 e n <= 5, e adicione n++)
{
    if(n % 2 !== 0){ // Aqui já vemos a matemática!! Se o restante da divisão de n for diferente de 0.. Apresente a mensagem abaixo..
        console.log('Esse é o número ímpar', n); // Apresentando a variável n que contém os números ímpares!!
    }
} // Finalização do Loop


// WHILE 

let n = 1;

while(n <= 1) // Enquanto n menor ou ígual a 1.. Repita
{
    if(n % 2 !== 0){ // A parte do if é igual a ao exemplo ímpar do FOR!!
        console.log('Esse é o número ímpar', n); 
    }
} // Finalização do Loop


// DO..WHILE
let i = 0;

do { // faça
    console.log('digitando..', i);
    i++; // Usando o i++ para incrementar.. Porque se nçao usarmos ele seguirá em loop infinito, já que o valor de i continua sendo 0!!
} while(i < 10) // enquanto i dor menor que 10

// Diferença dele para o while.. É que o do..while faz com que repita no minímo uma vez..


// FOR..IN

const pessoa = { // constante pessoa.. Com seguintes valores.: nome e idade
    nome: 'Carls', // Valor de nome
    idade: 32 // Valor de idades
}; // Fechamento da const

// chave = key-value - traduzindo chave = Valor da chave
for(let chave in pessoa) // Faça a variável chave na const pessoa
{
    console.log(chave, pessoa); // Apresentando o valor dentro da const pessoa e seus valores(Carls e 32)!!
}

const cores = ['Amarelo','Branco','Verde']; // Array com os valores de cores 
for (let indice in cores) { // Faça variável indice em cores(array) 
    console.log(indice,cores[indice]); // Apresente no console.. indice,cores em indice
}

// De forma mais simples, podemos usar o for..of, apresentado abaixo!!

// FOR..OF

for(let cor of cores){ // Faça a variável cor de cores(array)
    console.log(cor) // Apresentando cor
}


// Mini-Projeto -- Crie uma função e analíse dois números e retorne o maior.

let valorMaior = max(5,9); // Variável valorMaior da função max(num1 = 5 e num2 = 9)
console.log("O maior valor é o " + valorMaior); // Apresente o valor maior..

function max(num1, num2) { // Função com nome de max (guarda valores de num1 e num2)
    if(num1 > num2){ // Se num1(5) for maior que num2.. Faça 
        return num1 // Retorne o num1
    }
    else { // Senão
        return num2 // Retorne o num2
    }
} // Fechamento da função - max


// Ou

let idadeCliente = idade(15,18); // Variável que guadará o valor da idade dos cilentes 
console.log("O cliente mais velho tem " + idadeCliente + " anos."); // Apresente no console

function idade(idade1,idade2) { // Função idade (com valores das idades)
    return idade1 > idade2 ? idade1: idade2; // Retorne - se idade1 for maior que idade2 - se verdadeiro -- mostre idade1 - se falso -- mostre idade2
} // Fecchamento da função - idade 


// Salvando - 09.10.2022 - Javascript   

// FizzBuzz - Mini-Projeto3

//Começamos pelas regras do FizzBuzz

// 1. Se o valor não é um número, retorne 'Não é um número'.
// 2. Se número for divisível por 3 e 5, retorne FizzBuzz;
// 3. Se número for divisível por 3, retorne Fizz;
// 4. Se número for divisível por 5, retorne Buzz;
// 5. Se número não for divisível por 3 ou 5 , retorne entrada.

const resultado = fizzBuzz(15); // Constante (resultado) = função (fizzBuzz(entrada)
console.log(resultado)

function fizzBuzz(entrada)  { // Função FizzBuzz com valor de entrada
    // Regra 1

    if ( typeof entrada !== 'number') { // Se o tipo da variável entrada for diferente dos números, faça..
        return 'Não é um número!!'; // Retorne a mensagem 'Não é um número!!'
    }

    // Regra 2
    else if (entrada % 3 === 0 && entrada % 5 === 0) { // Se entrada for dividida por 3 e se resto é ígual á 0.. E também for divisível por 5 e seu resto é ígual á 0.. Faça..
        return 'FizzBuzz';
    }

    // Regra 3
    if (entrada % 3 === 0) { // Se entrada for dividida por 3 e seu resto é ígual á 0.. Faça..
        return 'Fizz';
    }

    // Regra 4
    else if (entrada % 5 === 0) { // Se entrada for dividida por 5 e seu resto é ígual á 0.. Faça..
        return 'Buzz';
    }

    // Regra 5
    else  return entrada; // Senão retorne entrada!!
}


// Medidor de Velocidade - Mini-Projeto4

// Regras!!!

// 1. Velocidade máxima será de até 70km/h;
// 2. A cada 5km/h acima desse limite, ganhará 1 ponto na carteira;
// 3. Será necessário o uso da biblioteca Math.Floor;
// 4. Caso os pontos na carteira forem maior que 12, retorne 'Carteira Suspensa!'.

velocidadeVerificada(110); // Valor de velocidade

function velocidadeVerificada(velocidade) { // Função
    if (velocidade <= 70) { // Se velocidade for menor ou ígual á 70..
        console.log('Okay :)'); // Okayyy
    } // Fechamento do Se
    else {
        const pontos = Math.floor((velocidade - 70) / 5); // Math.floor é uma biblioteca matemática do JS, que faz o arredondamento dos número!!
        if (pontos > 12) { // Se pontos forem maior que 12
            console.log('Carteira suspensa!!'); // Suspensão de carteira hihihi
        }
        else { // Senão
            console.log('Pontos: ', pontos);  // Exibindo os Pontos
        }
    } // Fechamento do Senão
}


// Par ou Ímpar - Mini-Projeto 5

// Regras!!

// 1. Receber uma quantia de valores, e depois os avalie.
// 2. Função exibe se cada valor é par ou ímpar!!

exibirTipo(5); // Quantos números seram analisados

function exibirTipo(limite) { // Função
    for (let i = 1; i <= limite; i++) {
        if ( i % 2 === 0 ) {
            console.log(i + ' - PAR');
        }
        else {
            console.log(i + ' - ÍMPAR');
        }
    }
}


// Encontre a string - Mini-Projeto6

// Regras

// 1. Crie um método para ler as propriedades de um objeto
// 2. Depois exiba somente as propriedades do tipo string que estão nesse objeto

const filme = { // Contante / Variável - filme
    Título : 'WandaVision', // Suas propriedades
    Ano : '2021',
    Diretor : 'Matt Shakman',
    Personagens : 'Wanda e Visão'
}

exibirPropriedades(filme); // exibirPropriedades terá os valores da const filmes

function exibirPropriedades(obj) { // Função que fará a exibição das propriedades do filme!!
    for (prop in obj) { // Faça 
        if (typeof prop === 'string') { // Se o  tipo da variável prop for igual á string.. Faça
            console.log(prop, obj[prop]) // Apresente as propriedades e os objetos na propriedades!!
        } // Fechamento do Se

    } // Fechamento do Laço

} // Fechamento da Função!!


// Múltiplos de 3 e 5 - Mini-Projeto7

// Regras

// 1. Crie uma função chamada somar quee retorne a soma de todos os múltiplos de 3 e 5
// 2. Armazene os múltiplos de 3
// 3. Armazene os múltiplos de 5
// 4. E depois o Some os dois.. 

// Múltiplos de 3 
// - 3, 6, 9 

// Múltipllos de 5
// - 5, 10


somar(10); // Somar tem o limite de 10
function somar(limite) { // Função
    let multiplosDe3 = 0; // Variáveis
    let multiplosDe5 = 0;

    for (i = 0; i <= limite; i++) { // Laço de Repetição

        // 3
        if (i % 3 === 0) { // Se - resto de i for igual á 0
            multiplosDe3 += i; // Isso é igual a fazermos multiplosDe3 + multiplosDe3 + i;
        }

        // 5
        if (i % 5 === 0){ // Se - resto de i for igual á 0
            multiplosDe5 += i; // Igual ao de cima!
        }

    }
    console.log('Soma do Multiplicador de 3 = ' + multiplosDe3);
    console.log('Soma do Multiplicador de 5 = ' + multiplosDe5);
    console.log('Somas do Multiplicadores de 3 e 5 =', multiplosDe3 + multiplosDe5);
}


// Média Escolar - Mini-Projeto8

// Regras / Objetivos

// 1. Obtenha a média dos alunos apartir de um Array!!
// 2. E as retorne no console..

// Notas Possíveis 

// A -> 100-90 <-
// B -> 89-80  <-
// C -> 79-70  <-
// D -> 69-60  <-
// F -> 59-0   <-

const array = [100, 70, 60, 100] // A | C | D | A
// Valor da média = 76 ou 76.66

console.log('Sua média é ' +  mediaDoAluno(array)); // Apresentado a média no console

function mediaDoAluno(notas) {
    // const media = calcularMedia(notas); 
    
    let soma = 0;
    for (let nota of notas) {
        soma += nota;
    }
    const media = soma / (notas.length); // Variável media é igual á soma divídio pelo tamanho do array = 3

    if (media < 59 ) return 'F'; // Retornando valores de suas notas
    if (media < 69 ) return 'D';
    if (media < 79 ) return 'C';
    if (media < 89 ) return 'B';
    if (media < 101 ) return 'A';
}

// Ou 

function calcularMedia(array) {
    let soma = 0;
    for (let valor of array) {
        soma += valor;
    }
    return soma / (array.length);
}


// Contador de Asteriscos - Mini-Projeto9

// Regras / Objetivos

// 1. Crie uma função que exiba a quantidade de Asteriscos.. Lembrando que podemos fazer isso de duas formas..

exibirAsteriscos(10);

function exibirAsteriscos(linhas) {

    // Forma Simples
    console.log('Forma Simples..')
    console.log('')
    let padraoSimples = '';
    
    for (let linha = 1; linha <= linhas; linha++) {
        padraoSimples += '*';
        console.log(padraoSimples)
    }

    // Forma com Loops
    console.log('')
    console.log('Forma com Loops..')
    console.log('')
    for (let linha = 1; linha <= linhas; linha++) {
        let padrao = '';
        for (let i = 0; i < linha; i++) {
            padrao += '*'; // Enquanto a variável i não chegar a 5.. Ele irá repetir o comando
        }
        console.log(padrao) // Exibindo o padrão
    }
    
}


// Número Primos - Mini-Projeto10

// Regras / Objetivos

// 1. Crie uma função que mostre os números primos

// Primos - Só pode ser dividido por 1 ou por ele mesmo
// Compostos - "Normais"

// Exem.: 10, 11 - 10 Seria o Composto e 11 Seria o Primo

exibirNumPrimos(11); // Exibindo os num primos com o limite de 15

function exibirNumPrimos(limite) { // Função
    for (let numero = 2; numero <= limite; numero++) { // Loop com a variável numero 
        

        if (NumberPrimo(numero)) console.log(numero); // Chamando a função e colocando o parâmetro
    } 
} 

function NumberPrimo(numero) {
    for (let divisor = 2; divisor < numero; divisor++) { // loop com a variável divisor
        if (numero % divisor === 0) { // Se esse se, for verdadeiro.. Não será um número primo!!
            return false;
        }
    } 
    return true
}


// Factory Functions - Função de Fábrica

function criarCelular(Marca, Tela ,Bateria) {
    return {
        Marca,
        Tela,
        Bateria,
        ligar() {
            console.log('Chamando...');
        }
    }
}

const celular1 = criarCelular('Morola', 6.5, 5000);
console.log(celular1)


// Cronstructor Functions - Construtor de Função

// camelCase umDoisTresQuatro
function criarNotebook (MarcaNote, Processador, MemoriaRamNote, Armazenamento) {
    return {
        MarcaNote, 
        Processador, 
        MemoriaRamNote, 
        Armazenamento
    }
}

// Pascal Case - UmDoisTresQuatro
function Notebook (MarcaNote, Processador, MemoriaRamNote, Armazenamento) {
    this.MarcaNote = MarcaNote, // this ele faz a referência ao obj.. Nesse caso faz referência a marca do Notebook.
    this.Processador = Processador,
    this.MemoriaRamNote = MemoriaRamNote,
    this.Armazenamento = Armazenamento
}

const notebook = new Notebook('Lenovo','i3-7020U','12GB','1Tb');
console.log(notebook);


// Natureza Dinâmica de Objetos
// Javascript é uma linguagem altamente dinâmica..

const teclado = { // Constante teclado
    cor : 'Black',
    marca: 'Multilaser'
}

teclado.tempoDeResposta = '1ms'

delete teclado.tempoDeResposta; // Deletando tempoDeResposta
console.log(teclado)


// Clonagem de Objetos

// Usarei como exemplo uma caixa
const caixa = { // Objeto que queremos clonar
    CorDaCaixa : 'Amarela',
    TamanhoDaCaixa : '1.5M',
    FeitaDe : 'Papelão'
}

// Forma que podemos clonar
const novoObjeto = Object.assign({
    PesoDaCaixa : '450g'
}, caixa); // Com o uso desse Object.assign também podemos adicionar novas 'características'..
console.log(novoObjeto);

// Outra maneira 
const Objeto2 = {...caixa};
console.log(Objeto2)


// Math -  Biblioteca de Matemática

// ATETTION - Se quiser se aprofundar sobre a biblioteca, basta pesquisar no seu navegador.. Math Javascript

// Vamos testar alguns, prepare seu F5.

console.log(Math.random()); // Math.ramdom server para gerar número aleatórios

console.log(Math.max(9,24,13,20)); // Math.max serve para apresentar o maior valor, dentro do arranjo de valores que está entre os ()...

console.log(Math.min(9,24,13,20)); // Math.min ele vai identificar o menor valor, dentro do arranjo de valores que estão entre os ()...

// !!
// Please - PESQUISE NO SEU NAVEGADOR SOBRE A BIBLIOTECA MATH DO JS
// !!


// String - Tipos / Primitivo / Objeto /

// Tipo primitivo 
const textoPrimitivo = 'Hello World e seu tipo é'
console.log(textoPrimitivo, typeof textoPrimitivo)

// Tipo objeto 
const textoObjeto = new String('Hello World', typeof textoPrimitivo);
// O diferencial é que a do tipo Objeto, terá seu tipo como objeto e também terá propriedades de um objeto
console.log(textoObjeto)

// !!
// Please novamente - PESQUISE NO SEU NAVEGADOR SOBRE OS STRINGS NO JS
// !!


// Template Literal - escape sequences
const mensagemLiteN = 'Humano: Ollaaaa Mundddo\nMundo: Oiieee'; // O /n podemos usar para dar espaçamento entre as linhas

// Object {}
// Boolean - True ou False
// String - '' ou ""
// Template - ` `

const outraResposta = 'Olllaaa o caraio';
const menasgemLiteTem = `Humano: Ollaaaa Mundddo
Mundo: ${outraResposta}`; // Trocando resposta usando o ${Mensagem que vc deseja trocar}

console.log(mensagemLiteN); // Exibindo mensagem com \n
console.log(menasgemLiteTem); // Exibindo mensagem com ` `

// !!
// Sobre o escape.. Vc pode pesquisar no seu navegador 'javascript escape sequences'  
// !!


*/ // FINAL DO COMENTÁRIO


// Date / Datas / Pesquise no seu navegador sobre o Date no Js...

const data1 = new Date();
const data2 = new Date('October 11 2022 18:40');
const data3 = new Date(2025,03,09,10,30);

data1.setFullYear(1967);

console.log(`
Data 1: ${data1} 
Data 2: ${data2} 
Data 3: ${data3}`);

alert('Salllvee')

// Terminando por hj 10.10.2022 - 18:37