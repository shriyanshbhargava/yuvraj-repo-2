import React from "react";
import { Link } from "react-router-dom";
import "../dashboard.css";
import { ShopContext } from "../../../context/shop-context";
import { useContext } from "react";
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import { Trash } from "phosphor-react";
import axios from "axios";

const Products = ({ product }) => {
  const { productList, getProductList } = useContext(ShopContext);
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [productId, setProductId] = useState(null);

  const apiToken = localStorage.getItem("apiToken");

  const handleClose = () => setShow(false);
  const handleClose2 = () => setShow2(false);

  const handleShow = () => setShow(true);
  const handleShow2 = () => setShow2(true);

  const handleDelete = async () => {
    try {
      // Construct the API URL with the productId
      const url = `https://cracker-shop.onrender.com/products/delete/${productId}`;
      const headers = {
        Authorization: apiToken,
      };

      // Make an HTTP DELETE request using Axios
      await axios.get(url, { headers });

      handleClose2();
      getProductList();

      alert(`Product with ID ${productId} deleted successfully.`);
    } catch (error) {
      console.error(error);
      alert("Error deleting product. Please try again.");
    }
  };

  function formatDate(dateString) {
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    const formattedDate = new Date(dateString).toLocaleDateString(
      undefined,
      options
    );
    return formattedDate;
  }

  const [formData, setFormData] = useState({
    productName: "",
    categoryName: "",
    imageUrl: "",
    content: "",
    actualPrice: 0,
    amount: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://cracker-shop.onrender.com/products/add",
        formData,
        {
          headers: {
            Authorization: apiToken,
          },
        }
      );
      alert("Product added:", response.data);
      getProductList();
    } catch (error) {
      alert("Error adding product:", error);
    }
  };

  return (
    <div>
      <div className="pt-3 order">
        <ul class="pagination mb-4">
          <li class="page-item">
            <Link class="page-link" to="/users">
              {" "}
              Users{" "}
            </Link>
          </li>
          <li class="page-item ">
            <Link class="page-link" to="/orders">
              {" "}
              Orders{" "}
            </Link>
          </li>
          <li class="page-item active">
            <Link class="page-link" to="/productList">
              {" "}
              Products{" "}
            </Link>
          </li>
        </ul>

        <div>
          <Button variant="primary " className="mb-2" onClick={handleShow}>
            Add a Product
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Are You Sure?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form onSubmit={handleSubmit}>
                <div class="form-group">
                  <label>categoryName*</label>
                  <input
                    type="text"
                    value={formData.categoryName}
                    onChange={handleChange}
                    name="categoryName"
                    class="form-control"
                    required
                  />
                  <label>imageUrl*</label>
                  <input
                    type="url"
                    value={formData.imageUrl}
                    name="imageUrl"
                    onChange={handleChange}
                    class="form-control"
                    required
                  />{" "}
                  <label>productName*</label>
                  <input
                    type="text"
                    value={formData.productName}
                    onChange={handleChange}
                    name="productName"
                    class="form-control"
                    required
                  />{" "}
                  <label>content*</label>
                  <input
                    type="text"
                    value={formData.content}
                    name="content"
                    onChange={handleChange}
                    class="form-control"
                    required
                  />{" "}
                  <label>actualPrice*</label>
                  <input
                    type="number"
                    value={formData.actualPrice}
                    name="actualPrice"
                    onChange={handleChange}
                    class="form-control"
                    required
                  />{" "}
                  <label>amount*</label>
                  <input
                    type="number"
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    class="form-control"
                    required
                  />
                </div>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                No
              </Button>
              <Button variant="primary" type="submit" onClick={handleSubmit}>
                Yes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>

        <table class="table-dark w-75">
          <thead class="thead">
            <tr>
              <th scope="col">#</th>
              <th scope="col">productName</th>
              <th scope="col">categoryName</th>
              <th scope="col">imageUrl</th>
              <th scope="col">content</th>
              <th scope="col">amout</th>
              <th scope="col">createdAt</th>
              <th scope="col">deleteProduct</th>
            </tr>
          </thead>
          <tbody className="text-dark orderBody">
            {productList.map((x, i) => (
              <tr>
                <td>{x._id}</td>
                <td>{x.productName}</td>
                <td>{x.categoryName}</td>
                <td>
                  <img
                    src={x.imageUrl}
                    width="50"
                    height="50"
                    alt={x.imageUrl}
                  />
                </td>
                <td>{x.content}</td>
                <td>{x.amount}</td>
                <td>{formatDate(x.createdAt)}</td>
                <td>
                  <div>
                    <Button
                      variant="primary "
                      onClick={() => {
                        handleShow2();
                        setProductId(x._id);
                      }}
                    >
                      <Trash />
                    </Button>

                    <Modal show={show2} onHide={handleClose2}>
                      <Modal.Header closeButton>
                        <Modal.Title>Add Product !</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>This Product will be Deleted.</Modal.Body>
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
              </tr>
            ))}

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

export default Products;
