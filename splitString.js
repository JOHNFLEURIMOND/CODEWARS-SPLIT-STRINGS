function solution(str) {
  var array = str.split("");
  var collector = [];
  var result = [];
  for (var i = 0; i < array.length; i = i + 2) {
    var pair = [];
    pair.push(array[i], array[i + 1])
    collector.push(pair)
  }
  for (var i = 0; i < collector.length; i++) {
    var pairString = ""
    pairString = collector[i].join("")
    result.push(pairString)
  }
  if (result[result.length - 1].length % 2 !== 0) {
    result[result.length - 1] += "_"
  }
  return result;
}




Created by @fleurimond_john