const SHA256 = require('crypto-js/sha256')

class SimpleBlock{

    constructor(index,timestamp, data, precedingHash, hash){
        this.index = index,
        this.timestamp = timestamp,
        this.data = data,
        this.precedingHash = precedingHash,
        this.hash = hash
    }

    computeHash(){
        return SHA256(this.index + this.precedingHash + this.timestamp + JSON.stringify(this.data)).toString();
    }   
    
}