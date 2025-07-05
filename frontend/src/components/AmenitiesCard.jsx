import { iconMap } from "../utils/iconMap";

const AmenitiesCard = ({
  label,
  options,
  selectedAmenities,
  onToggleAmenity,
}) => {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-start text-xl font-semibold">{label}</h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {options.map((option, index) => {
          const Icon = iconMap[option];
          const isSelected = selectedAmenities.includes(option);

          return (
            <div
              key={index}
              onClick={() => onToggleAmenity(option)}
              className={`border-2 rounded-xl p-4 flex flex-col items-center cursor-pointer transition-all
                ${
                  isSelected
                    ? "border-rose-600 bg-rose-50 text-rose-600"
                    : "border-neutral-300 hover:border-black"
                }`}
            >
              <Icon
                className={`text-3xl ${isSelected ? "text-rose-600" : ""}`}
              />
              <p
                className={`mt-2 text-base font-medium ${
                  isSelected ? "text-rose-600" : ""
                }`}
              >
                {option}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AmenitiesCard;
