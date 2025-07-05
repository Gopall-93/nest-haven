import { useEffect, useState } from "react";
import { Outlet, useMatches, useNavigate } from "@tanstack/react-router";
import ProgressBar from "../../components/ProgressBar";
import { submitContext } from "../../utils/submitContext";
import { axiosInstance } from "../../API/axiosInstance.js";

const HostParentPage = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(true);

  const links = [
    "/host/newlist/overview",
    "/host/newlist/step1",
    "/host/newlist/structure",
    "/host/newlist/privacy",
    "/host/newlist/floor-plan",
    "/host/newlist/step2",
    "/host/newlist/amenities",
    "/host/newlist/title",
    "/host/newlist/image",
    "/host/newlist/description",
    "/host/newlist/description2",
    "/host/newlist/step3",
    "/host/newlist/price",
    "/host/newlist/discount",
  ];
  const len = links.length;
  const currentRoute = useMatches()[2].routeId;
  const becomeHost = currentRoute == "/host/dashboard";
  const CurrentIndex = links.indexOf(currentRoute);
  const [currentWidth, setCurrentWidth] = useState(CurrentIndex);

  useEffect(() => {
    setCurrentWidth(Math.min((CurrentIndex + 1) * (100 / len), 100));
  });

  const handleClick = async (e) => {
    const current = e.currentTarget.dataset.type;
    if (len === CurrentIndex + 1) {
      const list = {};

      for (let i = 0; i < sessionStorage.length; i++) {
        const key = sessionStorage.key(i);
        try {
          const value = JSON.parse(sessionStorage.getItem(key));

          if (key === "price") {
            const numericPrice = Number(String(value).replace(/[^0-9.]/g, ""));
            list[key] = numericPrice;
          } else {
            list[key] = value;
          }
        } catch (err) {
          const rawValue = sessionStorage.getItem(key);
          if (key === "price") {
            const numericPrice = Number(
              String(rawValue).replace(/[^0-9.]/g, "")
            );
            list[key] = numericPrice;
          } else {
            list[key] = rawValue;
          }
        }
      }

      console.log("Final list to send:", list);
      try {
        const res = await axiosInstance.post("/newlist/add", { list });
        console.log(res);
      } catch (err) {
        console.log(err);
        setSelected(false);
      }
    }
    if (current === "Inc") {
      setSelected(true);
      setCurrentWidth(Math.min((CurrentIndex + 1) * (100 / len), 100));
      return navigate({ to: links[CurrentIndex + 1] });
    }
    if (current === "Dec") {
      setCurrentWidth(Math.max(currentWidth - 100 / len, 0));
      return navigate({ to: links[CurrentIndex - 1] });
    }
    if (current == "exit") {
      return navigate({ to: "/" });
    }
  };

  return (
    <div className="w-screen h-screen flex flex-col bg-white overflow-hidden">
      <div className="flex justify-between items-center m-4 p-2">
        <div
          style={{ fontFamily: "Major Mono Display" }}
          className="text-2xl font-bold text-rose-500"
        >
          Nest Haven
        </div>
        <button
          onClick={handleClick}
          data-type="exit"
          className="p-2 px-4 bg-transparent border-black border-2 text-center rounded-2xl cursor-pointer hover:bg-neutral-200"
        >
          Exit
        </button>
      </div>

      <div className="flex-grow overflow-y-auto">
        <submitContext.Provider value={{ setSelected, selected }}>
          <Outlet />
        </submitContext.Provider>
      </div>
      {!becomeHost && (
        <ProgressBar
          currentWidth={currentWidth}
          handleClick={handleClick}
          selected={selected}
          index={CurrentIndex}
          len={len}
        />
      )}
    </div>
  );
};

export default HostParentPage;
