var nomeGlobal;
var mensagemGlobal;
var dateGlobal;
var checked = false;
var darkMode = false;

function conferirMensagemWhatsApp() {
    var nome = document.getElementById("nome").value;
    var mensagem = document.getElementById("mensagem").value;
    var date = new Date();

    if(nome.trim().length < 1 || mensagem.trim().length < 1) {
        alert("Por favor preencha os campos.");
        return;
    }

    nomeGlobal = nome;
    mensagemGlobal = mensagem;
    dateGlobal = date;

    dateGlobal = formatDate(dateGlobal);

    document.getElementById("confNome").textContent = nome;
    document.getElementById("confMsg").textContent = mensagem;
    document.getElementById("confDate").textContent = date;

    checked = true;

    if (checked == true) {
        var infoDiv = document.getElementById("info");
        btnSend = document.getElementById("btnSend");
        infoDiv.style.display = "block";
        btnSend.style.display = "block";
    }
}

function formatDate(date) {
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var minute = date.getMinutes();

    return [
        [
            (hour > 9 ? '' : '0') + hour,
            (minute > 9 ? '' : '0') + minute
        ].join(':'),
            (day > 9 ? '' : '0') + day,
        (month > 9 ? '' : '0') + month,
        date.getFullYear(),
    ].join('-');
}

function enviar() {
    var numeroTelefone = "5541999999999";

    var linkWhatsApp =
        "https://wa.me/" +
        numeroTelefone +
        "?text=NOME DO RECEPTOR(A): " +
        nomeGlobal +
        " - " +
        mensagemGlobal +
        " - " +
        dateGlobal;

    window.open(linkWhatsApp);
    checked = false;
    window.location.reload();
}

function setDarkMode() {

    darkMode = !darkMode;

    body = document.getElementById("body");
    navbar = document.getElementById("navbar");
    card = document.getElementById("card");
    icon = document.getElementById("moonIcon")

    if(darkMode == true) {
        body.style.background = "black";
        navbar.setAttribute('class', 'navbar navbar-dark bg-dark');
        card.setAttribute('class', 'card text-bg-dark');
        icon.style.color = "white";
    }

    else {
        body.style.background = "white";
        navbar.setAttribute('class', 'navbar navbar-light bg-light');
        card.setAttribute('class', 'card');
        icon.style.color = "black";
    }
}
