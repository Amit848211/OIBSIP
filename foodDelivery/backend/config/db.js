import mongoose from "mongoose";
export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://AmitSweets:8482111999@cluster0.vzvie33.mongodb.net/food-del"
    )
    .then(()=>console.log("DB connected"));
};
