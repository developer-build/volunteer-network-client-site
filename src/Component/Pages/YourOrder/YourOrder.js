import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../Firebase/Init";
import Header from "../../Shear/Header/Header";
import OrderHistory from "./orderHistory/OrderHistory";
import "./YourOrder.css";

const YourOrder = () => {
  const [order, setOrder] = useState([]);
  const [user] = useAuthState(auth);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    fetch(
      `https://murmuring-journey-10809.herokuapp.com/order?email=${user?.email}`,
      {
        headers: {
          authorization: `${localStorage.getItem("token")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, [user, reload]);

  const deleteHandler = (id) => {
    console.log(id);
    const confirm = window.confirm("are you sure");
    if (confirm) {
      const url = `https://murmuring-journey-10809.herokuapp.com/order/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          setReload(!reload);
        });
    }
  };

  return (
    <div className="your-order">
      <Header />
      <br />
      <br />
      <br />
      <br />
      <div className="container p-5 ">
        <div className="row row-cols-md-2 g-4">
          {order.map((orders) => (
            <OrderHistory
              deleteHandler={deleteHandler}
              orderHistory={orders}
              key={orders._id}
            ></OrderHistory>
          ))}
        </div>
      </div>
    </div>
  );
};

export default YourOrder;
