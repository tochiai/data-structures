describe('bloomFilter', function() {
 var bloomFilter;

  beforeEach(function() {
    bloomFilter = new BloomFilter(18);
  });

  it('should have methods "add" and "query"', function(){
    expect(bloomFilter.add).to.be.a("function");
    expect(bloomFilter.query).to.be.a("function");
  });

  it('should add something and verify that its in the set', function(){
    bloomFilter.add("foo");
    expect(bloomFilter.query("foo")).to.equal(true);
    expect(bloomFilter.query("bar")).to.equal(false);
  });

});
