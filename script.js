let select=document.querySelectorAll(".currency");
let input=document.getElementById("input");
btn=document.getElementById("btn");

const promise=  fetch('https://api.frankfurter.app/currencies');
promise.then(res=>res.json())
.then(res=>dropDown(res));


console.log(select);
function dropDown(res){
    let arr=Object.entries(res);
    for(let i=0;i<arr.length;i++){
       opt=`<option id='${arr[i][0]}'>${arr[i][0]}</option>`;
       select[0].innerHTML+=opt;
       select[1].innerHTML+=opt;
    }
}

btn.addEventListener("click",()=>{
    let curr1=select[0].value;
    let curr2=select[1].value;
    let inputVal=input.value;
    if(curr1==curr2)
    alert("Choose different countries..")
    else
    converter(curr1,curr2,inputVal);
})

function converter(curr1,curr2,inputVal){
    const api = 'api.frankfurter.app';
    fetch(`https://${api}/latest?amount=${inputVal}&from=${curr1}&to=${curr2}`)
    .then(res=>res.json())
    .then(data=>{
        document.getElementById("result").value=Object.values(data.rates)[0];
       
    })


}