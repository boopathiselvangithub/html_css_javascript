const arr=[5,2,4,6,7];
// const output=arr.map(function square(x){
//     return x*x;
// });
const output1=arr.map((x)=>x.toString(2));
const output2=arr.filter((x)=>x%2);
//filter -used to filter based on condition..
console.log(output1+"\n"+output2);

//reduce...
const output3=arr.reduce(function(acc,curr){
   if(curr%2==0)acc+=curr;
   return acc;
},0)

console.log(output3);