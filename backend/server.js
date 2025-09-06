import express from "express";

const app = express();

app.get("/api/notes", (request, response) => {
  response.status(200).send("You got 15 notes");
});

app.post("/api/notes", (request, response) => {
  response.status(201).send("Note created successfully");
});

app.put("/api/notes/:id", (request, response) => {
  response.status(200).send("Note updated successfully");
});

app.delete("/api/notes/:id", (request, response) => {
  response.status(200).send("Note deleted successfully");
});

app.listen(5001, () => {
  console.log("Server is running on port 5001");
});
