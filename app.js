//Js File
const Web3 = require('web3');
const web3 = new Web3('https://ropsten.infura.io/v3/c12012704fcd4b3d99a2ad22e40d3325');

const lockButton = document.getElementById("lock");
const releaseButton = document.getElementById("release");

//need this function to be one that submits data to smart contract
function test() {
    console.log('working');
}

lockButton.addEventListener("click", test);
releaseButton.addEventListener("click", test);
//Need to figure out how to get my js file to allow the user to lock funds into my 
//LockRelease contract from a web page
//user should be able to enter an amount and press a button to lock funds on chain
//we will run this testing on ropsten for now
//we will only accept ether for now, but could eventually accept other tokens
//we will only allow the user to click a button to release funds for now
//we will eventually allow for programmatic release of funds
//we will eventually build a nicer UI, maybe even play with react