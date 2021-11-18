document.addEventListener("click", function (e) {
    if (e.target.classList.contains("imagen")) {
        const src = e.target.getAttribute("src");
        document.querySelector(".imgModal").src = src;
        const myModal = new bootstrap.Modal(document.getElementById('trabajosModal'));
        myModal.show();
    }
})

var cards = document.querySelectorAll('.perfil_flip');
for(let i = 0; i < cards.length; i++){
  cards[i].addEventListener( 'click', function() {
  cards[i].classList.toggle('is-flipped');
});
}