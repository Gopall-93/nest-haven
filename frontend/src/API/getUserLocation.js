import axios from "axios";

export const userLocation = async () => {
  try {
    const { data } = await axios.get("https://ipinfo.io/json");
    const location = {
      city: data.city,
      state: data.region,
      countryCode: data.country,
    };

    return { location };
  } catch (err) {
    console.log(err);
  }
};
