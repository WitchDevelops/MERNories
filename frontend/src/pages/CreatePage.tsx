import { ArrowLeftIcon, SaveIcon } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
export const CreatePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    console.log("Submitting:", { title, content });
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
                  required
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
