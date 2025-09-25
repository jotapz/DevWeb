
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const resultContainer = document.getElementById('resultContainer');
const messageContainer = document.getElementById('messageContainer');
const audioPlayer = document.getElementById('audioPlayer');

searchButton.addEventListener('click', buscarPalavra);
searchInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        buscarPalavra();
    }
});

async function buscarPalavra() {
    const palavra = searchInput.value.trim();

    resultContainer.innerHTML = '';
    messageContainer.innerHTML = '';

    if (palavra === '') {
        messageContainer.textContent = 'Por favor, digite uma palavra.';
        return;
    }

    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${palavra}`;

    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error('Palavra não encontrada.');
        }

        const data = await response.json();
        exibirDefinicao(data[0]); 

    } catch (error) {
        console.error('Erro:', error);
        messageContainer.textContent = error.message || 'Não foi possível buscar a palavra. Tente novamente.';
    }
}


function exibirDefinicao(dadosPalavra) {
    
    const header = document.createElement('div');
    header.classList.add('word-header');

    const phonetic = dadosPalavra.phonetic || '';
    
    
    let audioSrc = '';
    for(const p of dadosPalavra.phonetics) {
        if(p.audio) {
            audioSrc = p.audio;
            break; 
        }
    }

    header.innerHTML = `
        <div>
            <h2>${dadosPalavra.word}</h2>
            <p>${phonetic}</p>
        </div>
        ${audioSrc ? `<button class="audio-button" onclick="tocarAudio('${audioSrc}')">▶</button>` : ''}
    `;
    resultContainer.appendChild(header);

    
    dadosPalavra.meanings.forEach(significado => {
        const meaningDiv = document.createElement('div');
        meaningDiv.classList.add('meaning');
        
        
        meaningDiv.innerHTML = `<h3>${significado.partOfSpeech}</h3>`;

        const definitionsList = document.createElement('ul');
        
        
        significado.definitions.forEach(def => {
            const listItem = document.createElement('li');
            listItem.textContent = def.definition;

            
            if (def.example) {
                const exampleSpan = document.createElement('span');
                exampleSpan.classList.add('example');
                exampleSpan.textContent = `Ex: "${def.example}"`;
                listItem.appendChild(exampleSpan);
            }
            definitionsList.appendChild(listItem);
        });

        meaningDiv.appendChild(definitionsList);
        resultContainer.appendChild(meaningDiv);
    });
}

function tocarAudio(src) {
    audioPlayer.src = src;
    audioPlayer.play();
}