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


const frutas = ['Maçã', 'Banana', 'Laranja', 'Uva', 'Manga'];

function exibirFrutasConsole(arrayDeItens) {
    console.log('Frutas na lista:');

    arrayDeItens.forEach(fruta => {
        console.log(fruta);
    })
}

const botaoForEach = document.getElementById('botaoForEach');
const listaFrutas = document.getElementById('listaFrutas');

botaoForEach;addEventListener('click', () => {
    exibirFrutasConsole(frutas);

    listaFrutas.innerHTML = '';

    frutas.forEach(fruta => {
        const itemDaLista = document.createElement('li');
        itemDaLista.textContent = fruta;
        listaFrutas.appendChild(itemDaLista);
    });
})


const buscarUsuario = document.getElementById('buscar-usuario');
const userInfo = document.getElementById('user-info');

const apiUrl = 'https://jsonplaceholder.typicode.com/users/4';

function buscarUsuarioApi() {
    userInfo.textContent = 'Carregando...';
    userInfo.className = 'info-container loading';

    fetch(apiUrl)
        .then(response => {
            if(!response.ok) {
                throw new Error(`Erro na requisição: ${response.status}`);
            }  
                return response.json();
        })
        .then(data => {
            console.log(data);
            userInfo.textContent = `Nome do usuário: ${data.name}`;
            userInfo.className = 'info-container success';
        })
        .catch(error => {
            console.error('Erro ao buscar usuário:', error);
            userInfo.textContent = `Erro ao buscar usuário: ${error.message}`;
            userInfo.className = 'info-container error';
        });
    }

    buscarUsuario.addEventListener('click', buscarUsuarioApi);



    const nomeInput = document.getElementById('nomeInput');
    const salvarNomeBtn = document.getElementById('salvar-botao');
    const recuperarNomeBtn = document.getElementById('recuperar-botao');
    const limparNomeBtn = document.getElementById('limpar-botao');
    const resultadoDiv = document.getElementById('resultado-nomes');


    const STORAGE_KEY = 'nomeUsuario';

    salvarNomeBtn.addEventListener('click', () => {
        const nomeDoUsuario = nomeInput.value;

        if (!nomeDoUsuario) {
            alert('Por favor, insira um nome antes de salvar.');
            return;
        }

        const usuario = {
            nome: nomeDoUsuario,
            dataSalvo: new Date().toLocaleDateString('pt-BR')
        }

        const usuarioJson = JSON.stringify(usuario);

        localStorage.setItem(STORAGE_KEY, usuarioJson);

        resultadoDiv.textContent = `Nome salvo: "${usuario.nome}" salvo com sucesso!`;
        nomeInput.value = '';
    });
    
    recuperarNomeBtn.addEventListener('click', () => {
        const usuarioStringRecuperado = localStorage.getItem(STORAGE_KEY);

        if (usuarioStringRecuperado) {
            const usuarioObjeto = JSON.parse(usuarioStringRecuperado);

            resultadoDiv.textContent = `Nome recuperado: "${usuarioObjeto.nome}", salvo em ${usuarioObjeto.dataSalvo}.`;
        } else {
            resultadoDiv.textContent = 'Nenhum nome salvo no LocalStorage.';
        }
    })

    limparNomeBtn.addEventListener('click', () => {
        localStorage.removeItem(STORAGE_KEY);
        resultadoDiv.textContent = 'Nome removido do LocalStorage.';
    });



    const meuFormulario = document.getElementById('meu-formulario');
    const nomeForm = document.getElementById('nome-form');
    const erroNomeSpan = document.getElementById('erro-form');

    meuFormulario.addEventListener('submit', function (event) {
        event.preventDefault();

        const nomeValor = nomeForm.value.trim();

        if (nomeValor == '') {
            alert('O campo nome não pode estar vazio.');
        } else {
            erroNomeSpan.textContent = '';
            alert(`Formulário enviado com sucesso! Nome: ${nomeValor}`);
            console.log('Formulário válido enviado:', nomeValor);
            meuFormulario.reset();
        }
    });




    const displayRelogio = document.getElementById('relogio-digital');

    function atualizarRelogio() {
        const agora = new Date();

        let horas = agora.getHours();
        let minutos = agora.getMinutes();
        let segundos = agora.getSeconds();

        horas = horas < 10 ? '0' + horas : horas;
        minutos = minutos < 10 ? '0' + minutos : minutos;
        segundos = segundos < 10 ? '0' + segundos : segundos;

        const horarioFormatado = `${horas}:${minutos}:${segundos}`;
        displayRelogio.textContent = horarioFormatado;
    }

    setInterval(atualizarRelogio, 1000);

