/**
 *   ____      _       _                    
 *  / ___|___ (_)_ __ | |__   __ _ ___  ___ 
 * | |   / _ \| | '_ \| '_ \ / _` / __|/ _ \
 * | |__| (_) | | | | | |_) | (_| \__ \  __/
 *  \____\___/|_|_| |_|_.__/ \__,_|___/\___|
 *  ...for Google Sheets!
 *
 * This script is meant to fetch a quote from Coinbase and update a cell.
 * You can also use the menu to view a current quote in between the one-minute updates.
 *
 * USAGE:
 * Enter a function as you would with =SUM() or any other, selecting from:
 * - BTC
 * - ETH
 * - LTC
 *
 * For example, if you would like a current quote for Bitcoin to appear in cell B52, edit
 * that cell and insert:
 * 
 * =BTC()
 * 
 * This will return a floating point number which you can style with the currency formatting.
 * All currencies returned are in USD ($) and are reported by the Coinbase API. USE AT YOUR
 * OWN RISK! I am not liable or responsible for the accuracy, availability, or consequences
 * of your usage of this app.
 *
 * @author  David Christian Liedle <david.liedle@gmail.com>
 * @link    https://davidcanhelp.me/
 * @license MIT
 */

function getBitcoinQuote() {
  
  console.log("Running getBitcoinQuote()");
  endpoint = "https://api.coinbase.com/v2/prices/BTC-USD/spot";
  response = JSON.parse(UrlFetchApp.fetch(endpoint) );
  amount = response.data.amount;
  
  console.log(amount);
  
  return amount;
  
} // End of function getBitcoinQuote()

function getEthereumQuote() {
  
  console.log("Running getEthereumQuote()");
  endpoint = "https://api.coinbase.com/v2/prices/ETH-USD/spot";
  response = JSON.parse(UrlFetchApp.fetch(endpoint) );
  amount = response.data.amount;
  
  console.log(amount);
  
  return amount;
  
} // End of function getEthereumQuote()

function getLitecoinQuote() {
  
  console.log("Running getLitecoinQuote()");
  endpoint = "https://api.coinbase.com/v2/prices/LTC-USD/spot";
  response = JSON.parse(UrlFetchApp.fetch(endpoint) );
  amount = response.data.amount;
  
  console.log(amount);
  
  return amount;
  
} // End of function getLitecoinQuote()

function getBTC(){
  Browser.msgBox("Bitcoin", "Current USD Value of Bitcoin: $"+getBitcoinQuote().toString(), Browser.Buttons.OK);
}
function getETH(){
  Browser.msgBox("Ethereum", "Current USD Value of Ethereum: $"+getEthereumQuote().toString(), Browser.Buttons.OK);
}
function getLTC(){
  Browser.msgBox("Litecoin", "Current USD Value of Litecoin: $"+getLitecoinQuote().toString(), Browser.Buttons.OK);
}

function BTC(){
  return getBitcoinQuote() * 1.0;
}
function ETH(){
  return getEthereumQuote() * 1.0;
}
function LTC(){
  return getLitecoinQuote() * 1.0;
}

function onOpen(){
  var spreadsheet = SpreadsheetApp.getActive();
  menuItems = [
    {name: "Show Current BTC Quote", functionName: "getBTC"},
    {name: "Show Current ETH Quote", functionName: "getETH"},
    {name: "Show Current LTC Quote", functionName: "getLTC"}
  ];
  spreadsheet.addMenu("Coinbase", menuItems);
}
