import { useState } from "react";
import { Link, useNavigate } from "react-router";
import axios from "axios";
import { ArrowLeftIcon, SaveIcon } from "lucide-react";
import toast from "react-hot-toast";

export const CreatePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      toast.error("Title and content are required");
      return;
    }
    setLoading(true);

    try {
      await axios.post("http://localhost:5001/api/notes", { title, content });
      toast.success("Note created successfully");
      setTitle("");
      setContent("");
      navigate(-1);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 429) {
        toast.error("Rate limit exceeded. Please try again later.");
        return;
      } else {
        toast.error("An error occurred while creating the note.");
        console.error("Error creating note:", error);
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <div data-theme="dracula" className="min-h-screen bg-base-200">
      <div className="max-w-6xl mx-auto p-4 space-y-4">
        <Link to={"/"} className="btn btn-ghost">
          <ArrowLeftIcon className="size-5" /> Back to all Notes
        </Link>

        <div className="card bg-base-100 shadow-md">
          <div className="card-body">
            <h2 className="card-title text-2xl mb-4 text-primary">
              Create a New Note
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text text-secondary">Title</span>
                </label>
                <input
                  className="input input-bordered"
                  type="text"
                  placeholder="Note title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                ></input>
              </div>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text text-secondary">Content</span>
                </label>
                <textarea
                  className="textarea textarea-bordered min-h-48"
                  placeholder="Write your note here..."
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                ></textarea>
              </div>
              <div className="flex justify-end mt-6">
                <button
                  className="btn btn-primary"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? (
                    "Saving..."
                  ) : (
                    <p className="flex items-center">
                      <SaveIcon className="size-5 mr-2" /> Save
                    </p>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
