export const verfiedUser = async (req, res) => {
  res.status(200).json({ user: req.user, message: "Token verified" });
};
