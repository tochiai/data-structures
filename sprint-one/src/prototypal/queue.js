var makeQueue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  return someInstance;
};

var queueMethods = {};
queueMethods.size = function(){
  return this.end - this.start;
};
queueMethods.enqueue = function(val) {
  this.storage[this.end] = val;
  this.end++;
};
queueMethods.dequeue = function() {
  if (this.size() > 0) {
    var result = this.storage[this.start];
    delete this.storage[this.start];
    this.start++;
    return result;
  }
};
queueMethods.start = 0;
queueMethods.end = 0;
queueMethods.storage = {};

