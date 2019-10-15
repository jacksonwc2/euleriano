/**************************************************************************************
 *                                                                                    *
 *                          verifica se o grafo é euleriano                           *
 *                             JACKSON WILLIAN CARBONERA                              *
 *                                                                                    *
***************************************************************************************/

//Criação do Grafo para o exemplo utilizando a matriz de adjecencia.
//EXEMPLO 01 -> EULERIANO... Exemplo pego do material da aula, resolvemos em sala
// var matrizAdjecentesEuleriana = [
//     [0, 1, 1, 0, 0, 0, 0],
//     [1, 0, 0, 1, 0, 1, 1],
//     [1, 0, 0, 0, 1, 1, 1],
//     [0, 1, 0, 0, 0, 1, 0],
//     [0, 0, 1, 0, 0, 0, 1],
//     [0, 1, 1, 1, 0, 0, 1],
//     [0, 1, 1, 0, 1, 1, 0]
// ];

//EXEMPLO 02 -> NÃO EULERIANO
//  var matrizAdjecentesEuleriana = [
//      [1, 1, 1, 0, 0, 0, 0],
//      [1, 0, 0, 1, 0, 1, 1],
//      [1, 0, 0, 0, 1, 1, 1],
//      [0, 1, 0, 0, 0, 1, 0],
//      [0, 0, 1, 0, 0, 0, 1],
//      [0, 1, 1, 1, 0, 0, 1],
//      [0, 1, 1, 0, 1, 1, 0]
//  ];

//EXEMPLO 03 -> SEMI EULERIANO
//  var matrizAdjecentesEuleriana = [
//      [1, 1, 1, 0, 0, 0, 0],
//      [1, 0, 0, 1, 0, 1, 1],
//      [1, 0, 0, 0, 1, 1, 1],
//      [0, 1, 0, 0, 0, 1, 0],
//      [0, 0, 1, 0, 0, 0, 1],
//      [0, 1, 1, 1, 0, 0, 1],
//      [1, 1, 1, 0, 1, 1, 0]
//  ];

var matrizAdjecentesEuleriana = [
    [0,1,0,1,0],
    [1,0,1,0,0],
    [0,1,0,1,0],
    [1,0,1,0,0],
    [1,1,1,1,0]
];

//realiza o teste para ver se a matriz é euleriana
validarGrafoEuleriano(matrizAdjecentesEuleriana);

/**
 * Funcao que valida as seguintes regras e define o grafo como
 * Euleriano, Semi Euleriano ou Grafo Não euleriano.
 * 
 * Regras:
 * 1- Para o grafo ser euleriano deve possuir todos os vertices com grau par.
 * 2- Para ser um grafo semi euleriano deve possuir apenas 2 vertices de grau impar.
 * 3- Se não atender uma das regras acima o grafo não é euleriano.
 * 
 * @param matriz
 */
function validarGrafoEuleriano(matriz) {

    //percoremos a matriz e verificamos o grau dos vertices
    var countVerticesImpares = 0;
    matriz.forEach(function (vertice) {
        
        //adquire o grau do vertice atual
        var grauDoVertice = vertice.filter((x) => { return x > 0 }).length;

        //incrementa countVerticesImpares caso seja grau impar
        if ((grauDoVertice % 2) != 0) {
            countVerticesImpares++;
        }
    });

    //de acordo com o countVerticesImpares verificamos o grafo
    if (countVerticesImpares == 2) {
        console.log('Grafo é Semi Euleriano!');
    } else if (countVerticesImpares > 2 || countVerticesImpares == 1) {
        console.log('Grafo não é Euleriano!');
    } else {
        console.log('Grafo é Euleriano!');
    }
}
