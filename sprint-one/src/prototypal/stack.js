var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  return someInstance;
};

var stackMethods = {};
stackMethods.size = function() {
  return this.sizeVal;
};
stackMethods.pop = function(){
  if (this.size() > 0) {
    this.sizeVal--;
  }
  var result = this.storage[this.sizeVal];
  delete this.storage[this.sizeVal];
  return result;
};
stackMethods.push = function(val) {
  this.storage[this.sizeVal] = val;
  this.sizeVal++;
};
stackMethods.sizeVal = 0;
stackMethods.storage = {};

