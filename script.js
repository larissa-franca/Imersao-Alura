const searchInput = document.getElementById('search-input');
const resultArtist = document.getElementById('result-artists');
const resultPlaylist = document.getElementById

function requestApi(searchTerm) {
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`
    fetch(url)
        .then((response) => response.json())
        .then((result) => displayResults(result))
}

('result-playlists');
document.addEventListener('input', function() {
    const = searchTerm = searchInput.toLowerCase();
    if (searchTerm === '') {
        resultPlaylist.classList.add('hidden');
        resultArtist.classList.remove('hidden')
        return;
    }
})