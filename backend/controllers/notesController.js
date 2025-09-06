export const getAllNotes = (req, res) => {
  res.status(200).send("You fetched notes");
};

export const createNote = (req, res) => {
  res.status(201).send("Note created successfully");
};

export const updateNote = (req, res) => {
  res.status(200).send("Note updated successfully");
};
export const deleteNote = (req, res) => {
  res.status(200).send("Note deleted successfully");
};
