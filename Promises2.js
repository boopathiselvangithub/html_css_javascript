const cart=["shoes","pants","shirt"];

//consumer
createOrder(cart)// returning promises;//returning orderid;    //console.log(promise)
.then(function(orderId){
    console.log("ready to payment with "+orderId);
    return orderId;
})
.then(function(orderId){
    return proceedToPayment(orderId);
})
.then(function(paymentInfo){
   console.log(paymentInfo);
})
.catch(function(err){
  console.log(err.message);
})

//producer

function createOrder(cart){
    const pr=new Promise(function(resolve,reject){
      if(!validCard(cart)){
          const err=new Error("card is not valid");
          reject(err);
      }
      orderId="12345";
      if(orderId){
        setTimeout(function(){
          resolve(orderId);
        },5000);
      }
    })
    return pr;
}
function validCard(cart){
    return true;
}
function proceedToPayment(orderId){
  return new Promise(function(resolve,reject){
    resolve("Payment Successfull");
  })
}

