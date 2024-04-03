var nomeGlobal;
var mensagemGlobal;
var dateGlobal;
let checked = false;

function conferirMensagemWhatsApp() {
    var nome = document.getElementById("nome").value;
    var mensagem = document.getElementById("mensagem").value;
    var date = new Date();

    console.log(date);

    nomeGlobal = nome;
    mensagemGlobal = mensagem;
    dateGlobal = date;

    date = formatDate(date);

    document.getElementById("confNome").textContent = nome;
    document.getElementById("confMsg").textContent = mensagem;
    document.getElementById("confDate").textContent = date;

    checked = true

    if (checked == true) {
        var infoDiv = document.getElementById("info");
        infoDiv.style.display = "block"
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
}