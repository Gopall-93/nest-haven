import List from "../schema/list.schema.js";

export const findListById = async (id, list) => {
  const listing = await List.findByIdAndUpdate(id, list);
  return listing;
};
