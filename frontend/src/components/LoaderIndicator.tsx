import { Loader2Icon } from "lucide-react";

export const LoaderIndicator = () => {
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center">
      <Loader2Icon className="animate-spin size-6" />
      <p className="ml-2">Loading...</p>
    </div>
  );
};
