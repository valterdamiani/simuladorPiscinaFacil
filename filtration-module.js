var filtrate;
var waste;
var rinse;
var recirculate;
var closed;
var backwash;

var suctionRegister;
var returnRegister;
var drainBottom;
var sewerRegister;
var skimmerRegister;

var suctionRegisterClicked;
var returnRegisterClicked;
var drainBottomCliked;
var sewerRegisterCliked;
var skimmerRegisterCliked;
var isFiltrate;
var isWaste;
var isRinse;
var isRecirculate
var isClosed;
var isBackwash

function openSuctionRegister(suctionRegister) {
    suctionRegister = "open";
    suctionRegisterClicked = suctionRegister;
    alert("Uma criança se afogou ao prender o cabelo no bocal de sucção que você deixou aberto!");
    window.location.reload();
}

function openReturnRegister(returnRegister) {
    returnRegister = "open"
    returnRegisterClicked = returnRegister;
    console.log(returnRegister)
    console.log(returnRegisterClicked)

}

function openDrainBottom(drainBottom) {
    drainBottom = "open";
    drainBottomCliked = drainBottom;

}

function openSewerRegister(sewerRegister) {
    sewerRegister = "open";
    sewerRegisterCliked = sewerRegister
    alert("Você deixou o registro de esgoto aberto, e após sua saída uma folga na manopla do filtro resultou na perda grande parte da agua da piscina")
    window.location.reload();
}

function openSkimmerRegister(skimmerRegister) {
    skimmerRegister = "open";
    skimmerRegisterCliked = skimmerRegister;
}

function filtrateClicked(filtrate) {
    filtrate = "open";
    isFiltrate = filtrate;
    isBackwash = "closed";
    isWaste = "closed";
    isRecirculate = "closed"
    isClosed = "closed"
    isRinse = "closed"
}

function wasteClicked(waste) {
    waste = "open";
    isWaste = waste;
}

function rinseClicked(rinse) {
    rinse = "open";
    isRinse = rinse;
}

function recirculateClicked(recirculate) {
    recirculate = "open";
    isRecirculate = recirculate;
}

function backwashClicked(backwash) {
    backwash = "open";
    isBackwash = backwash;
}

function closedClicked(closed) {
    closed = "selected";
    isClosed = closed
}

function pumpOn() {
    console.log(filtrate)
    console.log(isFiltrate)
    console.log(waste)
    console.log(isWaste)
    if (suctionRegister == "open") {
        alert("Uma criança se afogou ao prender o cabelo no bocal de sucção que você deixou aberto!")
    } else if (returnRegisterClicked == undefined) {
        alert("Você deixou o retorno fechado, isso danificou a bomba, o filtro e a tubulação!")
    } else if (drainBottomCliked == undefined) {
        alert("Você deixou o dreno de fundo fechado, isso danificou a bomba!")
    } else if (sewerRegisterCliked == "open") {
        alert("Você deixou o registro de esgoto aberto, e após sua saída uma folga na manopla do filtro resultou na perda grande parte da agua da piscina")
    } else if (skimmerRegisterCliked == undefined) {
        alert("Você não capturou a sujeira superficial por deixar a coadeira fechada, sua piscina continua suja")
    } else if (isWaste == "open") {
        alert("DRENAR - A manopla do filtro não esta na posição correta, você estragou o corpo da bomba, o cabeçote do filtro e deformou a tubulação devido a alta pressão")
    } else if (isRinse == "open") {
        alert("PRE_FILTRAR - A manopla do filtro não esta na posição correta, você estragou o corpo da bomba, o cabeçote do filtro e deformou a tubulação devido a alta pressão")
    } else if (isRecirculate == "open") {
        alert("RECIRCULAR - A manopla do filtro não esta na posição correta, você não vai filtrar sua piscina")
    } else if (isBackwash == "open") {
        alert("RETROLAVAR - A manopla do filtro não esta na posição correta, você estragou o corpo da bomba, o cabeçote do filtro e deformou a tubulação devido a alta pressão")
    } else if (isClosed == undefined) {
        alert("Você deixou o filtro fechado")
    } else if (isFiltrate == "open") {
        alert("Parabéns você conseguiu")
    }
    window.location.reload()
}