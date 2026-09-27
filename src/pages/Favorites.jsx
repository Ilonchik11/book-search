import { useEffect, useState } from "react";
import BookList from "../components/BookList";
import useFavorites from "../hooks/useFavorites";

const Favorites = () => {
  const { favorites, toggleFavorite, isFavorite } = useFavorites();

  useEffect(() => {

  }, []);

  return (
    <section className="flex flex-col gap-8 mx-auto w-full h-full py-8 px-8">
      <h1 className="text-xl font-bold text-purple-600 text-center">My Favorites</h1>
      <BookList 
        books={favorites}
        isFavorite={isFavorite}
        onToggleFavorite={toggleFavorite}
      />
    </section>
  );
};

export default Favorites;
