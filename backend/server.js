import express from "express";

const app = express();

app.get("/api/notes", (request, response) => {
  response.status(200).send("You got 15 notes");
});

app.listen(5001, () => {
  console.log("Server is running on port 5001");
});
