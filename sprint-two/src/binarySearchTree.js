var makeBinarySearchTree = function(value){
  var tree = {value: value};
  tree.left = null;
  tree.right = null;
  _.extend(tree, binarySearchTreeMethods);
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

/*
 * Complexity: What is the time complexity of the above functions?
 */
