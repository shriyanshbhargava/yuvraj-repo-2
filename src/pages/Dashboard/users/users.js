import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Trash } from "phosphor-react";
import { ShopContext } from "../../../context/shop-context";
import axios from "axios";

function formatDate(dateString) {
  const options = { year: "numeric", month: "2-digit", day: "2-digit" };
  const formattedDate = new Date(dateString).toLocaleDateString(
    undefined,
    options
  );
  return formattedDate;
}

const Users = ({ user }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);
  const [userId, setUserId] = useState(null);
  const apiToken = localStorage.getItem("apiToken");

  const { userList, getUserList } = useContext(ShopContext);

  const handleDelete = async () => {
    try {
      const url = `https://cracker-shop.onrender.com/customers/delete/${userId}`;
      const headers = {
        Authorization: apiToken,
      };

      await axios.get(url, { headers });

      handleClose();
      getUserList();

      alert(`User with ID ${userId} deleted successfully.`);
    } catch (error) {
      console.log(error);
      alert("Error deleting User. Please try again.");
    }
  };

  return (
    <div>
      <div className="p-5 order">
        <ul class="pagination mb-4">
          <li class="page-item active">
            <Link class="page-link" to="/admin/users">
              {" "}
              Users{" "}
            </Link>
          </li>
          <li class="page-item ">
            <Link class="page-link" to="/admin/orders">
              {" "}
              Orders{" "}
            </Link>
          </li>
          <li class="page-item ">
            <Link class="page-link" to="/admin/productList">
              {" "}
              Products{" "}
            </Link>
          </li>
        </ul>
        <table class="table-dark w-100">
          <thead class="thead">
            <tr>
              <th scope="col">#</th>
              <th scope="col">customerName</th>
              <th scope="col">customerPhone</th>
              <th scope="col">customerEmail</th>
              <th scope="col">customerAddress</th>
              <th scope="col">customerCity</th>
              <th scope="col">customerState</th>
              <th scope="col">createdAt</th>
              <th scope="col">deleteUser</th>
            </tr>
          </thead>
          <tbody class="text-dark orderBody">
            {userList.map((x, i) => (
              <tr>
                <td>{i}</td>
                <td>{x.customerName}</td>
                <td>{x.customerPhone}</td>
                <td>{x.customerEmail}</td>
                <td>{x.customerAddress}</td>
                <td>{x.customerCity}</td>
                <td>{x.customerState}</td>
                <td>{formatDate(x.createdAt)}</td>
                <td>
                  <div>
                    <Button
                      variant="primary "
                      onClick={() => {
                        handleShow();
                        setUserId(x._id);
                      }}
                    >
                      <Trash />
                    </Button>

                    <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>Are You Sure?</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>This user will be deleted.</Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                          No
                        </Button>
                        <Button variant="primary" onClick={handleDelete}>
                          Yes
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </div>
                </td>
              </tr>
            ))}
            {userList.length === 0 && (
              <tr>
                <td>
                  <b>No data found to display.</b>
                </td>
              </tr>
            )}
            {/* <tr>
              <td>1</td>
              <td>customerName</td>
              <td>customerPhone</td>
              <td>@customerEmail</td>
              <td>@customerAddress</td>
              <td>@customerCity</td>
              <td>@customerState</td>
            </tr> */}
            {/* <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
