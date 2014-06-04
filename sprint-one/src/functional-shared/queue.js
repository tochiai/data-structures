var makeQueue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.start = 0;
  someInstance.end = 0;
  return _.extend(someInstance, queueMethods);
};

var queueMethods = {};
queueMethods.size = function(){
  return this.end - this.start;
};
queueMethods.enqueue = function(val){
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


