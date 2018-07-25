const fs = require('fs');
const fetch = require('node-fetch');

const coins = [
  'btcusd',
  'eosusd',
  'ethusd',
];
const baseUrl = 'https://api.bitfinex.com/v1/trades/';

const getJson = url => fetch(url).then(res => res.json());

const writeData = (path, content) => new Promise((resolve, reject) => {
  fs.writeFile(path, content, 'utf8', (err) => {
    if (err) reject(err);
    resolve('done');
  });
});

Promise.all(
  coins
    .map(coin => getJson(baseUrl + coin)
      .then(res => writeData(`./coinDatas/${coin}.txt`, JSON.stringify(res)))),
);
