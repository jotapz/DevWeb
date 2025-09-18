document.addEventListener("DOMContentLoaded", function () {
    loadMusics(); 
});

let musicNameInput = document.getElementById("musicNameInput"); 
let artistImageInput = document.getElementById("artistImageInput"); 

function addMusic() { 
    let musicText = musicNameInput.value.trim();
    let imageUrl = artistImageInput.value.trim();

    if (musicText === "") {
        alert("Por favor, digite o nome da música e artista!");
        return;
    }

    let musicList = document.getElementById("musicList"); 
    let li = document.createElement("li");

    li.innerHTML = `
        ${imageUrl ? `<img src="${imageUrl}" alt="Foto do Artista" class="artist-img">` : ''}
        <div class="music-details">
            <span onclick="toggleMusic(this)">${musicText}</span>
        </div>
        <button class="delete-btn" onclick="deleteMusic(this)">X</button>
    `;

    musicList.appendChild(li);
    saveMusics();
    musicNameInput.value = "";
    artistImageInput.value = ""; 
}


musicNameInput.addEventListener("keypress", (event)=> {
    if (event.key === "Enter")
        addMusic();
});

artistImageInput.addEventListener("keypress", (event)=> {
    if (event.key === "Enter")
        addMusic();
});


function toggleMusic(element) { 
    
    element.closest('li').classList.toggle("completed"); 
    saveMusics(); 
}

function deleteMusic(button) { 
    button.parentElement.remove();
    saveMusics(); 
}

function saveMusics() { 
    let musics = [];
    document.querySelectorAll("#musicList li").forEach(musicItem => { 
        const musicSpan = musicItem.querySelector(".music-details span");
        const imgElement = musicItem.querySelector(".artist-img");
        
        musics.push({ 
            text: musicSpan.innerText.trim(), 
            imageUrl: imgElement ? imgElement.src : '', 
            completed: musicItem.classList.contains("completed") 
        });
    });
    localStorage.setItem("minhasMusicas", JSON.stringify(musics)); 
}

function loadMusics() {
    let musics = JSON.parse(localStorage.getItem("minhasMusicas")) || []; 
    let musicList = document.getElementById("musicList"); 

    musics.forEach(music => {
        let li = document.createElement("li");
        li.innerHTML = `
            ${music.imageUrl ? `<img src="${music.imageUrl}" alt="Foto do Artista" class="artist-img">` : ''}
            <div class="music-details">
                <span onclick="toggleMusic(this)">${music.text}</span>
            </div>
            <button class="delete-btn" onclick="deleteMusic(this)">X</button>
        `;
        if (music.completed) {
            li.classList.add("completed");
        }
        musicList.appendChild(li);
    });
}