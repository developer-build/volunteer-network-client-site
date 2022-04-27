import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import "./register.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";

const RegisterList = () => {
  const [order, setOrder] = useState([]);
  const [reload, setReload] = useState(false);

  console.log(order);

  useEffect(() => {
    fetch(`https://murmuring-journey-10809.herokuapp.com/orders`)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, [reload]);

  const deleteHandler = (id) => {
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
                  <td>
                    <button
                      onClick={() => deleteHandler(register._id)}
                      className="registerBeleteButton"
                    >
                      <FontAwesomeIcon
                        style={{ marginRight: "10px" }}
                        icon={faDeleteLeft}
                      />
                    </button>
                  </td>
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
