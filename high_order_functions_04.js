'use strict';
const movements = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

function filtered(movements) {
  let newArray = movements.filter(e => e[0]>=0 && e[1]>=0);
  return newArray;
}
//Filtered Answer:
console.log(filtered(movements));

function mapped(movements) {
  let newArray = movements.map(e => Math.abs(e[0]) + Math.abs(e[1]));
  return newArray;
}
//Mapped Answer:
console.log(mapped(movements));


function forEached(movements) {
  let newArray = [];
  movements.forEach(function (e) {
      let tempArray = Math.abs(e[0]) + Math.abs(e[1]);
    newArray.push(tempArray);
  )};
  return newArray;
}

//For Each Answer:
console.log(forEached(movements));
