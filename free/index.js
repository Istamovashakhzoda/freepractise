// "use script"

// const user = {
//   fName:"Shakhzoda",
//   login : "@gmail.com",
//   pass:"57163204Mu"
// };

// const amin = {
//   fName:"admin",
//   login : "@admin.com",
//   pass:"admin"
// }

// const costumer = {
//   fName:"costumer",
//   login : "@admin.com",
//   pass:"costumer"
// }

// const arr = [amin,costumer,user];

// for(let  i = 0; i < arr.length; i ++){
//   //console.log(arr[i].pass);

//   if(arr[i].costumer =="user"){
//     ///console.log(arr[i]);
//   }
// }

// let args = process.argv.slice(2);
// index = 0;
// while(index<args.length){
//     console.log(args[index]);
//     index ++;
// }

function my_average_mark(param_1) {
  let total = 0
  for (let i= 0; i < param_1.length; i++) {
      total += param_1[i].integer
  }
  let result = total / (param_1.length || 1)
  return result.toFixed(1)
};