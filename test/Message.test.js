const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());
const { interface, bytecode } = require('../compile');

let accounts;
let message;

beforeEach(async () => {
  //get accounts
  accounts = await web3.eth.getAccounts()
  //one account to deploy with
  message = await  new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ['hello'] })
    .send({ from: accounts[0], gas: '1000000' })
});

describe('Inbox', () => {
  it('deploys', () => {
    console.log(message);
  });
});
