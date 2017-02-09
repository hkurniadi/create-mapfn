//My own .map() function, takes in two arguments, an array and a callback function
function myMap(arr, callback) {
  var retArray = [];

  //TRADITIONAL FOR LOOP
  // for (var i = 0; i < arr.length; i++) {
  //   var itemInArr = arr[i];
  //   retArray.push(callback(itemInArr));
  // }

  //FOR EACH VERSION
  arr.forEach(function(arrElem) {
    retArray.push(callback(arrElem));
  })

  return retArray;
}

/*Testing Codes

var words = ["ground", "control", "to", "major", "tom"];

function plusY(word) {
  return (word + "y");
}

function wordLength(word) {
  return word.length;
}

console.log(myMap(words, wordLength));

*/