var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.sizeVal = 0;
  this.storage = {};
};


Stack.prototype.size = function(){
  return this.sizeVal;
};
Stack.prototype.pop = function(){
  if (this.size() > 0) {
    this.sizeVal--;
  }
  var result = this.storage[this.size()];
  delete this.storage[this.size()];
  return result;
};
Stack.prototype.push = function(val){
  this.storage[this.size()] = val;
  this.sizeVal++;
};
