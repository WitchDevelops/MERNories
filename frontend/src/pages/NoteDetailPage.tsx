import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router";
import type { Note } from "../types";
import toast from "react-hot-toast";
import { api } from "../lib/axios";
import { LoaderIndicator } from "../components/LoaderIndicator";
import { ArrowLeftIcon, Loader2Icon, SaveIcon, TrashIcon } from "lucide-react";

export const NoteDetailPage: React.FC<Note> = () => {
  const [note, setNote] = useState<Note | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchNoteById = async (noteId: string) => {
      try {
        const res = await api.get(`/notes/${noteId}`);
        setNote(res.data);
      } catch (error) {
        console.error("Error fetching note:", error);
        toast.error("An error occurred while fetching the note.");
        setNote(null);
      } finally {
        setLoading(false);
      }
    };

    fetchNoteById(id!);
  }, [id]);

  if (loading) {
    return <LoaderIndicator />;
  }

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this note?")) {
      return;
    }
    try {
      await api.delete(`/notes/${id}`);
      toast.success("Note deleted successfully.");
      navigate(-1);
    } catch (error) {
      console.error("Error deleting note:", error);
      toast.error("An error occurred while deleting the note.");
    }
  };
  const handleSave = async () => {
    if (!note?.title.trim() || !note?.content.trim()) {
      toast.error("Title and content are required.");
      return;
    }
    setSaving(true);
    try {
      await api.put(`/notes/${id}`, note);
      toast.success("Note updated successfully.");
    } catch (error) {
      console.error("Error saving note:", error);
      toast.error("An error occurred while saving the note.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div data-theme="dracula" className="min-h-screen bg-base-200">
      <div className="max-w-6xl mx-auto p-4 space-y-4">
        <div className="flex flex-col xs:flex-row justify-between mb-6 gap-2">
          <Link to={"/"} className="btn btn-ghost">
            <ArrowLeftIcon className="size-5 mr-2" />
            Back to Notes
          </Link>
          <button
            className="btn btn-error btn-outline"
            disabled={saving}
            onClick={handleDelete}
          >
            <TrashIcon className="size-5 mr-2" />
            Delete Note
          </button>
        </div>
        {note ? (
          <div className="card bg-base-100">
            <div className="card-body">
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text text-secondary">Title</span>
                </label>
                <input
                  className="input input-bordered"
                  type="text"
                  placeholder="Note title"
                  value={note.title}
                  onChange={(e) => setNote({ ...note, title: e.target.value })}
                ></input>
              </div>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text text-secondary">Content</span>
                </label>
                <textarea
                  className="textarea textarea-bordered min-h-48"
                  placeholder="Write your note here..."
                  value={note.content}
                  onChange={(e) =>
                    setNote({ ...note, content: e.target.value })
                  }
                ></textarea>
              </div>
              <div className="flex justify-end mt-6">
                <button
                  className="btn btn-primary"
                  type="submit"
                  disabled={saving}
                  onClick={handleSave}
                >
                  {saving ? (
                    <p className="flex items-center">
                      <Loader2Icon className="animate-spin size-5 mr-2" />
                      Saving...
                    </p>
                  ) : (
                    <p className="flex items-center">
                      <SaveIcon className="size-5 mr-2" /> Save Changes
                    </p>
                  )}
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center text-base-content/70 py-10">Note not found.</div>
        )}
      </div>
    </div>
  );
};
