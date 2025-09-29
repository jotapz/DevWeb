const paragrafo = document.getElementById('meuParagrafo');
const botao = document.getElementById('meuBotao');
const textoOriginal = paragrafo.textContent;
const textoAlterado = 'Viuu só, avisei! ;D';


botao.addEventListener('click', () => {
    if (paragrafo.textContent === textoOriginal) {
        paragrafo.textContent = textoAlterado;
    } else {
        paragrafo.textContent = textoOriginal;
    }   
})


const numerosArray = [1, 2, 3, 4, 5];
function multiplicarPorDois(numeros) {
    return numeros.map(numero => numero * 2);
}
const arraymap = document.getElementById('arraymap');
const arraymultiplicado = document.getElementById('arraymultiplicado');
const botaoArray = document.getElementById('botaoArray');

arraymap.textContent = `Array original: [${numerosArray.join(', ')}]`;

botaoArray.addEventListener('click', () => {
    const resultado = multiplicarPorDois(numerosArray);
    arraymultiplicado.textContent = `Array multiplicado por 2: [${resultado.join(', ')}]`;
});


const numerosOriginais = [5, 10, 15, 20, 25, 8, 3, 1, 4];
const arrayfilter = document.getElementById('arrayfilter');
const arrayfiltrado = document.getElementById('arrayfiltrado');
const botaoFilter = document.getElementById('botaoFilter');

function filtrarNumerosMaioresQueDez(ArrayDeNumeros) {
    const numerosFiltrados = ArrayDeNumeros.filter(numero => numero > 10);
    return numerosFiltrados;
}

arrayfilter.textContent = `Array original: ${numerosOriginais.join(', ')}`;

botaoFilter.addEventListener('click', () => {
    const resultado = filtrarNumerosMaioresQueDez(numerosOriginais);
    arrayfiltrado.textContent = `Números maiores que 10: ${resultado.join(', ')}`;
});


const numerosReduce = [1, 2, 3, 4, 5];
const arrayReduceOriginal = document.getElementById('arrayReduceOriginal');
const arrayReduceSomado = document.getElementById('arrayReduceSomado');
const botaoReduce = document.getElementById('botaoReduce');

function somarTodosOsNumeros(ArrayReduce) {
    const somaTotal = ArrayReduce.reduce((acumulador, valorAtual) => {
        return acumulador + valorAtual;
    }, 0);
    return somaTotal;
}

arrayReduceOriginal.textContent = `Array original: ${numerosReduce.join(', ')}`;

botaoReduce.addEventListener('click', () => {
    const resultado = somarTodosOsNumeros(numerosReduce);
    arrayReduceSomado.textContent = `Soma de todos os números: ${resultado}`;
});



const produtos = [
    { nome: 'Mousepad', preco: 30.00 },
    { nome: 'Teclado', preco: 60.00 },
    { nome: 'Mouse', preco: 45.00 },
    { nome: 'Monitor', preco: 80.00 }
];
const arrayProdutos = document.getElementById('arrayProdutos');
const produtoEncontrado = document.getElementById('produtoEncontrado');
const buscarProdutoBtn = document.getElementById('buscarProdutoBtn');

function encontrarProdutoPrecoMaiorQue50(listaProdutos) {
    const produtoEncontrado = listaProdutos.find(produto => produto.preco > 50);
    return produtoEncontrado;
}

arrayProdutos.textContent = JSON.stringify(produtos, null, 2);

buscarProdutoBtn.addEventListener('click', () => {
    const resultadoBusca = encontrarProdutoPrecoMaiorQue50(produtos);
    if (resultadoBusca) {
        produtoEncontrado.textContent = `Produto encontrado: ${resultadoBusca.nome} - Preço: R$${resultadoBusca.preco.toFixed(2)}`;
    } else{
        produtoEncontrado.textContent = 'Nenhum produto encontrado com preço superior a 50.';
    }
});





