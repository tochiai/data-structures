var makeBinarySearchTree = function(value){
  var tree = {value: value};
  tree.left = null;
  tree.right = null;
  for (var key in binarySearchTreeMethods) {
    tree[key] = binarySearchTreeMethods[key];
  }
  return tree;
};
var binarySearchTreeMethods = {}
binarySearchTreeMethods.insert = function(newValue){
  var newTree = makeBinarySearchTree(newValue);
  if(newValue < this.value) {
    if(this.left === null) {
      this.left = newTree;
    } else {
      this.left.insert(newValue);
    }
  } else {
    if(this.right === null) {
      this.right = newTree;
    } else {
      this.right.insert(newValue);
    }
  }
};
binarySearchTreeMethods.contains = function(target){
  if(this.value === target){
    return true;
  } else if(this.value > target) {
    if(this.left === null) {
      return false;
    } else {
      return this.left.contains(target);
    }
  } else {
    if(this.right === null) {
      return false;
    } else {
      return this.right.contains(target);
    }
  }
};
binarySearchTreeMethods.depthFirstLog = function(callback){
  callback(this.value);
  if(this.left) {
    this.left.depthFirstLog(callback);
  }
  if(this.right) {
    this.right.depthFirstLog(callback);
  }
};
binarySearchTreeMethods.closest = function(target, last) {
  if (last === undefined){
    last = Infinity;
  }
  var lastIsCloser = Math.abs(this.value - target) > Math.abs(last - target);
  if (target === this.value){
    return target;
  } else if (target > this.value){
    if (this.right === null){
      if (lastIsCloser){
        return last;
      } else {
        return this.value;
      }
    } else {
      return this.right.closest(target, this.value);
    }
  } else {
    if (this.left === null){
      if (lastIsCloser) {
        return last;
      } else {
        return this.value;
      }
    } else {
      return this.left.closest(target, this.value);
    }
  }
};

var tree = makeBinarySearchTree(8);
var arr = [8];
for(var i = 0; i < 1000000; i++) {
  var num = Math.floor(Math.random() * 1000000);
  tree.insert(num);
  arr.push(num);
}
var startTime;
var tick = function() {
  startTime = new Date().getTime();
};
var tock = function() {
  console.log(new Date().getTime() - startTime);
};

tick();
console.log(tree.closest(999));
tock();
tick();
var closest = Infinity;
for(var i = 0; i < arr.length; i++) {
  if(Math.abs(closest - 999) > Math.abs(999 - arr[i])) {
    closest = arr[i];
  }
}
console.log(closest);
tock();
