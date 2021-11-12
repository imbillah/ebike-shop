import React from "react";
import payment from "../../../media/images/payment.jpg";
const Payment = () => {
  return (
    <div>
      <h2 className="text-center fw-bold text-uppercase text-custom mt-5">
        We will update payment system soon
      </h2>
      <img src={payment} alt="" className="d-block mx-auto mt-5 rd-custom" />
    </div>
  );
};

export default Payment;
