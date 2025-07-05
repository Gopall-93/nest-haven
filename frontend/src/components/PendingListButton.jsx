
import { FaHouse } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

const PendingListButton = ({ dateString, id }) => {

  const date = new Date(dateString)

  const handleClick = ()=>{
    sessionStorage.setItem("pendingListId",id)

  }
  return (
    <div onClick={handleClick} className=" group hover:border-2 hover:border-black hover:bg-neutral-300/10 flex justify-between space-x-20  items-center  border-2 rounded-2xl p-4 border-neutral-300/50 cursor-pointer">
      <div className="bg-neutral-200 text-center text-3xl p-2 rounded-xl">
        <FaHouse />
      </div>
      <div>
        <h1 className="text-2xl font-semibold">
          Your listing started on{" "}
          {date.toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}{" "}
        </h1>
        <p className="text-neutral-500">Click to complete</p>
      </div>
      <div className="text-center text-3xl ">
        <FaArrowRight className=" group-hover:scale-110 transition-all ease-in-out group-hover:translate-x-1" />
      </div>
    </div>
  );
};

export default PendingListButton;
