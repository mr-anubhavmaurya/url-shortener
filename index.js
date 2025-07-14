const express = require("express");
const app = express();
const path = require("path");
const PORT = 8000;
const urlRoute = require("./routes/url");
const { connectMongoDB } = require("./connection");
const staticRoute = require("./routes/staticRouter")

//DB connection
connectMongoDB("mongodb://localhost:27017/short-url").then(() => {
  console.log("MongoDB connected...");
});
//middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));
//views
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
//routes
app.use("/url", urlRoute);
app.use("/", staticRoute);

app.listen(PORT, () => {
  console.log(`server started @ PORT:${PORT}`);
});
