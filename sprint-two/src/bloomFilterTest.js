var getIndexBelowMaxForKey = function(str, max){
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash<<5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

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

var blooms = [
  new BloomFilter(1000),
  new BloomFilter(10000),
  new BloomFilter(100000),
  new BloomFilter(1000000)
];

var inFilter = [];
var outFilter = [];

for (var i = 0; i < 100000; i++){
  var value = Math.random().toString();
  inFilter.push(value);
  outFilter.push(Math.random().toString());

  for (var j = 0; j < blooms.length; j++){
    blooms[j].add(value);
  }
}

var falsePositives = [0, 0, 0, 0];
var falseNegatives = [0, 0, 0, 0];

for (var i = 0; i < outFilter.length; i++){
  for (var j = 0; j < blooms.length; j++){
    if(blooms[j].query(outFilter[i])){
      falsePositives[j]++;
    }
    if(!blooms[j].query(inFilter[i])){
      falseNegatives[j]++;
    }
  }
}

console.log(falsePositives);
console.log(falseNegatives);
