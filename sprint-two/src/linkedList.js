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
    node.previous = list.tail;
    list.tail = node;
  };

  list.addToHead = function(value){
    var node = makeNode(value);
    if (list.head !== null){
      list.head.previous = node;
    }
    if (list.tail === null){
      list.tail = node;
    }
    node.next = list.head;
    list.head = node;
  };

  list.removeHead = function(){
    var result = list.head || { value: null };
    if(list.head !== null) {
      list.head = list.head.next;
    }
    if(list.head !== null){
      list.head.previous = null;
    }
    return result.value;
  };

  list.removeTail = function(){
    var result = list.tail || { value: null };
    if(list.tail !== null){
      list.tail = list.tail.previous;
    }
    if (list.tail !== null){
      list.tail.next = null;
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
  node.previous = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
