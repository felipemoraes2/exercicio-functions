let spaceShipName = prompt("Digite o nome da nave: ")

let spaceshipVelocity = 0

let chosenOption

function openMenu() {
    let option
    while (option != "1" && option != "2" && option != "3" && option != "4") {
        option = prompt("Selecione uma das opções\n" +
            "1 - Acelerar a nave em 5km/s\n" +
            "2 - Desacelerar em 5km/s\n" +
            "3 - Imprimir dados de bordo\n" +
            "4 - Sair")
    }
    return option
}

function speedUp(velocity) {
    let newVelocity = velocity + 5
    return newVelocity
}

function slowDown(velocity) {
    let newVelocity = velocity - 5
    if (newVelocity < 0) {
        newVelocity = 0
    }
    return newVelocity
}

function showData(spaceShipName, velocity) {
    alert("Espaçonave: " + spaceShipName + "\nVelocidade: " + velocity + " km/s")
}

do {
    chosenOption = openMenu()
    switch (chosenOption) {
        case "1":
            spaceshipVelocity = speedUp(spaceshipVelocity)
            break
        case "2":
            spaceshipVelocity = slowDown(spaceshipVelocity)
            break
        case "3":
            showData(spaceShipName, spaceshipVelocity)
            break
        default:
            alert("Encerrando programa...")
    }
} while (chosenOption != "4") {

}