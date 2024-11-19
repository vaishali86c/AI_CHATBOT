import express from "express";

const app = express();

// GET 
app.get("/hello", (req, res, next) => {
  return res.send("hello");
})
// PUT
// POST
// DELETE




app.listen(5000, () => console.log("Server Open"));