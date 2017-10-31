// Return only names that begin with 'R'
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];
const name = '';
const filteredNames = filter(myNames, function(name) {
  // This is a "predicate function" - it's a function that only returns a boolean
  return name[0] === 'R';
});


console.log(filter(myNames, fn)); // => ['Rich', 'Ray']

// TASK -- DEFINE YOUR FILTER FUNCTION BELOW:
function filter(arr, fn) {
  let newArray = [];
  for (i=0; i<arr.length; i++) {
    if(fn(arr[i])===true) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

function fn(name){
  return name[0] === 'R';
}

// //Bonus below

// filter(arr, fn) => {let newArray = []; for (i=0; i<arr.length; i++) {if(arr[i][0]==='R') {newArray.push(arr[i]);}}};

// // fn(name) => {name[0] === 'R';}
