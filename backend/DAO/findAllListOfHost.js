import List from "../schema/list.schema.js";

export const findAllListOfHost = async (id) => {
  const allListings = await List.find({ hostId: id });
  return allListings;
};
