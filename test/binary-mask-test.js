var expect = require("chai").expect;
var bitmask = require("../binary-mask");

describe("Smaller first array", function() {
  it("final array is the size of the second array", function() {
    var mask = bitmask([1, 2, 3], ["2", 2, "Test", 12, -1])

    expect(mask.length).to.equal(5);
    expect(mask).to.eql([1, 0, 1, 1, 1]);
  });
});

describe("Smaller second array", function() {
  it("final array is the size of the first array", function() {
    var mask = bitmask([undefined, 2, -1, 4, 5], ["2", 2, -1])

    expect(mask.length).to.equal(5);
    expect(mask).to.eql([1, 0, 0, 1, 1]);
  });
});

describe("Unknown types", function() {
  it("shouldn't effect the comparison", function() {
    var mask = bitmask([undefined, NaN, 1, null, 5], [NaN, null, 1, undefined, 5])

    expect(mask.length).to.equal(5);
    expect(mask).to.eql([1, 1, 0, 1, 0]);
  });

  it("arrays should be compared as well", function() {
    var mask = bitmask([undefined, [], 1], [NaN, [1], 5])

    expect(mask.length).to.equal(3);
    expect(mask).to.eql([1, 1, 1]);
  });
});

describe("Standard case", function() {
  it("should compare each element based on value and type", function() {
    var mask = bitmask([1, 2, 3], [1, 2, "3"])

    expect(mask.length).to.equal(3);
    expect(mask).to.eql([0, 0, 1]);
  });
});
