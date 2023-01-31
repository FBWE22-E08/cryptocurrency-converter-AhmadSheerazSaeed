# Currency converter

Create a currency converter webpage. The page should convert the given currency to the chosen one.

- In the interface already set up in `index.html` the user can select a crypto currency and input the price
- The user will be able to convert the crypto currency into another selected currency e.g. USD/EUR etc
- Don't change the `index.html` file
- Write your code in `index.js` that should display the conversion result to the user when they press the **Convert** button

## Preparation:

- install dependencies: npm i
- run the server with npm run serve

## Instructions on how to use the crypto-currencies API

- use exchange rates API [Cryptocurrencies](https://www.cryptonator.com/api)

example:

to converting 1 btc into usd the API URL would look like this (hard coded):

```js
"https://api.coinconvert.net/convert/btc/usd?amount=1"
```

making a GET request with the previous URL will give you the following response:

```js
{status: 'success', BTC: 1, USD: 22859.58375}
```


![preview](./demo.gif)