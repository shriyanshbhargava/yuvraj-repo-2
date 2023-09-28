import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../dashboard.css";
import { Link } from "react-router-dom";
import { ShopContext } from "../../../context/shop-context";
import { useContext } from "react";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Trash } from "phosphor-react";
import axios from "axios";

function formatDate(dateString) {
  const options = { year: "numeric", month: "2-digit", day: "2-digit" };
  const formattedDate = new Date(dateString).toLocaleDateString(
    undefined,
    options
  );
  return formattedDate;
}

const Orders = () => {
  const { orderList, getOrderList } = useContext(ShopContext);
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [orderId, setOrderId] = useState(null);

  const handleClose = () => setShow(false);
  const handleClose2 = () => setShow2(false);

  const handleShow = () => setShow(true);
  const handleShow2 = () => setShow2(true);
  const apiToken = localStorage.getItem("apiToken");

  const handleDelete = async () => {
    try {
      const url = `https://cracker-shop.onrender.com/orders/delete/${orderId}`;
      const headers = {
        Authorization: apiToken,
      };

      await axios.get(url, { headers });

      handleClose2();
      getOrderList();

      alert(`Order with ID ${orderId} deleted successfully.`);
    } catch (error) {
      console.log(error);
      alert("Error deleting order. Please try again.");
    }
  };

  return (
    <div>
      <div className="p-5 order">
        <ul class="pagination mb-4">
          <li class="page-item">
            <Link class="page-link" to="/users">
              {" "}
              Users{" "}
            </Link>
          </li>
          <li class="page-item active">
            <Link class="page-link" to="/orders">
              {" "}
              Orders{" "}
            </Link>
          </li>
          <li class="page-item">
            <Link class="page-link" to="/productList">
              {" "}
              Products{" "}
            </Link>
          </li>
        </ul>

        <table class="table-dark w-75">
          <thead class="thead">
            <tr>
              <th scope="col">#</th>
              <th scope="col">customerID</th>
              <th scope="col">Order Date</th>
              <th scope="col">orderItems</th>
              <th scope="col">Total Amount</th>
              <th scope="col">Order Status</th>
              <th scope="col">Cancel The Order</th>
            </tr>
          </thead>
          <tbody className="text-dark orderBody">
            {orderList.map((x, i) => (
              <tr>
                {" "}
                <td>{i}</td>
                <td>{x.customerId}</td>
                <td>{formatDate(x.createdAt)}</td>
                <td>
                  <div>
                    <Button variant="primary " onClick={handleShow}>
                      Show Items
                    </Button>

                    <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>Order Details </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        {" "}
                        {x.orderItems.map((item) => (
                          <ul>
                            <li key={item._id}>Product ID: {item.productId}</li>
                            <li> Quantity: {item.quantity}</li>
                          </ul>
                        ))}
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                          OK
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </div>
                </td>
                <td>{x.payableAmount}</td>
                <td>{x.orderStatus}</td>
                <td>
                  <div>
                    <Button
                      variant="primary "
                      onClick={() => {
                        handleShow2();
                        setOrderId(x._id);
                      }}
                    >
                      <Trash />
                    </Button>

                    <Modal show={show2} onHide={handleClose2}>
                      <Modal.Header closeButton>
                        <Modal.Title>Are You Sure?</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>This order will be Canceled.</Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose2}>
                          No
                        </Button>
                        <Button variant="primary" onClick={handleDelete}>
                          Yes
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </div>
                </td>
                {/* <td>
                  {" "}
                  <DropdownButton
                    id="dropdown-basic-button"
                    title="Order Status"
                  >
                    <Dropdown.Item href="#/action-1">Processing</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Waiting</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Delivered</Dropdown.Item>
                  </DropdownButton>
                </td>
                <th scope="col">Order Status</th>
                <td></td> */}
              </tr>
            ))}
            {orderList.length === 0 && (
              <tr>
                <td>
                  <b>No data found to display.</b>
                </td>
              </tr>
            )}

            {/* <tr>
              <td>aaa</td>
              <td>customerName</td>
              <td>OrderDate</td>
              <td>@Phone</td>
              <td>@amount</td>
              <td>
                {" "}
                <DropdownButton id="dropdown-basic-button" title="Order Status">
                  <Dropdown.Item href="#/action-1">Processing</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">In Transit</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Delivered</Dropdown.Item>
                </DropdownButton>
              </td>
              <td>
                <div>
                  <Button variant="primary " onClick={handleShow}>
                    <Trash />
                  </Button>

                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Are You Sure?</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>This order will be Canceled.</Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        No
                      </Button>
                      <Button variant="primary" onClick={handleClose}>
                        Yes
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </div>
              </td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
