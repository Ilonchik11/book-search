import { useEffect, useState } from "react";
import BookList from "../components/BookList";
import Loading from "../components/Loading";
import SearchBar from "../components/SearchBar";
import useFavorites from "../hooks/useFavorites";
import { searchBooks } from "../services/booksApi";

const Search = () => {
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [error, setError] = useState("");

  const { toggleFavorite, isFavorite } = useFavorites();

  useEffect(() => {
    handleSearch({
      query: "fiction",
      searchField: "subject",
      sort: "relevance",
      language: "",
      year: "",
      page: 1,
    });
  }, []);

  const loadBooks = async (params, page = 1, append = false) => {
    try {
      if (append) {
        setIsLoadingMore(true);
      } else {
        setIsLoading(true);
        setHasMore(true);
      }

      setError("");

      const data = await searchBooks({
        ...params,
        page,
      });

      const newBooks = data.docs;

      setBooks((currentBooks) =>
        append ? [...currentBooks, ...newBooks] : newBooks,
      );

      setHasMore(newBooks.length === 12);
    } catch (error) {
      setError("Something went wrong. Please try again.");
    } finally {
      if (append) {
        setIsLoadingMore(false);
      } else {
        setIsLoading(false);
      }
    }
  };

  const handleSearch = (params) => {
    setPage(1);
    setSearchParams(params);
    loadBooks(params, 1);
  };

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    loadBooks(searchParams, nextPage, true);
  };

  return (
    <section className="flex flex-col items-center gap-8 mx-auto w-full h-full py-8 px-8">
      <SearchBar onSearch={handleSearch} />

      {isLoading && <Loading />}

      {error && <p>{error}</p>}

      {!isLoading && !error && (
        <>
          <BookList
            books={books}
            isFavorite={isFavorite}
            onToggleFavorite={toggleFavorite}
          />

          {searchParams &&
            hasMore &&
            (isLoadingMore ? (
              <Loading />
            ) : (
              <button
                type="button"
                onClick={handleLoadMore}
                className="rounded-lg bg-purple-600 px-5 py-2 text-white hover:bg-purple-700"
              >
                Load more
              </button>
            ))}
        </>
      )}
    </section>
  );
};

export default Search;
