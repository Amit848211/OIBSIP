import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { assets } from "../../assets/assets";
import "./order.css"

function Order({ url }) {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    const response = await axios.get(`${url}/api/order/list`);
    if (response.data.success) {
      setOrders(response.data.data);
      console.log("list data", response.data.data);
    } else {
      toast.error("Error");
    }
  };

  const statusHandler = async (event,orderId)=>{
    console.log(event,orderId);
    let status=event.target.value;
    console.log(status);
    const response = await axios.post(url+"/api/order/status",{
      orderId,
      status:status
    })
    if(response.data.success){
      await fetchAllOrders()
    }
  }





  useEffect(() => {
    fetchAllOrders();
  }, []);
  console.log("data", orders);
  return (
    <><div className="ml-6 mt-2">
      <div className="order add">
        <h3 className="text-2xl  text-orange-600">Order Page</h3>
        
        <div className="order-list mt-3">
        
          {orders.map((order, index) => {
            console.log(orders)
            return <>
            <div className="order-item pr-5" key={index}>
              <img src={assets.parcel_icon} alt=""></img>
              <div>{ console.log(order._id)}
                <p className="order-item-food">
                  {order.items.map((item, index) => {
                    if (index === order.items.length - 1) {
                      return item.name + " x " + item.quantity;
                    } else {
                      return item.name + " x " + item.quantity + ",";
                    }
                  })}
                </p>
                <p className="order-item-name">
                  {order.address.firstName + " " + order.address.lastName}
                </p>
                <div className="order-item-address">
                  <p>{order.address.street+","}</p>
                  <p>{order.address.city+","+order.address.street+","+order.address.country+","+order.address.zipcode}</p>
                </div>
                <p className="order-item-phone">{order.address.phone}</p>
              </div>
              <p>Items:{order.items.length}</p>
              <p>${order.amount}</p>
              <select onChange={(event)=>statusHandler(event,order._id)} value={orders.status}>
                <option value="Food Proccessing">Food Proccessing</option>
                <option value="Out for delivery">Out for delivery</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>
            </>
          })}
        </div>
      </div>
      </div>
    </>
  );
}

export default Order;
