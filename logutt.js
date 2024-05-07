$(document).ready(function () {
    // Function to handle logout
    function logout() {
      // Tässä voit toteuttaa kirjautumisen ulos
      // Esimerkiksi lähettämällä pyynnön palvelimelle kirjautumisen ulos käsittelemiseksi
      // tai poistamalla paikallisesti tallennetut kirjautumistiedot
      alert("Kirjauduttu ulos"); // Esimerkki ilmoitus
      // Voit ohjata käyttäjän esimerkiksi kirjautumissivulle
      // window.location.href = "kirjautumissivu.html";
    }
  
    // Lisää tapahtumankäsittelijä napille
    $("#logoutButton").click(function () {
      logout();
      window.location.href = 'index.html';
    });
  });
  