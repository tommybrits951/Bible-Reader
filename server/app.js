require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();
const connectDB = require("./config/db-config");
const { default: mongoose } = require("mongoose");
const PORT = process.env.PORT || 9000;
const apiKey = { "api-key": `1b566dda217480217ceac049b61d801c` };
const Bible = require("./models/Bible");
const bibleRoute = require("./routes/bibleRoute");




connectDB();


app.use(cors());
app.use(express.json());
app.use("/bible", bibleRoute);
mongoose.connection.once("open", () => {
  app.listen(PORT, () => console.log(`server running on ${PORT}`));
});

mongoose.connection.on("error", err =>
  console.log("mongoose connection error")
);
