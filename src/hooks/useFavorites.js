import { useState } from 'react'

const STORAGE_KEY = "book-favorites";

const useFavorites = () => {
  const [favorites, setFavorites] = useState(() => {
    const storedFavorites = localStorage.getItem(STORAGE_KEY);

    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  const toggleFavorite = (book) => {
    setFavorites((currentFavorites) => {
        const isFavorite = currentFavorites.some(
            (favorite) => favorite.key === book.key
        );

        const updatedFavorites = isFavorite
            ? currentFavorites.filter(
                (favorite) => favorite.key !== book.key
            )
            : [...currentFavorites, book];

        localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedFavorites));

        return updatedFavorites;
    })
  };

  const isFavorite = (bookKey) => {
    return favorites.some((book) => book.key === bookKey);
  }

  return {
    favorites, 
    toggleFavorite,
    isFavorite,
  }
}

export default useFavorites