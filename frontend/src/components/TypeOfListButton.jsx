
const TypeOfListButton = ({ Icon, label, isSelected, onSelect }) => {
  
  const handleClick = () => {
    onSelect(label);
    
  };

  return (
    <button
      id={label}
      onClick={handleClick}
      className={`shadow-xl max-w-50 rounded-xl flex-col text-center p-5 m-5 cursor-pointer transition-transform hover:-translate-y-1 ease-in-out hover:scale-110 ${
        isSelected ? "border-2 border-rose-600" : "border-2"
      }`}
    >
      <span>
        <Icon
          className={`${isSelected ? "text-rose-600" : ""}`}
          sx={{ fontSize: "3rem" }}
        />
      </span>
      <p className={`${isSelected ? "text-rose-600" : ""}`}>{label}</p>
    </button>
  );
};

export default TypeOfListButton;
