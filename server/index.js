import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import router from "./routes/router.js";

const PORT = 5000;
const DB_URL =
  "mongodb+srv://user:user@cluster0.fyymxe0.mongodb.net/?retryWrites=true&w=majority";

const app = express();

mongoose.set("strictQuery", false);

app.use(cors());

app.use(express.json());
app.use("/todos", router);

async function startApp() {
  try {
    await mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    app.listen(PORT, () => console.log("starts"));
  } catch (err) {
    console.log(err);
  }
}

startApp();
