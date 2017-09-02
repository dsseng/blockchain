var stringify = require('node-stringify');
var Block = require('./Block')

function createGenesisBlock() {
  return new Block(0, new Date(), "Genesis Block", "0")
}

var blocks = new Array();

blocks.push(createGenesisBlock());
console.log(blocks);

function nextBlock(lastBlock) {
  this_index = lastBlock.index + 1;
  this_timestamp = new Date();
  this_data = "Hey! I'm block " + stringify(this_index);
  this_hash = lastBlock.hash;
  return new Block(this_index, this_timestamp, this_data, this_hash);
}

function addBlock() {
  blocks.push(nextBlock(blocks[blocks.length - 1]))
  return blocks.length - 1;
}

for (var i = 0; i < 10; i++) {
  console.log(addBlock());
}

console.log(blocks);
