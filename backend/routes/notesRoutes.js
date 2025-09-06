import express from "express";

const router = express.Router();

router.get("/", (request, response) => {
  response.status(200).send("You fetched notes");
});

router.post("/", (request, response) => {
  response.status(201).send("Note created successfully");
});

router.put("/:id", (request, response) => {
  response.status(200).send("Note updated successfully");
});

router.delete("/:id", (request, response) => {
  response.status(200).send("Note deleted successfully");
});

export default router;
