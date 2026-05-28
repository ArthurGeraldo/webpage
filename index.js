const botao = document.getElementById("botao");

botao.addEventListener("click", async function () {

    const user = document.getElementById("user").value;
    const pass = document.getElementById("pass").value;

    try {
        const resposta = await fetch("https://validationloginpagetest.onrender.com/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user,
                pass
            })
        });
        const dados = await resposta.json();

        if (dados.success) {
            window.location.href = "./index2.html";
        }
        else {
            alert("Login ou senha incorreta");
        }
    }
    catch (erro) {
        alert("Erro ao conectar com o servidor");
        console.error(erro);
    }
});

document.addEventListener("keypress", function(event){

    if(event.key === "Enter"){
        botao.click();
    }
});