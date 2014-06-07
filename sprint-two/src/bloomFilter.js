var BloomFilter = function(arrayLength){
  this._storage = [];
  for (var i = 0; i < arrayLength; i++){
    this._storage.push(0);
  }
  this._hashArray = [
    getIndexBelowMaxForKey,
    function(str, max) {
      str = str.split('').reverse().join('');
      return getIndexBelowMaxForKey(str, max);
    },
    function(str, max) {
      str += str;
      return getIndexBelowMaxForKey(str, max);
    }
  ];
};

BloomFilter.prototype.add = function(str){
  for (var i = 0; i < this._hashArray.length; i++){
    var index = this._hashArray[i](str, this._storage.length);
    this._storage[index] = 1;
  }
};

BloomFilter.prototype.query = function(str) {
  for (var i = 0; i < this._hashArray.length; i++){
    var index = this._hashArray[i](str, this._storage.length);
    if (this._storage[index] === 0){
      return false;
    }
  }
  return true;
};
