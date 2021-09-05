//Uma função simples
function helloWorld(){
    document.write('Olá Mundo');
}

//Chamando a função
helloWorld();

//Uma função que recebe parâmetros
function helloWorldName(nome){
    return document.write( '<br> Olá Mundo, meu nome é :' + nome);

}

//Chamando a função com argumento
helloWorldName('Samuel');

//Vejamos uma função que retorna um valor numérico
function calculaAreaRetangulo(base, altura){
    var area = base * altura;
    return area;
}

//Podemos chamar a função para atribuir valores a variáveis
    var retangulo = calculaAreaRetangulo(16,4);

//Exibir  o resultado 
document.write( '<br> Área do retângulo é: ' + retangulo);

//Recebendo múltiplos valores
function calculaAreaVolume(altura, largura, profundidade){
    var area = altura * largura;
    var volume = altura * largura * profundidade;
    var resultadoAreaVolume = {area,volume};
    return resultadoAreaVolume;
}

//Utilizando  a função e armazenando a posição desejada do array
var calculoCaixaArea = calculaAreaVolume(10, 20, 30)[0];
var calculoCaixaVolume = calculoAreaVolume(10, 20, 30)[1];

//Exibindo os resultados
 document.write( '<br> A área da caixa é: ' + calculoCaixaArea);
document.write( '<br> O volume da caixa é: ' + calculoCaixaVolume);


/*Podemos chamar a função diretamente na declaração da variável.
Isso é uma função anônima*/
var areaCaixa = (function(){
    var calculoarea = 10 * 20;
return calculoarea;

}());

//Exibindo o Resultado 
document.write('<br> A função Anônima faz a mesma coisa: ' + areaCaixa);