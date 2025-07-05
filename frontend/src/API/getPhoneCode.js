import axios from "axios";

export const phoneCodes = async () => {
  const { data } = await axios.get(
    "https://restcountries.com/v3.1/all?fields=name,flags,idd,cca2"
  );
  const responses = data
    .map((d) => ({
      flag: d.flags.png,
      name: d.cca2,
      code: d.idd.root+d.idd.suffixes[0],
      countryName:d.name.common
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
  return { responses };
};
