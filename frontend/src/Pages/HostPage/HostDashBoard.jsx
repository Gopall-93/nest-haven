import PendingListButton from "../../components/PendingListButton";
import { useSelector } from "react-redux";

import NewListingButton from "../../components/NewListingButton";

const HostDashBoard = () => {
  const { user } = useSelector((state) => state.auth);
  const { allListings } = JSON.parse(localStorage.getItem("Lists"));
  const pendingLists = allListings.filter((list) => list.status == "pending");
  console.log("Pending lists array", pendingLists);
  return (
    <>
      <div className="text-center mb-10">
        <h1 className="text-3xl font-semibold">
          Welcome Back, {user.user.name}
        </h1>
      </div>

      <div className="flex flex-col justify-center items-center space-y-3 mb-40">
        <div className="text-2xl font-semibold w-2xl mb-10 p-2 ">
          Finish your Listing
        </div>
        {pendingLists.map((list, index) => (
          <PendingListButton
            key={index}
            dateString={list.createdAt}
            id={list._id}
          />
        ))}
      </div>
      <div className="flex flex-col justify-center items-center space-y-3">
        <h1 className="text-2xl  font-semibold w-2xl mb-10 p-2 ">
          Start a new Listing
        </h1>
        <NewListingButton id={user.user._id} />
      </div>
    </>
  );
};

export default HostDashBoard;
