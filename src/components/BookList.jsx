import BookCard from "./BookCard";

const BookList = ({ books, isFavorite, onToggleFavorite }) => {
  return (
    <div className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {books.length ? (
        books.map((book) => (
          <BookCard
            key={book.key}
            book={book}
            isFavorite={isFavorite(book.key)}
            onToggleFavorite={onToggleFavorite}
          />
        ))
      ) : (
        <p className="text-center">No books found.</p>
      )}
    </div>
  );
};

export default BookList;
