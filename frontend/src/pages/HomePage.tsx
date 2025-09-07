import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Navbar } from "../components/Navbar";
import { RateLimitedInfo } from "../components/RateLimitedInfo";
import type { Note } from "../types";
import { NoteCard } from "../components/NoteCard";
import { api } from "../lib/axios";
import { NoNotesFound } from "../components/NoNotesFound";
import { LoaderIndicator } from "../components/LoaderIndicator";

export const HomePage = () => {
  const [isRateLimited, setRateLimited] = useState(false);
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await api.get<Note[]>("/notes");
        setNotes(response.data);
        setRateLimited(false);
      } catch (error) {
        console.error("Error fetching notes:", error);
        if (axios.isAxiosError(error) && error.response?.status === 429) {
          setRateLimited(true);
        } else {
          toast.error("An error occurred while fetching notes.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchNotes();
  }, []);

  return (
    <div data-theme="dracula">
      <Navbar />
      {isRateLimited && <RateLimitedInfo />}
      <div className="max-w-6xl mx-auto p-4 mt-6">
        {loading && <LoaderIndicator />}
        {notes.length === 0 && !loading && !isRateLimited && <NoNotesFound />}
        {!loading && !isRateLimited && notes.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {notes.map((note) => (
              <NoteCard key={note._id} {...note} setNotes={setNotes} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
