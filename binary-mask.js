module.exports = (first, second) => {
  if (!first) {
    first = [];
  }
  if (!second) {
    second = [];
  }

  var max = Math.max(first.length, second.length);

  var final = [];
  for (var i = 0; i < max; i++) {
    final.push(Number(first[i] != second[i] || typeof first[i] !== typeof second[i]));
  }
  return final;
}
