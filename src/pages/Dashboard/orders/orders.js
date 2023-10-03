import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../dashboard.css";
import { Link, useNavigate } from "react-router-dom";
import { ShopContext } from "../../../context/shop-context";
import { useContext } from "react";
import { useState, useEffect } from "react";
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
  
  const tempStatuses = orderList.map(x => x.orderStatus)

  const [orderStatuses, setOrderStatuses] = useState([...tempStatuses]);



  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [orderId, setOrderId] = useState(null);

  const handleClose = () => setShow(false);
  const handleClose2 = () => setShow2(false);

  const handleShow2 = () => setShow2(true);
  const handleShow = () => setShow(true);

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
      console.error(error);
      alert("Error deleting order. Please try again.");
    }
  };

  const [selectedStatus, setSelectedStatus] = useState("waiting");

  const handleStatusChange = (i, event) => {
    orderStatuses[i] = event.target.value;
    setOrderStatuses(orderStatuses);
    setSelectedStatus(event.target.value);
  };

  const handleUpdateStatus = () => {
    const url = `https://cracker-shop.onrender.com/orders/update/${orderId}`;
    const headers = {
      Authorization: apiToken,
    };

    // Create the request body
    const requestBody = {
      status: selectedStatus,
    };

    axios
      .post(url, requestBody, { headers })
      .then((response) => {
        alert("Order status updated successfully:", response.data);
        getOrderList();
      })
      .catch((error) => {
        alert("Error updating order status:", error);
      });
  };

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("apiToken");

    navigate("/admin/signin");
  };

  const [orderItemList, setOrderItemList] = useState(null); // State to store the fetched data

  const getOrderItemList = () => {
    axios
      .get(`https://cracker-shop.onrender.com/orders/orderdetails/${orderId}`, {
        headers: {
          Authorization: apiToken,
        },
      })
      .then((res) => {
        setOrderItemList(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getOrderItemList();
  }, []);

  // const handleButtonClick = async () => {

  // };

  return (
    <div>
      <div className="p-5 order">
        <ul class="pagination mb-4">
          <li class="page-item">
            <Link class="page-link" to="/admin/users">
              {" "}
              Users{" "}
            </Link>
          </li>
          <li class="page-item active">
            <Link class="page-link" to="/admin/orders">
              {" "}
              Orders{" "}
            </Link>
          </li>
          <li class="page-item">
            <Link class="page-link" to="/admin/productList">
              {" "}
              Products{" "}
            </Link>
          </li>
        </ul>
        <button className="btn btn-danger m-3 mt-0" onClick={handleLogout}>
          Logout
        </button>

        <table class="table-dark w-75">
          <thead class="thead">
            <tr>
              <th scope="col">#</th>
              <th scope="col">customerName</th>
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
                <td>{x.customerName}</td>
                <td>{formatDate(x.createdAt)}</td>
                <td>
                  <div>
                    <Button
                      variant="primary "
                      onClick={() => {
                        getOrderItemList();
                        setOrderId(x._id);
                        handleShow();
                      }}
                    >
                      Show Items
                    </Button>
                    <Modal
                      show={show}
                      onHide={handleClose}
                      style={{ fontSize: "15px" }}
                    >
                      <Modal.Header closeButton>
                        <Modal.Title>Order Details </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        {" "}
                        <table className="orderItemList">
                          <thead>
                            <tr>
                              <th>Product Name</th>
                              <th>Category Name</th>
                              <th>Image URL</th>
                              <th>Content</th>
                              <th>Actual Price</th>
                              <th>Amount</th>
                              <th>Created At</th>
                            </tr>
                          </thead>
                          <tbody>
                            {orderItemList?.map((item, index) => (
                              <tr key={index}>
                                <td>{item.productName}</td>
                                <td className="">{item.categoryName}</td>
                                <td>
                                  <img
                                    src={item.imageUrl}
                                    width="25"
                                    height="25"
                                    alt={item.imageUrl}
                                  />
                                </td>
                                <td>{item.content}</td>
                                <td>{item.actualPrice}</td>
                                <td>{item.amount}</td>
                                <td>{formatDate(item.createdAt)}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button
                          variant="secondary"
                          onClick={() => {
                            handleClose();
                          }}
                        >
                          OK
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </div>
                </td>
                <td>{x.payableAmount}</td>
                <td>
                  <select
                    id="status"
                    onChange={(event) => {
                      handleStatusChange(i, event);
                      setOrderId(x._id);
                    }}
                    value={orderStatuses[i]}
                  >
                    <option value="waiting">Waiting</option>
                    <option value="confirmed">Confirmed</option>
                    <option value="delivered">Delivered</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                  <button className="btn btn-primary mt-2 "
                    onClick={() => {
                      handleUpdateStatus();
                    }}
                  >
                   <div style={{ fontSize: '14px'}}>Update Status</div> 
                  </button>
                </td>
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
