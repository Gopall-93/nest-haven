import { useSelector } from "react-redux";
import { useContext, useEffect } from "react";
import { submitContext } from "../../../utils/submitContext";

const Overview = () => {
  const id = sessionStorage.getItem("newListId");
  const { setSelected } = useContext(submitContext);
  useEffect(() => {
    setSelected(false);
  }, []);

  const storeId = useSelector((state) => state.listId);

  return (
    <div className="grid grid-cols-2 m-12 grid-rows-6  ">
      <div className=" col-span-1 row-span-6 m-6 translate-y-30  pr-30 ">
        <h1 className="text-3xl font-bold">
          Your cozy nest deserves the spotlight—let’s list it!
        </h1>
        <p className="text-sm text-neutral-500 mt-2">
          It's easy to start with NEST HAVEN
        </p>
      </div>

      <div className="flex items-start gap-4 max-w-full  row-span-2 m-6">
        <div className="flex-1">
          <h2 className="text-xl font-bold">1 Tell us about your place</h2>
          <p className="text-sm text-neutral-500 ml-3 mt-2 p-3">
            Help us with the basics: where your place is and how many it can
            comfortably welcome.
          </p>
        </div>
        <div>
          <img
            className="object-contain"
            style={{ width: "100px" }}
            src="/public/NewListingIntroPage1.png"
            alt=""
          />
        </div>
      </div>

      <div className="flex items-start gap-4 max-w-full  row-span-2 m-6">
        <div className="flex-1">
          <h2 className="text-xl font-bold">2 Make it stand out</h2>
          <p className="text-sm text-neutral-500 ml-3 mt-2 p-3">
            Let your Nest tell its story—start with a beautiful photo gallery
          </p>
        </div>
        <div>
          <img
            className="object-contain"
            style={{ width: "100px" }}
            src="/public/NewListingIntroPage2.png"
            alt=""
          />
        </div>
      </div>

      <div className="flex items-start gap-4 max-w-full  row-span-2 m-6">
        <div className="flex-1">
          <h2 className="text-xl font-bold">3 Finish up and publish</h2>
          <p className="text-sm text-neutral-500 ml-3 mt-2 p-3">
            Choose your starting price, set the house rules, and get ready to
            welcome guests!
          </p>
        </div>
        <div>
          <img
            className="object-contain"
            style={{ width: "100px" }}
            src="/public/NewListingIntroPage3.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Overview;
