// import "./css/style.css"; //importing css

//  vara
let cryptoCurrency = "";
let currencyToConvert = "";
let inputAmount = document.querySelector("#inputAmount");

//  crypto currency select
const cryptoDropDown = document.querySelector(".cryptoSelect");

//  converted currency drop down
const convertCurrencyDropDown = document.querySelector(".fiatCurrencySelect");

//  input for converted currency output
const outputTextBox = document.querySelector("#output");

//  button to convert
const convertBtn = document.querySelector(".btn");

//  event listner to crypto drop down
cryptoDropDown.addEventListener("click", (e) => {
  cryptoCurrency = e.target.value;
});

//  event listner to the currency drop down to convert
convertCurrencyDropDown.addEventListener("click", (e) => {
  currencyToConvert = e.target.value;
});

//  event listner to the convert button
convertBtn.addEventListener("click", convertCurrency);

function convertCurrency(e) {
  e.preventDefault();

  if (cryptoDropDown.selectedIndex === 0) {
    alert("PLeaes, Select Crypto Currency");
    cryptoDropDown.focus();
  } else if (Number(inputAmount.value) === 0) {
    alert("Please, Enter the amount to convert");
    inputAmount.focus();
  } else if (convertCurrencyDropDown.selectedIndex === 0) {
    alert("PLeaes, Select Currency");
    convertCurrencyDropDown.focus();
  }

  fetch(
    `https://api.coinconvert.net/convert/${cryptoCurrency}/${currencyToConvert}?amount=${Number(
      inputAmount.value
    )}`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let amountInCaps = currencyToConvert.toUpperCase();

      //   console.log(data[amountInCaps].toFixed(2));
      outputTextBox.value = data[amountInCaps].toFixed(2);
    })
    .catch((err) => {
      console.log("ERROR : ", err.message);
    });
}
