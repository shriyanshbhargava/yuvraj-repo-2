import React, { useContext, useRef } from "react";
import html2pdf from "html2pdf.js";
import { InvoiceItem } from "./invoice-Item";
import "./invoice.css";
import { Envelope, HouseLine, PhoneCall } from "phosphor-react";
import moment from "moment";
import { ShopContext } from "../../context/shop-context";

function PDFGenerator() {
  const {
    cartItems,
    getTotalCartAmount,
    getTotalActualCartAmount,
    formData,
    selectedCity,
    selectedState,
  } = useContext(ShopContext);
  const divRef = useRef(null);

  const serialNumber = `YPM-${moment().format("DDMMYYYYhhmmss")}`;


  const handleGeneratePDF = () => {
    const div = divRef.current;

    if (div) {
      const pdfOptions = {
        margin: 10,
        filename: "content.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      };

      html2pdf().from(div).set(pdfOptions).save();
    }
  };

  // export {handleGeneratePDF}

  const totalAmount = getTotalCartAmount();
  const totalActualAmount = getTotalActualCartAmount();
  const totalDiscountAmount = totalActualAmount - totalAmount;
  const currentDate = moment().format("DD-MM-YYYY hh:mm:ss");
  const { productList } = useContext(ShopContext);
  return (
    <div className="invoiceParentDiv">
      <button
        className="btn btn-success mb-3"
        style={{ width: "15rem" }}
        onClick={handleGeneratePDF}
      >
        Generate PDF
      </button>

      <div ref={divRef}>
        <div class="container ">
          <div class="row">
            <div class="col-md-12">
              <div class="card">
                <div class="card-body">
                  <div class="invoice-title">
                    <h4 class="float-end font-size-15">
                      Invoice {serialNumber}
                      {/* <span class="badge bg-success font-size-12 ms-2">Paid</span> */}
                    </h4>
                    <div class="mb-4">
                      <h2 class="mb-1 text-muted">Yuvraj Pyro Mart</h2>
                    </div>
                    <div class="text-muted">
                      <p class="mb-1">
                        <HouseLine /> : Near Jaihindpuram market, Satya Sai
                        Nagar, TVS Nagar, Madurai - 11
                      </p>
                      <p class="mb-1">
                        <Envelope /> : fireworksretailsales@gmail.com
                      </p>
                      <p>
                        <PhoneCall /> : 9500971427
                      </p>
                    </div>
                  </div>

                  <hr class="my-4" />

                  <div class="row">
                    <div class="col-sm-6">
                      <div class="text-muted">
                        <h5 class="font-size-16 mb-3">Billed To:</h5>
                        <h5 class="font-size-15 mb-2">
                          {formData.customerName}
                        </h5>
                        <p class="mb-1">
                          {formData.customerAddress}, {selectedCity},{" "}
                          {selectedState}
                        </p>
                        <p class="mb-1">{formData.customerEmail}</p>
                        <p>{formData.customerPhone}</p>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="text-muted text-sm-end">
                        <div>
                          <h5 class="font-size-15 mb-1">Invoice No:</h5>
                          <p>{serialNumber}</p>
                        </div>
                        <div class="mt-4">
                          <h5 class="font-size-15 mb-1">
                            Invoice Date & Time:
                          </h5>
                          <p>{currentDate}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="py-2">
                    <h5 class="font-size-15">Order Summary</h5>
                    <div class="table-responsive">
                      <thead>
                        <tr className="invoiceTableHead">
                          <th >Item</th>
                          <th>Acutal Price</th>
                          <th>Price</th>
                          <th>Quantity</th>
                          <th class="text-end">Total</th>
                        </tr>
                      </thead>
                      {productList.map((product) => {
                        if (cartItems[product._id] || 0) {
                          return <InvoiceItem data={product} />;
                        }
                      })}
                      <table class="table align-middle table-nowrap table-centered mb-0">
                        <tbody>
                          <tr>
                            <th
                              colSpan={6}
                              scope="row"
                              class="border-0 text-end"
                            >
                              Sub Total
                            </th>
                            <th class="border-0  text-end">
                              ₹ {totalActualAmount}
                            </th>
                          </tr>
                          <tr>
                            <th
                              scope="row"
                              colspan="6"
                              class="border-0 text-end"
                            >
                              Discount :
                            </th>
                            <th class="border-0 text-end">
                              - ₹ {totalDiscountAmount}
                            </th>
                          </tr>

                          <tr>
                            <th
                              scope="row"
                              colspan="6"
                              class="border-0 text-end"
                            >
                              Total
                            </th>
                            <td class="border-0 text-end">
                              <h4 class="m-0 fw-semibold">₹ {totalAmount}</h4>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PDFGenerator;
