//normal 
const cart=["shoes","pants","shirt"];
createOrder(cart,function(orderId){

    proceedToPayment(OrderId,function(paymentInfo){

        showOrderSummary(paymentInfo,function(orderSummary){

            updateWalletBalance(orderSummary)

        });

        });
    });
//callback hell

//promises

//const promise=createOrder(cart);
createOrder(cart) // returning some promises containing some data
.then(function(orderId){
   return proceedToPayment(OrderId)   //chaining one another...this is a promises chain..
})
.then(function(paymentInfo){
    return showOrderSummary(paymentInfo)
})
.then(function(orderSummary){
   return updateWalletBalance(orderSummary)
});