import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-row">
        <Link
          to="/skills"
          className="px-2.5 py-1.5 flex items-center gap-x-2 hover:bg-muted rounded-md  font-semibold"
        >
          Skills
        </Link>
        <Link
          to="/aboutme"
          className="px-2.5 py-1.5 flex items-center gap-x-2 hover:bg-muted rounded-md  font-semibold"
        >
          About me
        </Link><Link
          to="/projects"
          className="px-2.5 py-1.5 flex items-center gap-x-2 hover:bg-muted rounded-md  font-semibold"
        >
          Projects
        </Link>
      </div>
    </div>
  );
};
