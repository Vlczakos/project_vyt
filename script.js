function loadPage(url) {
  fetch(url)
    .then(response => response.text())
    .then(html => {
      document.getElementById("content").innerHTML = html;
    })
    .catch(error => {
      document.getElementById("content").innerHTML = "<p>Chyba při načítání stránky.</p>";
      console.error("Chyba:", error);
    });
}

window.addEventListener("DOMContentLoaded", () => {
  loadPage("./subpages/home.html", false);
});