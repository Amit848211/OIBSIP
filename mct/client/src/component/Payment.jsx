
import React, { useContext, useEffect } from "react";
import { StoreContext } from "../context/ContexApi";

function Payment() {
  


 

 


    const {totalCartAmmount} = useContext(StoreContext);
  
    console.log(totalCartAmmount);


    const username = import.meta.env.VITE_KEY_ID;
    const password = import.meta.env.VITE_KEY_SECRET;
    
    
       function makeFirstApiRequest(amountpaid) {
        
        var accessToken = btoa(`${username}:${password}`);
        const url = 'https://corsproxy.io/?' + encodeURIComponent('https://api.razorpay.com/v1/orders');
        fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Basic " + accessToken,
          },
          body: JSON.stringify({
            
            amount: amountpaid,
            currency: "INR",
            receipt: "qwsaq1",
            partial_payment: true,
            first_payment_min_amount: 230,
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("data: ", data);
            
            var orderId = data.order_id;
    
            
            initiateRazorpayPayment(orderId, amountpaid);
          })
          .catch((error) => {
            console.error("Error making first API request:", error);
          });
      }
    
      function initiateRazorpayPayment(orderId, amountpaid) {
        var options = {
            "key": "rzp_test_pbp0v4wadM2etX",
            "amount": amountpaid, 
            "currency": "INR",
            "name": "RazorePay",
            "description": name,
            "image": "https://example.com/your_logo",
            "order_id": orderId, 
            "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
            "prefill": { 
                "name": "Amit Kumar",
                "email": "amit.kumar@example.com",
                "contact": "9000090000" },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        };
        var rzp1 =   new Razorpay(options);
        rzp1.open();
      }
    
  useEffect(()=>{
    makeFirstApiRequest(totalCartAmmount);
  },[])
}

export default Payment