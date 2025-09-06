import { Link } from "react-router";
import { PenSquareIcon, TrashIcon } from "lucide-react";
import type { Note } from "../types";
import { formatDate } from "../lib/utils";
export const NoteCard: React.FC<Note> = ({
  _id,
  title,
  content,
  createdAt,
  updatedAt,
}) => {
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
            <button className="btn btn-ghost btn-sm btn-circle hover:bg-red-500/10 hover:text-error">
              <TrashIcon className="size-5 text-base-content/70 hover:text-error" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};
