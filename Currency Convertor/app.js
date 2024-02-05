// API base URL for currency conversion rates
const BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

// Shortened alias for console.log
const cl = console.log.bind(console);

// DOM elements
const btn = document.querySelector("form button");
const dropdowns = document.querySelectorAll(".dropdown select");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

// Event listener for window load to initiate the exchange rate update
window.addEventListener("load", () => {
  updateExchangeRate();
});

// Populating dropdown options and setting default selections
for (let select of dropdowns) {
  for (currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    if (select.name === "from" && currCode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && currCode === "PKR") {
      newOption.selected = "selected";
    }
    select.appendChild(newOption);
  }

  // Event listener for dropdown change to update flag
  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}

// Function to update flag image based on selected currency
const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/shiny/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};

// Event listener for convert button click to update exchange rate
btn.addEventListener("click", async (evt) => {
  evt.preventDefault();
  updateExchangeRate();
});

// Function to update the exchange rate and display converted amount
const updateExchangeRate = async () => {
  let amount = document.querySelector(".amount input");
  let amountValue = amount.value;

  // Set default value if input is empty or less than 1
  if (amountValue === "" || amountValue < 1) {
    amountValue = 1;
    amount.value = "1";
  }

  // Construct the API URL for fetching the exchange rate
  const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;

  // Fetch exchange rate data
  let response = await fetch(URL);
  let data = await response.json();
  let rate = data[toCurr.value.toLowerCase()];

  // Calculate and display the converted amount
  let finalAmount = amountValue * rate;
  msg.innerText = `${amountValue} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
};
