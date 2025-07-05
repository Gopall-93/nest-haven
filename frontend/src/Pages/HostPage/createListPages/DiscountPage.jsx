import React, { useState, useEffect, useContext } from "react";
import Discount from "../../../components/Discount";
import { submitContext } from "../../../utils/submitContext";

const DiscountPage = () => {
  const { setSelected } = useContext(submitContext);
  const initialDiscounts = JSON.parse(sessionStorage.getItem("discount")) || [];

  const [discountList, setDiscountList] = useState(initialDiscounts);

  useEffect(() => {
    sessionStorage.setItem("discount", JSON.stringify(discountList));
    if (discountList.length > 0) {
      setSelected(false);
    }
  }, [discountList]);

  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <h1 className="text-3xl font-semibold">Add discounts</h1>
        <p>
          Help your place stand out to get booked faster and earn your first
          review
        </p>
      </div>
      <div>
        <Discount
          dis={true}
          value={"20%"}
          label={"New listing promotion"}
          sublabel={"Offer 20% off your first 3 bookings"}
          discountList={discountList}
          setDiscountList={setDiscountList}
        />
        <Discount
          value={"10%"}
          label={"Weekly Discount"}
          sublabel={"For stays of 7 nights or more"}
          discountList={discountList}
          setDiscountList={setDiscountList}
        />
        <Discount
          value={"20%"}
          label={"Monthly Discount"}
          sublabel={"For stays of 28 nights or more"}
          discountList={discountList}
          setDiscountList={setDiscountList}
        />
      </div>
    </div>
  );
};

export default DiscountPage;
