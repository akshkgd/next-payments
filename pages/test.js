import Razorpay from "razorpay";
import Order from "../components/Test";
{
    var instance = new Razorpay({
      key_id: "rzp_test_1n7UQFBVcvqudE",
      key_secret: "aA9O74xMpTepYIhfaRG6RZ11",
    });
  
    var options = {
      amount: 50000,
      currency: "INR",
      receipt: "order_rcptid_11",
    };
    instance.orders.create(options, function (err, order) {
      console.log(order);
    });
  }
function test(){
    return(
        <div>

            <h1>RAZORPAY</h1>
            <Order/>
            </div>
    )
}

export default test;



// {
//     id: 'order_IL2j4u5lp9NADw',
//     entity: 'order',
//     amount: 50000,
//     amount_paid: 0,
//     amount_due: 50000,
//     currency: 'INR',
//     receipt: 'order_rcptid_11',
//     offer_id: null,
//     status: 'created',
//     attempts: 0,
//     notes: [],
//     created_at: 1636796703
//   }