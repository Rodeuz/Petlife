var duvidas = document.querySelectorAll(".duvida");

duvidas.forEach(function (duvida) {
  duvida.addEventListener("click", function () {
    duvida.classList.toggle("ativa");
  });
});
