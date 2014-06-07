var HashTable = function(limit){
  this._limit = limit || 8;
  this._size = 0;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  this._size++;
  var hashVal = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(hashVal);
  if(bucket === undefined) {
    bucket = [[k, v]];
  } else {
    var foundKey = false;
    for(var i = 0; i < bucket.length; i++) {
      if(bucket[i][0] === k) {
        bucket[i][1] = v;
        foundKey = true;
      }
    }
    if(!foundKey) {
      bucket.push([k, v]);
    }
  }
  this._storage.set(hashVal, bucket);
  if(this._size / this._limit > 0.75) {
    var bigTable = new HashTable(this._limit*2);
    this._walkTable(function(value, key) {
      bigTable.insert(key, value);
    });
    this._storage = bigTable._storage;
    this._size = bigTable._size;
    this._limit = bigTable._limit;
  }
};

HashTable.prototype.retrieve = function(k){
  var hashVal = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(hashVal) === undefined){
    return null;
  } else {
    var bucket = this._storage.get(hashVal);
    for(var i = 0; i < bucket.length; i++) {
      if(bucket[i][0] === k) {
        return bucket[i][1];
      }
    }
    return null;
  }
};

HashTable.prototype.remove = function(k){
  this._size -= 2;
  this.insert(k, null);
  if(this._size / this._limit < 0.25) {
    var smallTable = new HashTable(this._limit/2);
    this._walkTable(function(value, key) {
      smallTable.insert(key, value);
    });
    this._storage = smallTable._storage;
    this._size = smallTable._size;
    this._limit = smallTable._limit;
  }
};

HashTable.prototype._walkTable = function(callback){
  this._storage.each(function(bucket) {
    if(bucket) {
      for(var i = 0; i < bucket.length; i++) {
        if(bucket[i][1] !== null) {
          callback(bucket[i][1], bucket[i][0]);
        }
      }
    }
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
