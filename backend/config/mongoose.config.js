import mongoose from "mongoose";

main().catch((err) => console.log(err));

export async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/nesthaven");
  console.log("Connected to database");

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
