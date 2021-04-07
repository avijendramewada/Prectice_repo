// const moths = ["jan", 'feb', 'mar', 'apr'];
// const newadd = moths.splice(moths.length, 2, "may");
// console.log(moths);
//array.length property return the total number of element

//////////////////update the array element
// const moths = ["jan", 'feb', 'mar', 'apr'];
// const indexofmonth = moths.indexOf('mar');
// console.log(indexofmonth);
//if the data is search than return the element position otherwise return -1
// if (indexofmonth != -1) {
//  const updatemonth = moths.splice(indexofmonth,1,"March");
// console.log(moths);   

// } else {
//     console.log("value not found");
// }
//////////////////////delete the array element
// const moths = ["jan", 'feb', 'mar', 'apr'];
// const indexofmonth = moths.indexOf('mar');
// console.log(indexofmonth);
// if (indexofmonth != -1) {
//     const updatemonth = moths.splice(indexofmonth, 1);
//     console.log(updatemonth);
// console.log(moths);   

// } else {
//     console.log("value not found");
// }


//---------------------- map  and reduce method-------------
//map method retuen true or false 
// const Array1 = [1, 5, 9, 13, 25];
// let newarray = Array1.map((currElement, index, arry) => {
//     return currElement > 9;

// })
//  console.log(Array1);
// console.log(newarray);
//     //filter method return the real value if the present
// const Array2 = [1, 5, 9, 13, 25];
// let newarr = Array2.filter((currEle, index, arr) => {
//     return currEle;

// })
// console.log(Array2);
//     console.log();
let a = 14;
let b = 10;
    [a, b] = [b, a];
console.log(`${a} and ${b}`);