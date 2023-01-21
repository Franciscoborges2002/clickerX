let balanceDisplay = document.getElementById("balanceDisplay");

const clickPowerPrices = [{1: 50}, {5: 1000}]//Array for the prices of the clickpower
const autoPrices = [{1: 1500}, {5: 5000}]//Array for the prices of the clickpower
var balance = 0;//Change when we add the browser load
var clickPower = 1;
var auto = 0;

function addToBalance(){
    balance += clickPower;
}

/* UPGRADE PART */

//In the future verify from which button the request is comming from and verify if isnt cheating
function upgradeClick(index, value2Upgrade){
    console.log(balance, value2Upgrade, clickPowerPrices)
    if(balance < clickPowerPrices[index][value2Upgrade]){//Verify if has balance
        alert("Not enough balance");
    }else{
        clickPower += value2Upgrade;//Add to the clickPower
        balance -= clickPowerPrices[index][value2Upgrade];//Remove value from balance
        clickPowerPrices[index][value2Upgrade] = clickPowerPrices[index][value2Upgrade] * 1.3;//Update value
    }

    updateDiplayClickerCostsClick(index, value2Upgrade);//Update costs display
}

//In the future verify from whici button the request is comming from and verify if isnt cheating
function upgradeAuto(index, value2Upgrade){
    console.log(balance, value2Upgrade, autoPrices)
    if(balance < autoPrices[index][value2Upgrade]){//Verify if has balance
        alert("Not enough balance");
    }else{
        auto += value2Upgrade;//Add to the clickPower
        balance -= autoPrices[index][value2Upgrade];//Remove value from balance
        autoPrices[index][value2Upgrade] = autoPrices[index][value2Upgrade] * 1.3;//Update value
    }

    updateDiplayAutoCostsClick(index, value2Upgrade);//Update costs display
}

/*ADD TO AUTO BALANCE*/
setInterval(() =>{
    balance += auto;
}, 1000);

/*UPDATE PART*/

//Update the display
setInterval(() =>{
    document.getElementById("balanceDisplay").innerHTML = Number(balance).toFixed(2);
}, 100);

function updateDiplayClickerCostsClick(updateNumber, value2Upgrade){
    switch (updateNumber) {
        case 0:
            document.getElementById("clickUpgradeCost1").innerHTML =  "Cost " + Number(clickPowerPrices[updateNumber][value2Upgrade]).toFixed(2);
            break;
        case 1:
            document.getElementById("clickUpgradeCost2").innerHTML =  "Cost " + Number(clickPowerPrices[updateNumber][value2Upgrade]).toFixed(2);
            break;
        default:
            break;
    }
}

function updateDiplayAutoCostsClick(updateNumber, value2Upgrade){
    switch (updateNumber) {
        case 0:
            document.getElementById("autoUpgradeCost1").innerHTML =  "Cost " + Number(autoPrices[updateNumber][value2Upgrade]).toFixed(2);
            break;
        case 1:
            document.getElementById("autoUpgradeCost2").innerHTML =  "Cost " + Number(autoPrices[updateNumber][value2Upgrade]).toFixed(2);
            break;
        default:
            break;
    }
}