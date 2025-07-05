import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Search, Plus, Minus } from "lucide-react";
import { DateRangePicker } from "react-date-range";
import { useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { axiosInstance } from "../API/axiosInstance";
import { updateListId } from "../../app/ListId.slice";

export const Navbar = () => {
  const navigate = new useNavigate();
  const dispatch = useDispatch();
  const { user, isLoggedIn } = useSelector((state) => state.auth);
  
  const [guests, setGuests] = useState({
    Adult: {
      count: 0,
      detail: "Ages 13 or above",
    },
    Kids: {
      count: 0,
      detail: "Ages 2–12",
    },
    ServicePets: {
      count: 0,
      detail: "Bringing a service animal",
    },
  });

  const [showDates, setshowDates] = useState(false);

  const [showGuests, setshowGuests] = useState(false);

  const [dates, setDates] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (ranges) => {
    setDates(ranges.selection);
    setshowDates(true);
  };

  const handleOpenDates = (e) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  const handleOpenGuest = () => {
    setshowGuests((prev) => !prev);
  };

  const handleIncrement = (label) => {
    setGuests((prev) => ({
      ...prev,
      [label]: { ...prev[label], count: prev[label].count + 1 },
    }));
  };

  const handleDecrement = (label) => {
    setGuests((prev) => ({
      ...prev,
      [label]: { ...prev[label], count: Math.max(prev[label].count - 1, 0) },
    }));
  };

  const handleClick = async () => {
    const { data } = await axiosInstance.post("/host/update", {
      id: user.user._id,
    });

    const allListings = data?.allListings;

    if (data.success) {
      if (allListings.length == 0) {
        const { data } = await axiosInstance.post(`/${user.user._id}/listid`);
        dispatch(updateListId(data.id));
        sessionStorage.setItem("newListId", data.id);
        
        navigate({ to: "/host/newlist/overview" });
      } else {
        localStorage.setItem("Lists", JSON.stringify(data));
        navigate({ to: "/host/dashboard" });
      }
    }
  };

  return (
    <>
      <div className="w-full bg-neutral-100 rounded-b-xl p-4 shadow ">
        <div className="flex justify-between items-center  ">
          <div
            style={{ "font-family": "Major Mono Display" }}
            className=" text-2xl font-bold text-rose-500"
          >
            Nest Haven
          </div>
          <div className="space-x-6  md:flex">
            <a
              className="text-gray-700 hover:text-rose-600 transition ease-in-out hover:font-bold hover:scale-120 hover:-translate-y-1"
              href=""
            >
              Home
            </a>
            <a
              className="text-gray-700 hover:text-rose-600 hover:font-bold hover:-translate-y-1 hover:scale-120 transition ease-in-out"
              href=""
            >
              Contact
            </a>
            <Link
              className="text-gray-700 hover:text-rose-600 hover:font-bold hover:-translate-y-1 hover:scale-120 transition ease-in-out"
              href=""
            >
              About us
            </Link>
          </div>
          <div className="flex  text-center">
            <div className="self-center p-3">
              <div
                onClick={handleClick}
                className="text-black hover:font-medium cursor-pointer"
              >
                Become a host
              </div>
            </div>
            <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden border-1">
              <img src={user.user.avatar} alt="" />
            </div>
          </div>
        </div>
        <div className=" flex justify-center items-center mt-10">
          <div className="flex items-center justify-between gap-2 p-2 pl-4 pr-2 rounded-full shadow-md border w-full max-w-4xl bg-white">
            <div className="flex-1 px-4">
              <input
                type="text"
                placeholder="Search destinations"
                className="w-full text-sm bg-transparent outline-none placeholder-gray-500"
              />
            </div>

            <div className="h-6 border-l" />

            <button
              onClick={handleOpenDates}
              className="px-4 py-2 text-sm hover:bg-gray-100 rounded-full transition border border-transparent hover:border-transparent focus:outline-none"
            >
              <div className="text-left">
                <div className="font-semibold text-sm">Check in</div>
                <div className="text-gray-500 text-sm">
                  {showDates
                    ? dates.startDate.toLocaleDateString("en-US", {
                        day: "2-digit",
                        month: "long",
                      })
                    : "Add dates"}
                </div>
              </div>
            </button>

            <div className="h-6 border-l" />

            <button
              disabled
              onClick={handleOpenDates}
              className="px-4 py-2 text-sm rounded-full  border border-transparent "
            >
              <div className="text-left">
                <div className="font-semibold text-sm">Check out</div>
                <div className="text-gray-500 text-sm">
                  {showDates
                    ? dates.endDate.toLocaleDateString("en-US", {
                        day: "2-digit",
                        month: "long",
                      })
                    : "Add dates"}
                </div>
              </div>
            </button>

            <div className="h-6 border-l" />

            <button
              onClick={handleOpenGuest}
              className="px-4 py-2 text-sm hover:bg-gray-100 rounded-full transition border border-transparent hover:border-transparent focus:outline-none"
            >
              <div className="text-left">
                <div className="font-semibold text-sm">Who</div>
                <div className="text-gray-500 text-sm">Add guests</div>
              </div>
            </button>

            <button className="bg-rose-500 text-white p-3 rounded-full hover:bg-rose-600 transition hover:scale-110">
              <Search className="hover:rotate-20 transition ease-in-out" />
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur"
          onClick={handleOpenDates}
        >
          <div
            className="bg-white p-4 rounded-lg shadow-lg z-60"
            onClick={(e) => e.stopPropagation()}
          >
            <DateRangePicker ranges={[dates]} onChange={handleChange} />
          </div>
        </div>
      )}
      {showGuests && (
        <div
          onClick={handleOpenGuest}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur"
        >
          <div
            className="bg-white p-4 rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            {Object.entries(guests).map(([label, details], index) => (
              <div key={label}>
                <div className="flex items-center justify-between m-4">
                  <div className="flex-col justify-items-start  p-5 ">
                    <div className="text-xl font-bold text-center">{label}</div>
                    <div className="text-neutral-500 text-center">
                      {details.detail}
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 ml-20">
                    <button
                      className="bg-amber-300 p-2 rounded-full"
                      aria-label={`Decrease ${label}`}
                      onClick={() => handleDecrement(label)}
                    >
                      <Minus />
                    </button>
                    <span className="min-w-[40px] text-center">
                      {details.count}
                    </span>
                    <button
                      className="bg-amber-300 p-2 rounded-full"
                      aria-label={`Increase ${label}`}
                      onClick={() => handleIncrement(label)}
                    >
                      <Plus />
                    </button>
                  </div>
                </div>

                {index != 2 && (
                  <hr className="border-t border-neutral-300 mx-4" />
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
