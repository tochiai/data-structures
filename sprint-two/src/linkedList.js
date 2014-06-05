var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var node = makeNode(value);
    if(list.tail !== null) {
      list.tail.next = node;
    }
    if(list.head === null) {
      list.head = node;
    }
    list.tail = node;
  };

  list.removeHead = function(){
    var result = list.head;
    if(list.head !== null) {
      list.head = list.head.next;
    }
    return result.value;
  };

  list.contains = function(target){
    var walkList = function(node) {
      if(node === null) {
        return false;
      } else if(node.value === target) {
        return true;
      } else {
        return walkList(node.next);
      }
    };
    return walkList(list.head);
  };

  return list;
};

var makeNode = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
