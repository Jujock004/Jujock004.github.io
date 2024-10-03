document.getElementById("toggleColor").addEventListener("click", function() {
    let body = document.body;
    if (body.style.backgroundColor === "black") {
        body.style.backgroundColor = "#111"; // Noir
        body.style.color = "#fff"; // Blanc
    } else {
        body.style.backgroundColor = "black";
        body.style.color = "#32CD32"; // Vert lime pour le texte
    }
});
