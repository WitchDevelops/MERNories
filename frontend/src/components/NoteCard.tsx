import type { Note } from "../types";
export const NoteCard: React.FC<Note> = ({
  title,
  content,
  createdAt,
  updatedAt,
}) => {
  return (
    <div className="border border-base-300 rounded-lg p-4">
      <p>{title}</p>
      <p>{content}</p>
      <p>created: {new Date(createdAt).toLocaleString()}</p>
      <p>last updated: {new Date(updatedAt).toLocaleString()}</p>
    </div>
  );
};
