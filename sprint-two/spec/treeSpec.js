describe('tree', function() {
  var tree;

  beforeEach(function() {
    tree = makeTree();
  });

  it('should have methods named "addChild", "removeFromParent", "compare", and "contains", and properties named "value" and "parent"', function() {
    expect(tree.addChild).to.be.a("function");
    expect(tree.removeFromParent).to.be.a("function");
    expect(tree.compare).to.be.a("function");
    expect(tree.contains).to.be.a("function");
    expect(tree.hasOwnProperty("value")).to.equal(true);
    expect(tree.hasOwnProperty("parent")).to.equal(true);
  });

  it('should compare trees', function() {
    var tree2 = makeTree();
    tree.addChild(2);
    tree.children[0].addChild(2);
    tree2.addChild(2);
    tree2.children[0].addChild(2);
    expect(tree.compare(tree2)).to.equal(true);
  });

  it('should add children to the tree', function() {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
  });

  it('should add children who reference their parent', function() {
    tree.value = 6;
    tree.addChild(5);
    expect(tree.children[0].parent.value).to.equal(6);
  })

  it("should remove itself from parent's children and remove its parent", function () {
    tree.addChild(5);
    var child = tree.children[0];
    child.removeFromParent();
    expect(tree.children.length).to.equal(0);
    expect(child.parent).to.equal(null);
  })

  it('should return true for a value that the tree contains', function(){
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function(){
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });

  it('should be able to add children to a tree\'s child', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it('should correctly detect nested children', function(){
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });

});
