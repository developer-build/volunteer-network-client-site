import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const RegisterList = () => {
  const [order, setOrder] = useState([]);
  console.log(order);

  useEffect(() => {
    fetch(`http://localhost:5000/orders`)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, []);

  return (
    <div>
      <h4>Volunteer register list</h4>
      <div className="register-list">
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email Id</th>
                <th>Registering date</th>
                <th>Volunteer list</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {order.map((register) => (
                <tr className="text-center">
                  <td>{register.name}</td>
                  <td>{register.email}</td>
                  <td>{register.date}</td>
                  <td>{register.items}</td>
                  <td>X</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default RegisterList;
