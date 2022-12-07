// be secured
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

// import fetch from "node-fetch";
const express = require("express");
const app = express();
const port = 3000;
const access = `http://localhost:3000`;
const fetch = require("node-fetch");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Halaman Utama");
  console.log("Halaman Utama");
});

// saved api data to use later
const api_key = process.env.API_KEY;

app.get("/dinoname", async (req, res) => {
  const fetchApi = await fetch("https://dinoipsum.com/api/?format=json&words=2&paragraphs=1");
  const dinoNameResponse = await fetchApi.json();
  console.log(dinoNameResponse);
  res.json(dinoNameResponse);
});
app.get("/dinoimage", async (req, res) => {
  const fetchApi = await fetch(`https://pixabay.com/api/?key=${api_key}&q=dinosaurs&image_type=photo&min_width=500&min_height=500&category=animals`);
  const dinoImageResponse = await fetchApi.json();
  console.log(dinoImageResponse);
  res.json(dinoImageResponse);
});
app.use((req, res) => {
  const inputData = app.set("error", "Alamat URL Tidak Di Ketahui");
  const getData = app.get("error");
  res.send(`<h1>Error : ${getData}</h1>`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}, load ${access}`);
});
