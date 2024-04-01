let Times = []

function AdicionarTime() {
    let nomeTime = document.getElementById("nomeTime").value.trim()
    if(nomeTime !== ""){
        Times.push(nomeTime);
        document.getElementById("outTime").innerText = "Adicionado!"
    }  else {
        document.getElementById("outTime").innerText = "Não pode está vazio!"
    }
}

function listarTimes() {
    let outTime = "Lista de Times:\n"
    if(Times.length > 0) {
        Times.forEach((time, index ) => {
            outTime += `${index + 1}. ${time}\n`
        })
    } else {
        outTime += "Nenhum  time adicionado!"
    }
    document.getElementById("outTime").innerText = outTime
}

function montarTabela() {
    if (Times.length % 2 !== 0) {
        document.getElementById("outTime").innerText = "número de times insuficiente!"
    }else{
        let tabela = "Tabela de jogos:\n"
        for (let i = 0; i < Times.length/2; i++)
        tabela += `Nenhuma time na Tabela`
    }
    document.getElementById("outTime").innerText = tabela
}