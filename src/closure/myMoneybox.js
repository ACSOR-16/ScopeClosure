// function moneyBox(coins) {
//   let saveCoins = 0;
//   saveCoins += coins;
//   console.log(`MoneyBox: ${saveCoins}`);
// }

// moneyBox(10);
// moneyBox(20);

// closure
function moneyBox() {
  let saveCoins = 0;
  function countCoins(coins) {
    saveCoins += coins;
    console.log(`MoneyBox: ${saveCoins}`);
  }
  return countCoins;
}

const myMoneyBox = moneyBox();
myMoneyBox(10);
myMoneyBox(15);

const moneyBoxAdhara = moneyBox();
moneyBoxAdhara(44);
moneyBoxAdhara(50);