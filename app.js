const express = require("express");
const mongoose = require("mongoose");
const blogRoutes = require("./routes/blogRoutes");
const app = express();
const dotenv = require("dotenv");
dotenv.config({ path: __dirname + "/.env" });

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });

app.set("view engine", "ejs");

app.use(express.static("public"));
// parses data into an object to use in the req object
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.use("/blogs", blogRoutes);

app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
