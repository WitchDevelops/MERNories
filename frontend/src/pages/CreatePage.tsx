import { useState } from "react";
export const CreatePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {

  }
  return <div>CreatePage</div>;
};