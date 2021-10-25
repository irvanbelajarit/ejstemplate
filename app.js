const express = require("express");

const app = express();
const expressLayouts = require("express-ejs-layouts");
const PORT = 3000;

//view engine ejs
app.set("view engine", "ejs");
app.use(expressLayouts);

const peserta = [
  {
    nama: "irvan",
    email: "irvanln@gmail.com",
    password: "123",
  },
  {
    nama: "irvan1",
    email: "irvanln1@gmail.com",
  },
  {
    nama: "irvan2",
    email: "irvanln2@gmail.com",
  },
];

app.get("/", (req, res) => {
  // res.send("<h1>halaman Utama</h1>");
  res.render("index", { title: "home", layout: "layout/main-layout" });
});

app.get("/about", (req, res) => {
  // res.send("<h1>halaman Utama</h1>");
  res.render("about", {
    title: "about",
    peserta,
    layout: "layout/main-layout",
  });
});

app.get("/contact", (req, res) => {
  //   res.send("<h1>halaman Utama</h1>");
  res.render("contact", { title: "contact", layout: "layout/main-layout" });
});

app.listen(PORT, () => {
  console.log(`web server berjalan pada port ${PORT}....`);
});
