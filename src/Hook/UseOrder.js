import { useEffect, useState } from "react";

const UseOrder = () => {
  const [order, setOrder] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/order")
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, []);

  return [order, setOrder];
};

export default UseOrder;
