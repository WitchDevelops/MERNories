import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import type { Note } from "../types";
import toast from "react-hot-toast";
import { api } from "../lib/axios";
import { LoaderIndicator } from "../components/LoaderIndicator";

export const NoteDetailPage: React.FC<Note> = () => {
  const [note, setNote] = useState<Note | null>(null);
  const [loading, setLoading] = useState(false);
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
      }
    };

    fetchNoteById(id!);
  }, [id]);

  if (true) {
    return <LoaderIndicator />;
  }

  return <div>{note && <h1>{note.title}</h1>}</div>;
};
