const BOOKS_API_URL = import.meta.env.VITE_BOOKS_API_URL;

export const searchBooks = async ({
  query,
  searchField = "title",
  sort = "relevance",
  language = "",
  year = "",
  page = 1,
}) => {
  const params = new URLSearchParams({
    [searchField]: query,
    page: String(page),
    limit: 12,
    fields: "key,title,author_name,first_publish_year,cover_i",
  });

  if(language) {
    params.set("language", language);
  }

  if(year) {
    params.set("first_publish_year", year);
  }

  if (sort === "new") {
    params.set("sort", "new");
  }

  const response = await fetch(`${BOOKS_API_URL}?${params}`);

  if (!response.ok) {
    throw new Error("Failde to fetch books");
  }

  return response.json();
};
