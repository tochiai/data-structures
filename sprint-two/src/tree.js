var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];

  _.extend(newTree, treeMethods);

  return newTree;
};




var treeMethods = {};

treeMethods.addChild = function(value){
  var child = makeTree(value);
  this.children.push(child);
};

treeMethods.contains = function(target){
  if (this.value === target) {
    return true;
  } else if (this.children.length === 0) {
    return false;
  } else {
    var result = false;
    for (var i = 0; i < this.children.length; i++){
      if (this.children[i].contains(target)) {
        result = true;
      }
    }
    return result;
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
