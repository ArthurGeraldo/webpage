const botao = document.getElementById("botao");

botao.addEventListener("click", function () {

    const usuario = document.getElementById("user").value;
    const senha = document.getElementById("pass").value;

    if (usuario === "ash" && senha === "ash") {

        window.location.href = "https://i.pinimg.com/736x/8d/36/b8/8d36b87c0c2ac5af274647a06484a45f.jpg"; /*teste*/

    } else {

        alert("Usuário ou senha incorretos.");

    }
});