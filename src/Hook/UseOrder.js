import { useEffect, useState } from "react";

const UseOrder = () => {
  const [order, setOrder] = useState([]);

  useEffect(() => {
    fetch("https://murmuring-journey-10809.herokuapp.com/order")
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, []);

  return [order, setOrder];
};

export default UseOrder;
