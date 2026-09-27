import { BookOpen, Heart, Search } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="mx-auto flex max-w-6xl flex-1 flex-col items-center justify-center px-4 py-16 text-center">
      <div className="mb-6 rounded-2xl bg-purple-600 p-5 text-white">
        <BookOpen size={48} />
      </div>

      <h1 className="mb-4 text-4xl font-bold md:text-5xl">
        Find your next favorite book
      </h1>

      <p className="mb-8 max-w-xl text-gray-500">
        Discover new stories, explore your favorite genres, and create your
        personal reading list.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <Link
          to="/search"
          className="flex items-center gap-2 rounded-lg bg-purple-600 px-6 py-3 text-white transition cursor-pointer hover:bg-purple-950"
        >
          <Search size={18} />
          Explore books
        </Link>

        <Link
          to="/favorites"
          className="flex items-center gap-2 rounded-lg border border-purple-600 px-6 py-3 text-purple-600 transition cursor-pointer hover:bg-gray-100"
        >
          <Heart size={18} />
          My Favorites
        </Link>
      </div>

      <div className="mt-12 flex items-center gap-4 text-sm text-purple-600">
        <BookOpen size={20} />
        <span>Discover. Read. Enjoy.</span>
      </div>
    </section>
  );
};

export default Home;
