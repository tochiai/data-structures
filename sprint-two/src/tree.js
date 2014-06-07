var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  newTree.parent = null;

  _.extend(newTree, treeMethods);

  return newTree;
};




var treeMethods = {};

treeMethods.removeFromParent = function(){
  var parent = this.parent;
  for(var i = 0; i < parent.children.length; i++) {
    if(this.compare(parent.children[i])){
      break;
    }
  }
  parent.children.splice(i, 1);
  this.parent = null;
};

treeMethods.compare = function(tree) {
  if (this.value === tree.value) {
    if (this.children.length !== tree.children.length) {
      return false;
    } else {
      var allSameChildren = true;
      for (var i = 0; i < this.children.length; i++){
        allSameChildren = allSameChildren && tree.children[i].compare(this.children[i]);
      }
      return allSameChildren;
    }
  } else {
    return false;
  }
};

treeMethods.addChild = function(value){
  var child = makeTree(value);
  child.parent = this;
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
