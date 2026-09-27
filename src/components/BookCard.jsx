import { Heart } from "lucide-react";

const COVERS_API_URL = import.meta.env.VITE_COVERS_API_URL;

const BookCard = ({ book, isFavorite, onToggleFavorite }) => {
  return (
    <div className="relative overflow-hidden rounded-lg border border-purple-600 bg-white p-4">
      <button
        type="button"
        onClick={() => onToggleFavorite(book)}
        className="absolute right-3 top-3 rounded-full bg-white p-2 shadow cursor-pointer hover:bg-gray-100"
        aria-label="Add to favorites"
      >
        <Heart 
          size={20}
          className={isFavorite ? "fill-purple-600" : ""}
        />
      </button>
      
      {book.cover_i ? (
        <img
          src={`${COVERS_API_URL}/${book.cover_i}-M.jpg`}
          alt={book.title}
          className="h-64 w-full object-contain"
        />
      ) : (
        <div className="flex h-64 items-center justify-center bg-gray-100 text-gray-400">
          No cover
        </div>
      )}

      <h2 className="font-semibold text-purple-600">{book.title}</h2>

      <p className="text-sm text-gray-500">
        {book.author_name?.join(", ") || "Unknown author"}
      </p>

      <p className="text-sm text-purple-800">
        {book.first_publish_year || "Year unknown"}
      </p>
    </div>
  );
};

export default BookCard;
