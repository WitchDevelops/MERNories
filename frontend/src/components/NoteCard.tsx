import { Link } from "react-router";
import { PenSquareIcon, TrashIcon } from "lucide-react";
import type { Note } from "../types";
import { formatDate } from "../lib/utils";
import { api } from "../lib/axios";
import toast from "react-hot-toast";

interface NoteCardProps extends Note {
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}
export const NoteCard: React.FC<NoteCardProps> = ({
  _id,
  title,
  content,
  createdAt,
  updatedAt,
  setNotes,
}) => {
  const handleDeleteNote = async (e: React.MouseEvent, id: string) => {
    e.preventDefault(); // Prevent navigation
    if (!window.confirm("Are you sure you want to delete this note?")) {
      return;
    }
    try {
      await api.delete(`/notes/${id}`);
      toast.success("Note deleted successfully.");
      setNotes((prev) => prev.filter((note) => note._id !== id));
    } catch (error) {
      console.error("Error deleting note:", error);
      toast.error("An error occurred while deleting the note.");
    }
  };
  return (
    <Link
      to={`/note/${_id}`}
      className="card bg-base-300 hover:shadow-lg transition-all duration-200 border-t-4 border-solid border-primary"
    >
      <div className="card-body">
        <h2 className="card-title text-base-content">{title}</h2>
        <p className="text-base-content/70 line-clamp-3">{content}</p>
        <div className="card-actions justify-between mt-4">
          <div>
            <p className="text-sm">created: {formatDate(createdAt)}</p>
            {updatedAt !== createdAt && (
              <p className="text-sm text-base-content/70">
                updated: {formatDate(updatedAt)}
              </p>
            )}
          </div>
          <div className="flex items-center gap-1">
            <button className="btn btn-ghost btn-sm btn-circle hover:bg-primary/10 hover:text-primary">
              <PenSquareIcon className="size-5 text-base-content/70" />
            </button>
            <button
              className="btn btn-ghost btn-sm btn-circle hover:bg-red-500/10 hover:text-error"
              onClick={(e) => {
                handleDeleteNote(e, _id);
              }}
            >
              <TrashIcon className="size-5 text-base-content/70 hover:text-error" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};
