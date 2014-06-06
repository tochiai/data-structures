var Graph = function(){
  this.nodes = {};
  this.edges = {};
  this.size = 0;
};

Graph.prototype.addNode = function(newNode, toNode){
  this.edges[newNode] = {};
  if(this.size === 1) {
    var firstNode = Object.keys(this.nodes)[0];
    this.addEdge(firstNode, newNode);
  }
  this.nodes[newNode] = true;
  this.size++;
  if(toNode) {
    this.addEdge(newNode, toNode);
  }
};

Graph.prototype.contains = function(node){
  return this.nodes[node] || false;
};

Graph.prototype.removeNode = function(node){
  this.size--;
  delete this.nodes[node];
  for(var key in this.nodes) {
    this.removeEdge(node, key);
  }
};

Graph.prototype.getEdge = function(fromNode, toNode){
  return this.edges[fromNode][toNode] || false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.edges[fromNode][toNode] = true;
  this.edges[toNode][fromNode] = true;
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  delete this.edges[fromNode][toNode];
  delete this.edges[toNode][fromNode];
  for(var key in this.nodes) {
    if(Object.keys(this.edges[key]).length === 0) {
      delete this.nodes[key];
      delete this.edges[key];
    }
  }
};
Graph.prototype.forEachNode = function(callback) {
  for (var key in this.nodes) {
    callback(key);
  }
}

/*
 * Complexity: What is the time complexity of the above functions?
 */
