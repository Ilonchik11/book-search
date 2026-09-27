import { Heart, Search } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="border-b bg-purple-600">
      <div className="mx-auto flex w-full items-center justify-between px-4 py-4">
        <Link className="text-xl font-bold text-white cursor-pointer" to="/">
          Book Finder
        </Link>

        <nav className="flex items-center gap-4">
          <Link
            className="flex items-center gap-2 text-sm hover:font-bold cursor-pointer text-white"
            to="/search"
          >
            <Search size={18} />
            Search
          </Link>

          <Link
            className="flex items-center gap-2 text-sm hover:font-bold cursor-pointer text-white"
            to="/favorites"
          >
            <Heart size={18} />
            Favorites
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
