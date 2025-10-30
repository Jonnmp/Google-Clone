function advancedSearch(event) {
    event.preventDefault();
    var allWords = document.getElementById("as_q").value;
    var exactPhrase = document.getElementById("as_epq").value;
    var anyWords = document.getElementById("as_oq").value;
    var excludeWords = document.getElementById("as_eq").value;

    if (allWords || exactPhrase || anyWords) {

        var url = "https://www.google.com/search?";
        var params = [];
        
        if (allWords) {
            params.push("as_q=" + encodeURIComponent(allWords));
        }
    
        if (exactPhrase) {
            params.push("as_epq=" + encodeURIComponent(exactPhrase));
        }
    
        if (anyWords) {
            params.push("as_oq=" + encodeURIComponent(anyWords));
        }
    
        if (excludeWords) {
            params.push("as_eq=" + encodeURIComponent(excludeWords));
        }
    
        url += params.join("&");
        window.location.href = url;

    } else {
        alert("Por favor, ingrese al menos un término de búsqueda.");
    }
    
    
}

var advancedForm = document.querySelector('#Busqueda_Avanzada');
if (advancedForm) {
    advancedForm.addEventListener('submit', advancedSearch);
}

function luckySearch(event) {
    event.preventDefault();
    var query = document.getElementById("Search-Input").value;
    if (query) {
        window.location.href = "https://www.google.com/search?q=" + encodeURIComponent(query);
    }
}

var luckyButton = document.querySelector('.lucky-button');
if (luckyButton) {
    luckyButton.addEventListener('click', luckySearch);
}