const botao = document.getElementById("botao");

botao.addEventListener("click", function () {

    const user = document.getElementById("user").value;
    const pass = document.getElementById("pass").value;

    if (user === "ashen" && pass === "123") {

        window.location.href = "./index2.html";

    }
    else {
        alert("Login ou senha incorreta");
        location.reload();
    }
});
document.addEventListener("keypress", function(event){

    if(event.key === "Enter"){
        botao.click();
    }

});