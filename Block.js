const crypto = require('crypto');
var stringify = require('node-stringify');

class Block {
  constructor(_index, _time, _data, _prevHash) {
    this.index = _index;
    this.time = _time;
    this.data = _data;
    this.previousHash = _prevHash;
    this.hash = this.hashBlock()
  }

  hashBlock() {
    return crypto.createHmac('sha256', 'secret')
                   .update(stringify(this.index) +
                           stringify(this.time) +
                           stringify(this.data) +
                           stringify(this.previousHash))
                   .digest('hex');
  }
}

module.exports = Block;
