import { Link } from "react-router";
import { PlusIcon } from "lucide-react";
export const Navbar = () => {
  return (
    <header className="bg-base-300 border-b border-base-content">
      <div className="mx-auto max-w-6xl p-4">
        <div className="flex flex-col gap-2 xs:flex-row justify-between">
          <h1 className="text-3xl font-bold text-primary font-mono tracking-widest">
            MERNories
          </h1>
          <Link to="/create" className="btn btn-primary">
            <PlusIcon className="size-4 mr-1" />
            New note
          </Link>
        </div>
      </div>
    </header>
  );
};
