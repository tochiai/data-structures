var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i) || {};
  bucket[k] = v;
  this._storage.set(i, bucket);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(i) === undefined){
    return null;
  } else {
    return this._storage.get(i)[k];
  }
};

HashTable.prototype.remove = function(k){
  this.insert(k, null);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
