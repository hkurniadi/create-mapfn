var words = ["ground", "control", "to", "major", "tom"];
//console.log(words);

function myMap(arr, callback) {
  //console.log(arr);
  var retArray = [];
  for (var i = 0; i < arr.length; i++) {
    var itemInArr = arr[i];
    //console.log(itemInArr);
    //console.log(retArray[i]);
    retArray.push(callback(itemInArr));
  }
  console.log(retArray);
}

function plusY(word) {
  return (word + "y");
}

function wordLength(word) {
  return word.length;
}

myMap(words, wordLength);